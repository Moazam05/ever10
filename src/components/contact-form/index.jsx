import React, {Component} from "react"
import {Field, Form, Formik} from "formik"
import * as Yup from "yup"
import "./index.css"
import classNames from "classnames";


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const ContactSchema = Yup.object().shape({
  name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
  email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
  message: Yup.string()
      .min(3, "Too short!")
      .required("Message is required"),
  device: Yup.array().required(
      "Please select an option"
  ),
});

const InputFeedback = ({error, touched}) => touched && error ? <div className="invalid-feedback">{error}</div> : null;

// Checkbox input
const Checkbox = ({
                    field: {name, value, onChange, onBlur},
                    form: {errors, touched, setFieldValue},
                    id,
                    label,
                    className,
                    ...props
                  }) => {
  return (
      <div>
        <input
            name={name}
            id={id}
            type="checkbox"
            value={value}
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
            className={classNames("radio-button")}
        />
        <label htmlFor={id}>{label}</label>
        {<InputFeedback error={errors[name]} touched={touched[name]}/>}
      </div>
  );
};

// Checkbox group
class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray = [target.id];
    } else {
      valueArray = [];
    }
    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    // take care of touched
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const {value, error, touched, label, className, children} = this.props;

    const classes = classNames(
        "checkboxGroup",
        "input-field",
        "form-control",
        {
          "is-success": (!error && touched),
          "is-invalid": !!error && touched
        },
        className
    );

    return (
        <div className={classes}>
          <fieldset>
            <legend>{label}</legend>
            {React.Children.map(children, child => {
              return React.cloneElement(child, {
                field: {
                  value: value.includes(child.props.id),
                  onChange: this.handleChange,
                  onBlur: this.handleBlur
                }
              });
            })}
            {<InputFeedback error={error} touched={touched}/>}
          </fieldset>
        </div>
    );
  }
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feedback: false,
      errorMsg: false,
      isSending: false,
    }
  }


  render() {
    return (
        <React.Fragment>
          <Formik
              initialValues={{
                name: "",
                "bot-field": "",
                "form-name": "contact",
                device: [],
                email: "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, actions) => {
                fetch("/?no-cache=1", {
                  method: "POST",
                  headers: {"Content-Type": "application/x-www-form-urlencoded"},
                  body: encode({"form-name": "contact", ...values})
                }).then(() => {
                  actions.setSubmitting(false)
                  this.setState({feedback: 'Sent!'})
                  actions.resetForm()
                }).catch(error => {
                  console.log(error)
                  this.setState({errorMsg: 'Error submitting form!'})
                });
              }}
          >
            {({
                errors, touched, setFieldValue,
                setFieldTouched,
                values,
              }) => (
                <Form id="contact-form" name="contact" method="POST">
                  <div className="form-group">
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={
                          errors.name && touched.name
                              ? "form-control is-invalid"
                              : "form-control"
                        }
                    />
                    {<InputFeedback error={errors.name} touched={touched.name}/>}
                  </div>

                  <div className="form-group">
                    <Field
                        type="email"
                        name="email"
                        className={
                          errors.email && touched.email
                              ? "form-control is-invalid"
                              : "form-control"
                        }
                        placeholder="Your Email"
                    />
                    {<InputFeedback error={errors.email} touched={touched.email}/>}
                  </div>

                  <div className="form-group">
                    <CheckboxGroup
                        id="device"
                        label="Device"
                        value={values.device}
                        error={errors.device}
                        touched={touched.device}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}>
                      <Field
                          component={Checkbox}
                          name="device"
                          id="iPhone"
                          label="iPhone"/>
                      <Field
                          component={Checkbox}
                          name="device"
                          id="Android"
                          label="Android"/>
                      <Field
                          component={Checkbox}
                          name="device"
                          id="iPad"
                          label="iPad"/>
                    </CheckboxGroup>
                  </div>

                  <div className="form-group">
                    <Field
                        component="textarea"
                        name="message"
                        className={
                          errors.message && touched.message
                              ? "form-control is-invalid"
                              : "form-control"
                        }
                        placeholder="Your Message"
                        rows="4"
                    />
                    {<InputFeedback error={errors.message} touched={touched.message}/>}
                  </div>

                  {this.state.errorMsg && (
                      <div className="feedback-container text-danger">
                        <p>Something went wrong please try again.</p>
                      </div>
                  )}

                  {this.state.feedback && (
                      <div className="feedback-container text-primary">
                        <h5>Thank you!</h5>
                        <p>
                          Message sent.
                        </p>
                      </div>
                  )}

                  <div className="form-group">
                    <button
                        type="submit"
                        disabled={this.state.isSending}
                        className="btn form-btn">
                      {this.state.isSending && (
                          <i className="fa fa-refresh fa-spin"/>
                      )}{" "}
                      {this.state.isSending && <span>Sending....</span>}
                      {!this.state.isSending && <span> Send Message</span>}
                    </button>
                  </div>
                  <Field type="hidden" name="bot-field"/>
                  <Field type="hidden" name="form-name" value="contact"/>
                  <input name="bot-field" type="hidden"/>
                </Form>
            )}
          </Formik>
        </React.Fragment>
    )
  }
}

export default ContactForm
