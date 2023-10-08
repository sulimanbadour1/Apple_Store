"use client";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,

  // Color, // Import THREE.js internals
  // Texture, // Import THREE.js internals
} from "webgi";
import { scrollAnimation } from "../lib/scroll-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef(({ props }: any, ref: any) => {
  const canvasRef = useRef(null);
  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      if (props?.contentRef?.current?.style) {
        props.contentRef.current.style.opacity = "0";
      }
      if (cameraRef && viewerRef && targetRef) {
        gsap.to((cameraRef as any).position, {
          // add type assertion to cameraRef
          x: 1.9990061396,
          y: 2.5864087265,
          z: -17.1513550396,
          duration: 2,
          onUpdate: () => {
            if (viewerRef) {
              (viewerRef as any).setDirty(); // add type assertion to viewerRef
              (cameraRef as any).positionTargetUpdated(true);
            }
          },
        });
        gsap.to(targetRef, {
          x: -0.099355398,
          y: 1.6169336678,
          z: -0.0782657466,
          duration: 2,
        });
      }
    },
  }));

  const memoizedScrollAnimation = useCallback(
    (position: any, target: any, onUpdate: any) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, onUpdate);
      }
    },
    []
  );

  const setupViewer = useCallback(async () => {
    // Initialize the viewer

    const viewer = new ViewerApp({
      canvas: canvasRef.current ?? undefined,
    });
    setViewerRef(viewer as any); // add type assertion to viewer

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    setCameraRef(camera as any);
    setPositionRef(position as any);
    setTargetRef(target as any);

    // // Add a popup(in HTML) with download progress when any asset is downloading.
    // await viewer.addPlugin(AssetManagerBasicPopupPlugin);

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
    // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
    await viewer.addPlugin(BloomPlugin);
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)
    // and many more...

    // or use this to add all main ones at once.
    // await addBasePlugins(viewer);

    // // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    // await viewer.addPlugin(CanvasSnipperPlugin);

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await manager.addFromPath("14progold.glb");
    const tonemapPlugin = viewer.getPlugin(TonemapPlugin);
    if (tonemapPlugin && tonemapPlugin.config) {
      tonemapPlugin.config.clipBackground = true;
    }
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
    memoizedScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef}></canvas>
    </div>
  );
});

export default WebgiViewer;
