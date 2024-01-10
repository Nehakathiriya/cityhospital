import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

function Login(props) {
  const loginSchema = yup.object({
    name:yup
    .string()
    .required("Please Enter Your Name")
    .matches(/^[a-zA-Z ]{2,30}$/, "Please enter a valid name"),
    email:yup      
    .string()
    .required("Please Enter Email")
    .email("Please enter a valid email"),
    password:yup.string()
    .required("Please Enter Your Password"),
    confirmpassword:yup
    .string()
    .when('password', (password, field) =>
    password ? field
    .required()
    .oneOf([yup.ref('password')]) : field
  ),

  });

  const formikObj = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  let { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formikObj;
  console.log(values, errors);

  const [type, setType] = useState("Login");

  const handleNew = () => {
    setType("new");
  };

  const handlelogin = () => {
    setType("Login");
  };

  const handleforgot = () => {
    setType("forget");
  };

  return (
    <section id="login" className="login">
      <div className="container">
        <div className="section-title">
          {type === "forget" ? (
            <h2>Forgot Password</h2>
          ) : type === "Login" ? (
            <h2>Login</h2>
          ) : (
            <h2>Sign up</h2>
          )}
          <form onSubmit={handleSubmit}>
            {type === "Login" || type === "forget" ? null : (
              <div className="form-group">
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  data-rule="name"
                  data-msg="Please enter a valid name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <span>{errors.name && touched.name ? errors.name : null}</span>
                <div className="validate" />
              </div>
              
            )}

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                data-rule="minlen:4"
                data-msg="Please enter a valid email"
                onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
              />
              <span>{errors.email && touched.email ? errors.email : null}</span>
              <div className="validate" />
            </div>

            {type === "forget" ? null : (
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder=" Enter Your Password"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span>{errors.password && touched.password ? errors.password : null}</span>
                <div className="validate" />
              </div>
            )}

            {type === "new" ? (
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="confirmpassword"
                  id="con_password"
                  placeholder=" Confirm Password"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                />
                <span>{errors.confirmpassword && touched.confirmpassword ? errors.confirmpassword : null}</span>
                <div className="validate" />
              </div>
            ) : null}

            {type === "forget" ? (
              <>
                <button>Find account</button>
                <br></br>
                <Link onClick={handlelogin}>Login</Link>
              </>
            ) : type === "Login" ? (
              <>
                <button>Log in</button>
                <p>
                  <Link onClick={handleforgot}>Forgot Password?</Link>
                </p>
                <p>
                  <Link onClick={handleNew}>Create new account?</Link>
                </p>
              </>
            ) : (
              <>
                <button>Sign up</button>
                <p>
                  Alredy have an account?
                  <Link onClick={handlelogin}>Login</Link>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
