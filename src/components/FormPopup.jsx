import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Popup.css";
const FormPopup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <Link to={`${props.pathName}`}>
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
        </Link>
        <>
          <b>Tabloya Öğe Ekle</b>
          <p>Eklemek yapacağınız alanları eksik ve hatasız doldurunuz.</p>
          <form>
            <input
              type="text"
              name="name"
              value={props.formValue.name}
              onChange={props.handleChange}
              placeholder="İsiminizi Giriniz"
              required
            />
            <br />
            <br />
            <input
              type="text"
              name="surname"
              value={props.formValue.surname}
              placeholder="Soyisiminizi Giriniz"
              onChange={props.handleChange}
              required
            />
            <br />
            <br />
            <input
              type="date"
              name="age"
              value={props.formValue.age}
              onChange={props.handleChange}
            />
          </form>
          <br />
          <Link to={`${props.pathName}`}>
            <button className="save" onClick={() => props.handleSubmit()}>
              Kaydet
            </button>
          </Link>
        </>
      </div>
    </div>
  );
};

export default FormPopup;
