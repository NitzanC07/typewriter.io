import { useState } from "react";
import styles from "./popupForm.module.css";
import closeIcon from "@/images/icons/closeButton.svg";
import Image from "next/image";

interface PopupFormProps {
  handlePopup: () => void;
  title: string;
  formFields: {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    requierd: boolean;
  }[];
  submitBtn: string;
}

function PopupForm({
  handlePopup,
  title,
  submitBtn,
  formFields,
}: PopupFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // collect the data from the form
    console.log("SUBMITED: Collected data:", formData);

    // send the data to the server

    // close the popup
    handlePopup();
  };

  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <button className={styles.closeBtn} onClick={handlePopup}>
          <Image src={closeIcon} alt="close" width={30} />
        </button>
        <h2>{title}</h2>
        <form onSubmit={submitForm}>
          <ul className={styles.form}>
            {formFields.map((form) => (
              <li key={form.label} className={styles.formItem}>
                <label className={styles.label} htmlFor={form.label}>
                  {form.label}:{" "}
                </label>
                <input
                  className={styles.input}
                  type={form.type}
                  id={form.label}
                  name={form.name}
                  placeholder={form.placeholder}
                  value={formData[form.name] || ""}
                  onChange={handleChange}
                  required={form.requierd}
                />
              </li>
            ))}
          </ul>
          <button className={`mainButton ${styles.submitBtn}`} type="submit">
            {submitBtn}
          </button>
        </form>
        {title === "התחברות" ? (
          <p className={styles.text}>אין לך עדיין חשבון? לחץ על הרשמה.</p>
        ) : (
          <p className={styles.text}>כבר יש לך חשבון? לחץ על התחברות.</p>
        )}
      </section>
    </section>
  );
}

export default PopupForm;
