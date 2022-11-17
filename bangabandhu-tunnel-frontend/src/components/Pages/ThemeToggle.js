import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ThemeToggle.css";
import MoonIcon from "../../images/moon.svg";
import SunIcon from "../../images/sun.svg";
const updateTheme = (isDarkEnabled) => {
  // Get CSS variables for background/foreground
  const styles = getComputedStyle(document.body);
  const black = styles.getPropertyValue("--black");
  const white = styles.getPropertyValue("--white");
  const docEl = document.documentElement;

  if (isDarkEnabled) {
    docEl.style.setProperty("--background", black);
    docEl.style.setProperty("--foreground", white);
    document.querySelector("html").classList.add("darkmode");
  } else {
    docEl.style.setProperty("--background", white);
    docEl.style.setProperty("--foreground", black);
    document.querySelector("html").classList.remove("darkmode");
  }
};

const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  /*
   * Read the blog post here:
   * https://letsbuildui.dev/articles/building-a-dark-mode-theme-toggle
   */

  useEffect(() => {
    updateTheme(isEnabled);
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };
  return (
    <div>
      <label className="toggle-wrapper" htmlFor="toggle">
        <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
          <span className="hidden">
            {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
          </span>
          <div className="icons">
            {/* <SunIcon />
            <MoonIcon /> */}
          </div>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isEnabled}
            onClick={toggleState}
          />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
