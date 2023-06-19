import React from "react";
import "./Notification.css";
import check from "../../assets/check-icon.png";

export default function Notification({
  current,
  allcount,
  name,
  disp,
}) {
  const styles = {
    display: disp,
  };

  return (
    <div className="modal-overlay" style={styles}>
      <div className="modal">
        <img className="check" src={check} alt="" />
        <p>Вы успешно добавили картину в корзину</p>
        <div>
          <p>
            <strong>{name} в корзине:</strong> {current}
          </p>
          <p>
            <strong>Общее количество картин в корзине:</strong> {allcount}
          </p>
        </div>
      </div>
    </div>
  );
}