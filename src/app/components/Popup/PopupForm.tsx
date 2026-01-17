import styles from "./popup.module.css";

interface TextFields {
  label: string;
  type: string;
  placeholder: string;
}
interface PopupFormProps {
  handlePopup: () => void;
  title: string;
  textFields: TextFields[];
  submitBtn: string;
}

function PopupForm({ handlePopup, title, submitBtn, textFields }: PopupFormProps) {
  
    const submitForm = () => {
    console.log("submit");
    // collect the data from the form
    
    // send the data to the server

    // close the popup
    handlePopup();
  };

  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <button className={styles.closeBtn} onClick={handlePopup}>
          X
        </button>
        <h2>{title}</h2>
        <ul className={styles.form}>
          {textFields.map((form) => (
            <li key={form.label} className={styles.formItem}>
              <label className={styles.label} htmlFor={form.label}>
                {form.label}:{" "}
              </label>
              <input
                className={styles.input}
                type={form.type}
                id={form.label}
                placeholder={form.placeholder}
              />
            </li>
          ))}
        </ul>
        <button
          className={`mainButton ${styles.submitBtn}`}
          onClick={submitForm}
        >
          {submitBtn}
        </button>
      </section>
    </section>
  );
}

export default PopupForm;
