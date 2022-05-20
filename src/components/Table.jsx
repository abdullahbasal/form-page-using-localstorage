import React, { useState } from "react";
import "../App.css";
function Table(prop) {
  const [searchedName, setSearchedName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Arama Yapınız..."
        onChange={(e) => setSearchedName(e.target.value)}
        className="search-bar"
        style={{ float: "right" }}
      />
      <div className="col-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">İsim</th>
              <th scope="col">Soyisim</th>
              <th scope="col">Yaş</th>
            </tr>
          </thead>
          <tbody>
            {prop.list
              .filter((item) => {
                if (searchedName === "") {
                  return item;
                } else if (item.name.toLowerCase().includes(searchedName)) {
                  return item;
                }
              })
              .map((item) => (
                <>
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.age}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
