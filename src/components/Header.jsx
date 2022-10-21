import React, { useState } from "react";

export default function Header() {
  const [shadow, setShadow] = useState(false)

  const handleClick = () => {
      setShadow(!shadow)
  }

  return (
    <div>
      <img
        style={
          shadow === true ? { outline: "4px solid #EAECF0" } : { outline: "" }
        }
        onClick={handleClick}
        className="share"
        src="../images/share.svg"
        alt=""
      />
      <img
        className="share mobile-share"
        src="../images/mobile-share.svg"
        alt=""
      />
      <div
        className="desc"
        style={shadow === true ? { opacity: 0 } : { opacity: "" }}
      >
        <div className="share-description">
          Share Link
          <div></div>
        </div>
      </div>

      <div className="profile">
        <div className="profile-img-container">
          <img id="profile__img" src="../images/profile__img.svg" alt="" />
          <div className="profile-hover">
            <img className="camera" src="../images/camera.svg" alt="" />
          </div>
        </div>
        <p id="twitter">Anointed Osara</p>
        <p id="slack">Anointed1</p>
      </div>
    </div>
  );
}
