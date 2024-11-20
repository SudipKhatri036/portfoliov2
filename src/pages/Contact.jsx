import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

function Contact() {
  const [state, handleSubmit] = useForm("mkgnzzpa");
  const formRef = useRef();

  const showSucessMessage = () => toast.success("Form Submitted Successfully");

  if (state.succeeded) {
    showSucessMessage();
    formRef.current.reset();
  }

  return (
    <section className="container contact-form-wrapper">
      <div className="contact-form-content1">
        <h1>
          Let's Chat. <br /> Tell me about your <br />
          Project.
        </h1>
        <p>Let's create something together ✌️</p>

        <div className="email-card-wrapper">
          <div className="email-card__icon">
            <FaRegEnvelope />
          </div>

          <a href="mailto:sudipkhatri036@gmail.com">
            Mail me at <span>sudipkhatri036@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>

        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            type="text"
            name="full-name"
            placeholder="Full Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="off"
          />
          <input type="text" name="phone-num" placeholder="Phone Number" />
          <textarea name="message" placeholder="Message" rows={8}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
