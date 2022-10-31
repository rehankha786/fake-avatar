import React from "react";
import { faker } from "@faker-js/faker";
const Avatardetails = ({ name, time, text }) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="auther">
            {name}
          </a>

          <div className="metadata">
            <span className="date">{time}</span>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Avatardetails;
