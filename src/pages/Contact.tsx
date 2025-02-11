import Content from "@/components/UI/Content";
import Button from "@/components/UI/Button";

import "./Contact.css";
import ContactForm from "@/components/Forms/ContactForm";

const cartelImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739192173/contact-cartel_icjmv2.png";

const titleImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739192173/contact-title_rb3qva.png";

const Contact = () => {
  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <Content
      top={
        <div className="contact-title">
          <img src={titleImgSrc} alt="" />
        </div>
      }
      left={
        <div className="contact-left">
          <div className="contact-img">
            <img src={cartelImgSrc} alt="" />
          </div>
        </div>
      }
      right={
        <div className="contact-right">
          <div className="contact-info">
            <p>
              We're here to help, to answer any questions you may have and to
              hear how much you love us, or, if its a little early for that, how
              much you like us! We'll try to respond in a manner that matches
              your vibe!*
            </p>
            <p>* We are pretty passionate though so please bear with us ;-)</p>

            <div className="contact-info-form">
              <ContactForm />
            </div>

            <div className="contact-info-button">
              <Button
                label="JOIN THE WAITING LIST"
                classTitle="button-t1"
                onClick={handleJoin}
              />
            </div>
          </div>
        </div>
      }
      isHome={false}
    />
  );
};

export default Contact;
