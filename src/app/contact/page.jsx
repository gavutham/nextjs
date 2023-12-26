import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Contact Page",
  description: "Contact page for the next js tutorial",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's be in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            alt="contact-img"
            fill={true}
            src={"/contact.png"}
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            className={styles.textArea}
          ></textarea>
          <Button url="#" text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
