import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import SearchIcon from "../assets//images/search.svg";
import Store from "../assets//images/store.svg";
const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <Image src={Logo} alt="SBlogo" />
          </li>
          <li>
            <a className="link-styled" href="">
              Store
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              Mac
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              iPad
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              iPhone
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              AirPods
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              Tv & Home
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              Entertainment
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              Accessories
            </a>
          </li>
          <li>
            <a className="link-styled" href="">
              Support
            </a>
          </li>
          <li>
            <Image src={SearchIcon} alt="Search" />
          </li>
          <li>
            <Image src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
