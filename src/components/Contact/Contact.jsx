import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.text}>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
