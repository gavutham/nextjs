import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/5686112/pexels-photo-5686112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill={true}
          alt="img"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experts
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Cupidatat sit eu labore irure consectetur. Sint irure occaecat
            cupidatat velit id nostrud cupidatat labore eiusmod incididunt non
            id laboris. Minim deserunt sint cillum ullamco do ea nostrud.
            Incididunt dolor excepteur incididunt est et exercitation ea ea
            culpa labore duis. Lorem in culpa nostrud aliqua. Qui voluptate
            magna adipisicing ex occaecat amet laboris nisi dolore ullamco
            mollit. Dolor laborum veniam laboris aliqua mollit nulla esse magna.
            <br />
            <br />
            Aliquip quis nisi ex culpa tempor laboris irure velit dolor amet
            tempor id ex cillum. Id voluptate est est labore non ad ex dolor
            ipsum excepteur ut ad. Culpa sint officia qui officia nulla
            adipisicing esse sunt in ipsum laborum. Irure irure aute dolore
            laborum duis Lorem elit. Aliqua eiusmod aliqua fugiat nisi do culpa
            amet commodo officia commodo commodo in excepteur exercitation.
            Lorem officia non cupidatat culpa elit cillum pariatur sunt dolore
            aliqua ex sint.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Qui id voluptate laborum enim tempor cillum eiusmod dolor occaecat
            commodo nostrud nisi cupidatat. Dolor non incididunt laborum aute
            ullamco excepteur. Cillum tempor duis fugiat ex magna cillum eu duis
            aliqua dolore minim ipsum ex. Aliquip do reprehenderit labore qui
            anim reprehenderit in do ex dolore do nostrud tempor. Velit
            voluptate reprehenderit voluptate amet elit ea irure magna ut.
            Excepteur excepteur ex et duis adipisicing Lorem ut tempor officia
            quis consectetur.
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />- Fase and Handy
          </p>
          <Button url={"/contact"} text={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};

export default About;
