import { useRef } from "react";
import styles from "../../styles/styles.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";
import CheckBox from "../Input Fields/CheckBox";
import { useFormData } from "../../context";
import * as yup from "yup";

const schema = yup.object().shape({
  category: yup
    .string()
    .min(2, "Address is too short")
    .required("Category is required"),
});

export default function Category({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    console.log(data)
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
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Choose the category that fits you.</h2>

      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="Builder / Founder" type="submit" />
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="Brand Builder" type="submit" />
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="Content Creator" type="submit" />
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="Alpha Caller" type="submit" />
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="Artist" type="submit"/>
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="Working in Web3" type="submit" />
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="Meme Creator" type="submit" />
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="VIP" type="submit" style={{width:'150px', height:'100px', margin:'10px'}}/>
      </Form>
      <Form ref={formRef} style={{float:'left'}} onSubmit={handleSubmit}>
      <Input className={styles.cat} name="category" value="24/7 Contributor" type="submit" style={{width:'150px', height:'100px', margin:'10px'}}/>
      </Form>
      <Form ref={formRef} onSubmit={handleSubmit}>
      <Input className={styles.cat} style={{float:'none'}} name="category" value="Other" type="submit"/>
      </Form>
    </div>
  );
}
