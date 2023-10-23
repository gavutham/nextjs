import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Dev (g). All Rights Reserved.</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          src="/1.png"
          alt="Dev (g)"
          width={15}
          height={15}
        />
        <Image
          className={styles.icon}
          src="/2.png"
          alt="Dev (g)"
          width={15}
          height={15}
        />
        <Image
          className={styles.icon}
          src="/3.png"
          alt="Dev (g)"
          width={15}
          height={15}
        />
        <Image
          className={styles.icon}
          src="/4.png"
          alt="Dev (g)"
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
