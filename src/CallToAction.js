import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

const CallToAction = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section id="cta" className="cta">
      <h2>Ready to Get Started?</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <button type="submit" className="cta-button">Sign Up Now</button>
      </form>
    </section>
  );
};

export default CallToAction;
