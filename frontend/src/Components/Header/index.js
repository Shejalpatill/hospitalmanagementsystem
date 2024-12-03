import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assests/images/logo - Copy.png";
import Nav from "./Nav";
import ProfileMenu from "../Profilemenu";

const Header = () => {
  return (
    <div className="HeaderWrapper container">
      <div className="header row align-items-center">
        <div className="logoWrapper col-md-3 col-sm-12 col-xs-12 d-flex align-items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo_image" />
          </Link>
        </div>
        <div className="part2 col-md-6 col-sm-6 ">
          <Nav />
        </div>
        <div className="diel col-md-2 col-sm-3  d-flex justify-content-center">
          <h6>040 66846399</h6>
        </div>
        <div className="part4 col-md-1 col-sm-6">
          <ProfileMenu/>
        </div>
      </div>
    </div>
  );
};

export default Header;
