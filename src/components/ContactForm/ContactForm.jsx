import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too short!")
    .max(50, "Too long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, {
      message: "Invalid phone number format, use XXX-XX-XX",
      excludeEmptyString: true,
    })
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const userName = useId();
  const userPhoneNumber = useId();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, action) => {
        console.log(values);
        onAdd({
          id: nanoid(),
          name: values.name,
          number: values.number,
        });
        action.resetForm();
      }}
      validationSchema={formValidationSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={userName}>Name</label>
          <Field className={css.input} name="name" id={userName}></Field>
          <ErrorMessage component="span" name="name"></ErrorMessage>
        </div>

        <div>
          <label htmlFor={userPhoneNumber}>Number</label>
          <Field
            className={css.input}
            name="number"
            id={userPhoneNumber}
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          ></Field>
          <ErrorMessage component="span" name="number"></ErrorMessage>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
