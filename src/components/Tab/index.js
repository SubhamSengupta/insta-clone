import React from "react";
import propTypes from "prop-types";
import "./styles.css";

const Tab = ({ children, tabName, isActive, handleClick }) => (
  <div
    className={
      (isActive ? "tab active" : "tab") +
      (tabName === "ADD_PHOTO" ? " add-photo" : "")
    }
    onClick={handleClick(tabName)}
  >
    {children}
  </div>
);

Tab.propTypes = {
  children: propTypes.node.isRequired,
  tabName: propTypes.string.isRequired,
  isActive: propTypes.bool,
  handleClick: propTypes.func.isRequired
};

Tab.defaultProps = {
  isActive: false
};

export default Tab;
