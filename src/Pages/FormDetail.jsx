import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FORM_LOCAL_STORAGE_KEY } from '../constants';

const FormDetail = () => {
  const params = useParams();
  const [form, setForm] = useState({});
  console.log({ params, form });

  useEffect(() => {
    try {
      const forms = JSON.parse(localStorage.getItem(FORM_LOCAL_STORAGE_KEY));
      const form = forms.find((form) => form.id === params.formId);
      setForm(form);
    } catch (error) {
      setForm({});
    }
  }, [params.formId]);

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row justify-content-center">
        <h5>{form.name}</h5>
        {form?.fields?.length ? (
          form?.fields?.map((field) => (
            <>
              <label htmlFor={field.id}>{field.name}</label>
              <input
                id={field.id}
                name={field.name}
                required={field.required}
                type={field.dataType}
              />
            </>
          ))
        ) : (
          <div>No form fields</div>
        )}
      </div>
    </div>
  );
};

export default FormDetail;
