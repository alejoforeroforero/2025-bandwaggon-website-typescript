import { useForm } from "react-hook-form";
import { useCallback } from "react";
import "./ContactForm.css"; // Import CSS file

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = useCallback((data: FormData) => {
    console.log(data);
    // Este callback se mantendría estable entre re-renders
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <label>
        Name
        <input
          {...register("name", { required: true })}
          className="input-field"
        />
        {errors.name && <span className="error-message">Name is required</span>}
      </label>

      <label>
        Email
        <input
          {...register("email", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
          })}
          className="input-field"
        />
        {errors.email && (
          <span className="error-message">Valid email is required</span>
        )}
      </label>

      <label>
        Message
        <textarea
          {...register("message", { required: true })}
          className="textarea-field"
        />
        {errors.message && (
          <span className="error-message">Message is required</span>
        )}
      </label>

      <div className="form-container-btn">
        <button type="submit" className="submit-button">
          SUBMIT&gt;
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
