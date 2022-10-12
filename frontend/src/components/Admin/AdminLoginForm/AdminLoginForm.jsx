import React, { useEffect, useState } from "react";
import "./AdminLoginForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom'
import { adminLoginSchema } from "../../../Schemas/adminLoginSchema";
import { useFormik } from "formik";


const initialValues = {
  username:'',
  password:'',
};

const AdminLoginForm = () => {

  const navigate=useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: adminLoginSchema,
      onSubmit: (values, action) => {
        if((values.username==="hariom") && (values.password==="hariom123")){
          navigate('/admin/dashboard')
        }
        else{
          console.log("password not matched")
          action.resetForm();
        }
      
      
      },
    });
  console.log(errors);

  return (
    
    <div className="adminLoginFormContainer">
    
      <h1 className="text-center mb-5">Admin Login</h1>
      <Form className="adminLoginForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name Here"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="form-error">{errors.username}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password  Here"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </Form.Group>

        <Button variant="outline-primary" type="submit" className="mt-4">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default AdminLoginForm;
