// import css from "./App.module.css";
// import clsx from "clsx";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const handleFormSubmit = () => {};
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
}
