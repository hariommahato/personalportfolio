import React from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {contactSchema} from '../../Schemas/index'
import { useFormik } from "formik";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { addContact } from "../../service/api";

const initialValues={
    name:'',
    email:'',
    message:''
}
const Contact = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
     addContact(values)
        console.log(
        
          values
        );
        action.resetForm();
      },
    });
  console.log(
    errors
  );

  return (
    <div className="contactContainer">
        <h1 className="text-center mb-5">Hi There 👋 ,Get In Touch ..</h1>
      <Form className="contactForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name Here"  name="name" 
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Your Email  Here" name="email"
           value={values.email}
           onChange={handleChange}
           onBlur={handleBlur}
           />
          {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
        </Form.Group>
        <FloatingLabel >
          <Form.Control
            as="textarea"
            placeholder="Message Here"
            style={{ height: "100px" }}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
           
          />
          {errors.message && touched.message ? (
                      <p className="form-error">{errors.message}</p>
                    ) : null}
        </FloatingLabel>

        <Button variant="outline-primary" type="submit" className="mt-4">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
