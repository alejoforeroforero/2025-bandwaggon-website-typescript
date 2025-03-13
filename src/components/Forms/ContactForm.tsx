import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import "./ContactForm.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = useCallback(async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      setSubmitStatus({
        type: 'success',
        message: 'Mensaje enviado exitosamente'
      });
      reset();
    } catch (error: unknown) {
      console.error('Failed to send message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor, intente nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      {submitStatus.type && (
        <div className={`status-message ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}

      <label>
        Name
        <input
          {...register("name", { required: true })}
          className="input-field"
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
        {errors.message && (
          <span className="error-message">Message is required</span>
        )}
      </label>

      <div className="form-container-btn">
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'SENDING...' : 'SUBMIT>'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
