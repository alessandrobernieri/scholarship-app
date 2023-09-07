import { useRef } from "react";
import styles from "../../styles/styles.module.scss";
import { Form } from "@unform/web";
import CheckBox from "../Input Fields/CheckBox";
import { useFormData } from "../../context";
import * as yup from "yup";
import Input from "../Input Fields/Input";
import Text from "../Input Fields/Text";


const schema = yup.object().shape({
  question: yup
  .string()
  .min(2, "Answer is too short")
  .required("Answer is required"),
});

export default function Question({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner);
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>Why should you be Whitelisted?</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
          <Text className={styles.text} style={{height:'150px'}} type="question" name="question" />
        </div>

        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
