import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Spinner } from 'reactstrap';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Google } from '../assets/google.svg';
import { Link } from 'react-router-dom';
import { Forms, RegisterSection } from '../components/Authentication/AuthStyles';
import Header from '../components/LandingPageComponents/Header';

const Register = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('An email address is required')
            .email('Enter a valid email address'),
        password: Yup.string().required('Enter a password'),
        category: Yup.string()
    });

    const initialValues = { email: '', password: '', category: '' };

    return (
        <>
            <Header />
            <RegisterSection>
                <div className="title">
                    <h3>You’re 2 minutes away</h3>
                    <h6>from building your ecommerce empire</h6>
                </div>

                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    // onSubmit={onSubmit}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true);
                        setTimeout(console.log(values.email, values.password), 5000);
                        setSubmitting(false);
                    }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue,
                        setFieldTouched
                    }) => (
                        <Forms onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email/Phone No.</label>
                                <div>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email/Phone No"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />

                                    <span className="error-message">
                                        {touched.email && errors.email}
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                    />
                                    <span className="error-message">
                                        {touched.password && errors.password}
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>What products do you want to sell? (Optional)</label>
                                <div>
                                    <select defaultValue={values.category} onChange={handleChange}>
                                        <option value="" selected hidden>
                                            Choose Category
                                        </option>
                                        <option value="fazsion">Fazsion</option>
                                    </select>
                                    <span className="error-message">
                                        {touched.category && errors.category}
                                    </span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="credo-btn sign-in-button"
                                disabled={isSubmitting}>
                                {!isSubmitting ? (
                                    'Get Started'
                                ) : (
                                    <Spinner color="light" size="sm" />
                                )}
                            </button>

                            <div className="socials-auth">
                                <button>
                                    <Facebook />
                                </button>
                                <button>
                                    <Google />
                                </button>
                            </div>
                        </Forms>
                    )}
                </Formik>
                <p className="login-note">
                    Already have an account ? <Link to="/login"> Log In</Link>
                </p>
            </RegisterSection>
        </>
    );
};

export default Register;
