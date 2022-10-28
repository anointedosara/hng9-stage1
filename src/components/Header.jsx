import React from "react";

export default function Header() {
  return (
    <div>
      <button className="header-desktop-share">
        <img
          style={{width: "15px", height: "14px"}}
          src="../images/share-icon.svg"
          alt=""
        />
      </button>
      <button className="header-desktop-share header-mobile-share">
        <img
          style={{width: "13px", height: "5px"}}
          
          src="../images/dot-icon.svg"
          alt=""
        />
      </button>
      <div className="desc">
        <div className="share-description">
          Share Link
          <div></div>
        </div>
      </div>

      <div className="profile">
        <div className="profile-img-container">
          <img id="profile__img" src="../images/profile__img.jpg" alt="" />
          <div className="profile-hover">
            <img className="camera" src="../images/camera.svg" alt="" />
          </div>
        </div>
        <p id="twitter">OsaraAnointed</p>
        <p id="slack">AnointedOsara</p>
      </div>
    </div>
  );
}
