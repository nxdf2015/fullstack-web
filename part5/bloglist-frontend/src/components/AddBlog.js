import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";

 
const validationSchema = yup.object().shape({
  title: yup.string().required("title required"),
  author: yup.string().required("author required"),
  url: yup.string().required("url required").url("should be a valid url"),
});

const Add = ({ logged, setUpdate, notify, setVisible, submit : submitProps  }) => {

  const submit = (values) => {
     submitProps(values)
     setVisible(false);
  } 
   
  
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      url: "",
    },
  
    onSubmit: submit,
    validationSchema,
  });

  const handleCancel = () => {
    formik.handleReset();
    setVisible(false);
  };

 

  return (
    <form data-id="blog-form" id="create-form" onSubmit={formik.handleSubmit}>
      <input
      data-testid="title-form"
        type="text"
        name="title"
        value={formik.values.title}
        placeholder="title"
        onChange={formik.handleChange}
      />
      { formik.touched.title && formik.errors.title &&  <div className="error">{   formik.errors.title}</div>}
      <input
      data-testid="author-form"
        type="text"
        name="author"
        value={formik.values.author}
        placeholder="author"
        onChange={formik.handleChange}
      />
       { formik.touched.author && formik.errors.author  &&<div className="error">{  formik.errors.author}</div>}
      <input
      data-testid="url-form"
        type="text"
        name="url"
        value={formik.values.url}
        placeholder="url"
        onChange={formik.handleChange}
      />
      { formik.touched.url && formik.errors.url &&<div className="error">{  formik.errors.url}</div>}
       
      <input type="submit" value="create" />
      <button onClick={handleCancel}>cancel</button>
    </form>
  );
};

export default Add;
