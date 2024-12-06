import React from "react";

import ContactIcons from "../Contact/contact_icons";

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <div className="image-container">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </div> */}
      <header>
        <h2>Wang Jinghao 王靖淏</h2>
        <ContactIcons />
      </header>
    </section>
  </section>
);

export default SideBar;
