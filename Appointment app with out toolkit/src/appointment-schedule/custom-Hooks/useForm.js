import { useState, useEffect } from 'react';


const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);


  const handleChange = (event, name) => {
    console.log(event, event.target.value, event.target.attributes[3].value);
    let errors = {};
    if (event.target.attributes[3].value === "email") {
        if(!event.target.value) {
             console.log("email ",errors.email);
             errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            console.log("email ",errors.email);
            errors.email = 'Email address is invalid';
        } 
    } else if(event.target.attributes[2].value === "password"){
        if (!event.target.value) {
            console.log("password ",errors.password);
             errors.password = 'Password is required';
          } else if (event.target.value.length < 8) {
            console.log("password ",errors.password);
             errors.password = 'Password must be 8 or more characters';
          }
    }
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors({ ...errors, [errors.email]: errors.email });
    setErrors({ ...errors, [errors.password]: errors.password });
  };

  return {
    handleChange,
    values,
    errors,
  }
};
export default useForm;