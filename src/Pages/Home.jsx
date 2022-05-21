import React, { useEffect, useState } from 'react';
import FormPopup from '../components/FormPopup';
import Table from '../components/Table';
import { FORM_LOCAL_STORAGE_KEY } from '../constants';
import { v4 as uuid } from 'uuid';

const getItem = () => {
  try {
    const incomingListData = localStorage.getItem(FORM_LOCAL_STORAGE_KEY);

    if (incomingListData) {
      return JSON.parse(incomingListData);
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

const Home = () => {
  const [list, setList] = useState(getItem());
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const clearTable = () => {
    localStorage.removeItem(FORM_LOCAL_STORAGE_KEY);
    setList([]);
  };

  const handleSaveForm = (form) => {
    setList([
      ...list,
      { ...form, id: uuid(), createdAt: new Date().getTime() },
    ]);
    localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(form));
    togglePopup();
  };

  useEffect(() => {
    localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(list));
    getItem();
  }, [list]);

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row justify-content-center">
        <div className="col-8 align-self-center">
          <button
            className="add-button"
            onClick={togglePopup}
            style={{ float: 'left' }}>
            Add New Form
          </button>
          <button
            className="clear-table-button"
            onClick={clearTable}
            style={{ float: 'left' }}>
            Clear All
          </button>
          {isOpen && (
            <FormPopup onClose={togglePopup} onSave={handleSaveForm} />
          )}
          <Table list={list} />
        </div>
      </div>
    </div>
  );
};

export default Home;
