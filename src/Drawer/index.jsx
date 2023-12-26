import React, { useState } from "react";

export default function Index({ open, setOpen }) {
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div style={{ width: "100%", height: "50px", backgroundColor: "grey", padding: "0.5rem" }}>
      <nav>
        <button style={{ backgroundColor: "blue" }} onClick={toggleDrawer}>
          menu
        </button>
      </nav>
    </div>
  );
}
