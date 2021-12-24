import React from "react";

const colors = [
  "#05B875",
  "#1968FF",
  "#1AA1F1",
  "#E94C87",
  "#0177B6",
  "#F57F00",
  "#BD091D",
  "#3C5999",
];

export default function Cards({ item, index }) {
  return (
    <div key={index} className="userContainer">
      <div
        className="userFirst"
        style={{ backgroundColor: colors[index % colors.length] }}
      ></div>
      <div className="userSecond">
        <p className="userName">{`${item.first_name} ${item.last_name}`}</p>
        <p className="userEmail">{item.email}</p>
        <p className="userDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus non
          quia rem ab vitae repellat.
        </p>
        <div className="iconContainer">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-behance-square"></i>
          <i class="fab fa-google-plus-square"></i>
        </div>
      </div>
      <img src={item.avatar} alt="" className="userImage" />
    </div>
  );
}
