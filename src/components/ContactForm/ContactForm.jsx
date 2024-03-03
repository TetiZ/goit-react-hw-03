import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too short!")
    .max(50, "Too long!")
    .required("Required"),

  phone: Yup.string()
    .min(4, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export default function ContactForm({ handleFormSubmit }) {
  const userName = useId();
  const userPhoneNumber = useId();
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      onSubmit={(values, action) => {
        console.log(values);
        handleFormSubmit(values);
        action.resetForm();
      }}
      validationSchema={formValidationSchema}
    >
      <Form>
        <div>
          <label htmlFor={userName}>Name</label>
          <Field name="name" id={userName}></Field>
          <ErrorMessage component="span" name="name"></ErrorMessage>
        </div>

        <div>
          <label htmlFor={userPhoneNumber}>Number</label>
          <Field
            name="phone"
            id={userPhoneNumber}
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          ></Field>
          <ErrorMessage component="span" name="phone"></ErrorMessage>
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
