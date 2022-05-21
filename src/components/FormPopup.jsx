import '../Styles/Popup.css';
import React, { useState } from 'react';

const FORM_KEYS = {
  NAME: 'name',
  DESCRIPTION: 'description',
  CREATED_AT: 'createdAt',
  FIELDS: 'fields',
};

const INITIAL_FORM = {
  [FORM_KEYS.NAME]: '',
  [FORM_KEYS.DESCRIPTION]: '',
  [FORM_KEYS.CREATED_AT]: '',
  [FORM_KEYS.FIELDS]: [],
};

const FIELD_KEYS = {
  NAME: 'name',
  REQUIRED: 'required',
  DATA_TYPE: 'dataType',
};

const INITIAL_FIELDS = {
  [FIELD_KEYS.NAME]: '',
  [FIELD_KEYS.REQUIRED]: false,
  [FIELD_KEYS.DATA_TYPE]: 'string',
};

const FormPopup = ({ onClose, onSave }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [field, setField] = useState(INITIAL_FIELDS);

  const handleChangeForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleAddFormField = (e) => {
    e.preventDefault();
    setForm({ ...form, fields: [...form.fields, { ...field }] });
  };

  const handleChangeFormField = (key, value) => {
    setField({ ...field, [key]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={onClose}>
          x
        </span>
        <>
          <b>Add Form</b>
          <form onSubmit={handleSave}>
            <input
              required
              type="text"
              name="name"
              value={form[FORM_KEYS.NAME]}
              onChange={(e) => handleChangeForm(FORM_KEYS.NAME, e.target.value)}
              placeholder="Form Name"
            />
            <br />
            <br />
            <textarea
              type="text"
              name="description"
              value={form[FORM_KEYS.DESCRIPTION]}
              placeholder="Form Description"
              onChange={(e) =>
                handleChangeForm(FORM_KEYS.DESCRIPTION, e.target.value)
              }
            />
            <br />
            <br />

            <div className="form-fields">
              <input
                required
                value={field.name}
                type="text"
                name="fieldName"
                placeholder="Field Name"
                onChange={(e) =>
                  handleChangeFormField(FIELD_KEYS.NAME, e.target.value)
                }
              />
              <br />
              <br />
              <label htmlFor="required">Required</label>
              <input
                id="required"
                checked={field.required}
                type="checkbox"
                name="required"
                placeholder="Required"
                onChange={(e) =>
                  handleChangeFormField(FIELD_KEYS.REQUIRED, e.target.checked)
                }
              />
              <br />
              <br />
              <label htmlFor="dataType">Data Type</label>
              <select
                name="dataType"
                id="dataType"
                onChange={(e) =>
                  handleChangeFormField(FIELD_KEYS.DATA_TYPE, e.target.value)
                }>
                <option defaultValue="string">String</option>
                <option value="number">Number</option>
              </select>
              <button onClick={handleAddFormField}>Add</button>
            </div>
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Required</th>
                    <th scope="col">Data Type</th>
                  </tr>
                </thead>
                <tbody>
                  {form.fields.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.required ? 'required' : 'not required'}</td>
                      <td>{item.dataType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
            <br />
            <input type="submit" value="Save" />
          </form>
        </>
      </div>
    </div>
  );
};

export default FormPopup;
