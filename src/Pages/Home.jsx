import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormPopup from "../components/FormPopup";
import Table from "../components/Table";
const getItem = () => {
  const incomingListData = localStorage.getItem("lists");

  if (incomingListData) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
function Home() {
  const [list, setList] = useState(getItem());
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    age: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [pathName, setPathName] = useState("/");
  function handleChange(e) {
    const value = e.target.value;
    setFormValue({
      ...formValue,
      [e.target.name]: value,
    });
  }

  const handleSubmit = () => {
    if (formValue.name && formValue.surname !== "") {
      setList([
        ...list,
        {
          name: formValue.name,
          surname: formValue.surname,
          age: formValue.age,
        },
      ]);
      setPathName("/");
      togglePopup(!isOpen);
    } else {
      alert("İsim ve Soyisim Alanları Zorunludur.");
    }
    localStorage.setItem("lists", JSON.stringify(list));
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
    getItem();
  }, [list, pathName]);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    setFormValue({ name: "", surname: "", age: "" });
  };

  const clearTable = () => {
    localStorage.clear();
    window.location.reload();
  };
  console.log(formValue.name);
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row justify-content-center">
        <div className="col-8 align-self-center">
          <Link to={`/modal/add-item`}>
            <button
              className="add-button"
              onClick={togglePopup}
              style={{ float: "left" }}
            >
              Tabloya Ekleme Yap
            </button>
          </Link>
          <button
            className="clear-table-button"
            onClick={clearTable}
            style={{ float: "left" }}
          >
            Hepsini Sil
          </button>
          {isOpen && (
            <FormPopup
              handleClose={togglePopup}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formValue={formValue}
              pathName={pathName}
            />
          )}
          <Table list={list} />
        </div>
      </div>
    </div>
  );
}

export default Home;
