import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

function Appoinment(props) {

  let d = new Date();

  let nd = new Date();
  nd.setDate(d.getDate() - 1);

  const contactSchema = yup.object({
    name: yup
      .string()
      .required("Please Enter Your Name")
      .matches(/^[a-zA-Z ]{2,30}$/, "Please enter a valid name"),
    email: yup
      .string()
      .required("Please Enter Email")
      .email("Please enter a valid email"),
    phone: yup
      .string()
      .required("Please enter your phone number")
      .matches(/^\d{10}$/, "Phone must be exactly 10 digits"),

    date: yup
      .date()
      .min(nd, "Please enter a current or future date")
      .required("Please enter a date"),
    department: yup.string().required("Please select a department"),
    message: yup
      .string()
      .required("Please enter a message")
      .test("message", "Message in between 5 to 10 words.", function(val) {
        let arr = val.split(" ");

        if (arr.length >= 5 && arr.length <= 10) {
          return true
        } else {
          return false
        }
      }),
    attachment: yup.mixed().required("Please attach a file"),
  });

  const formikObj = useFormik({
    initialValues: {
      name: "",
      phone: '',
      email: "",
      date: "",
      department: "",
      message: "",
      attachment: null,
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  let { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formikObj;
  console.log(values, errors);
  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>
            Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
            aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
            sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia
            finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat
            mi et suscipit pulvinar.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          method="post"
          role="form"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />

              <span>{errors.name && touched.name ? errors.name : null}</span>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <span>{errors.email && touched.email ? errors.email : null}</span>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />

              <span>{errors.phone && touched.phone ? errors.phone : null}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="date"
                name="date"
                className="form-control datepicker"
                id="date"
                placeholder="Appointment Date"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />

              <span>{errors.date && touched.date ? errors.date : null}</span>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.department}
              >
                <option value>Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>

              <span>
                {errors.department && touched.department
                  ? errors.department
                  : null}
              </span>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message (Optional)"
              defaultValue={""}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />

            <span>
              {errors.message && touched.message ? errors.message : null}
            </span>
          </div>

          <div className="col-md-4 form-group mt-3">
            <input
              className="form-control"
              type="file"
              name="attachment"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span>
              {errors.attachment && touched.attachment
                ? errors.attachment
                : null}
            </span>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your appointment request has been sent successfully. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Make an Appointment</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Appoinment;
