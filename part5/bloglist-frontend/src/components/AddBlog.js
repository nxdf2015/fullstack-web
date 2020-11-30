import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import serviceBlog from "../services/blogs";
const validationSchema = yup.object().shape({
  title: yup.string().required("title required"),
  author: yup.string().required("author required"),
  url: yup.string().required("url required").url("should be a valid url"),
});

const Add = ({ logged , setUpdate ,notify  }) => {
  const submit = async (values) => {
      console.log(values)
    const blog =await  serviceBlog.addOne(values);
    if (blog){
     notify({type:"success", message : `a new blog ${blog.title} by ${blog.author} added`})
     setUpdate(true)}
     else {
         notify({
             type: "error",
             message:" error creation blog"
         })
     }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      url: "",
    },

    onSubmit: submit,
    validationSchema,
  });
  if (!logged) {
    return null;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        value={formik.values.title}
        placeholder="title"
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="author"
        value={formik.values.author}
        placeholder="author"
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="url"
        value={formik.values.url}
        placeholder="url"
        onChange={formik.handleChange}
      />

      <input type="submit" value="create" />
    </form>
  );
};

export default Add;
