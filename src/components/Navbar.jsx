import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutLineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRout = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div>
      <footer className="navbar">
        <nav className="navbarNav">
          <ul className="navbarListItems">
            <li className="navbarListItem" onClick={() => navigate("/")}>
              <ExploreIcon
                fill={pathMatchRout("/") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p
                className={
                  pathMatchRout("/")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Explore
              </p>
            </li>
            <li className="navbarListItem" onClick={() => navigate("/offers")}>
              <OfferIcon
                fill={pathMatchRout("/offers") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p
                className={
                  pathMatchRout("/offers")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Offer
              </p>
            </li>
            <li className="navbarListItem" onClick={() => navigate("/profile")}>
              <PersonOutLineIcon
                fill={pathMatchRout("/profile") ? "#2c2c2c" : "#8f8f8f"}
                width="36px"
                height="36px"
              />
              <p
                className={
                  pathMatchRout("/profile")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Profile
              </p>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Navbar;
