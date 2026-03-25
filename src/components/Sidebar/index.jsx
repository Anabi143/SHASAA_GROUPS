import { navRoutes } from "../../data";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { cssPerfectShape } from "../../util";

import "./Sidebar.css";

const Sidebar = ({ open, onClose }) => {

  const location = useLocation();

  return (
    <div className={`sidebar ${open && "active"}`}>

      <div className="top">
        <div
          className="close-btn"
          onClick={onClose}
          style={{ ...cssPerfectShape(40, 40) }}
        >
          <FaTimes />
        </div>
      </div>

      <div className="middle">

        {navRoutes.map((route, index) => (

          location.pathname === "/" ? (

            <ScrollLink
              key={index}
              to={route.id}
              className="route"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-50}
              onClick={onClose}
            >
              {route.name}
            </ScrollLink>

          ) : (

            <RouterLink
              key={index}
              to={`/#${route.id}`}
              className="route"
              onClick={onClose}
            >
              {route.name}
            </RouterLink>

          )

        ))}

      </div>

    </div>
  );
};

export default Sidebar;