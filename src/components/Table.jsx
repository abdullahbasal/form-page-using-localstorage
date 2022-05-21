import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Table({ list = [] }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const getFilteredItems = () => {
    if (searchValue) {
      return list.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return list;
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-bar"
        style={{ float: 'right' }}
      />
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">CREATED AT</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getFilteredItems().map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{`${new Date(
                  item.createdAt
                ).toLocaleDateString()} ${new Date(
                  item.createdAt
                ).toLocaleTimeString()}`}</td>
                <td>
                  <button onClick={() => navigate(`/forms/${item.id}`)}>
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
