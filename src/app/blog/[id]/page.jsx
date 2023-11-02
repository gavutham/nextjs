import Image from "next/image";
import styles from "./page.module.css";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Esse culpa nulla id officia magna dolore ullamco ullamco
          </h1>
          <p className={styles.desc}>
            Labore exercitation elit sunt qui exercitation ex voluptate. Ullamco
            deserunt ea irure ad. Dolor est eiusmod adipisicing qui
            reprehenderit reprehenderit nulla commodo aute et do.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Bin Laden</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.tex}>
          Sunt dolore dolore anim sint sunt nulla duis officia sit duis do
          adipisicing in. Laboris sint excepteur laborum consequat nulla labore
          aliqua. Velit laboris cupidatat magna excepteur consequat ut Lorem
          occaecat occaecat laborum irure non. Officia consectetur aliqua duis
          elit eu mollit nostrud id. Ipsum nulla cupidatat consectetur quis
          eiusmod sint proident adipisicing voluptate aute culpa. Duis nostrud
          nisi aliquip nulla consectetur tempor fugiat cillum sit officia. Amet
          voluptate irure amet veniam nulla in nostrud. <br />
          <br /> Sit commodo amet Lorem eu dolore laboris do eiusmod eu ad
          consequat commodo. Sit dolor nostrud enim nisi laborum reprehenderit
          id ullamco id cupidatat voluptate. Eiusmod adipisicing dolore est
          reprehenderit anim anim magna tempor adipisicing enim ut cillum
          pariatur minim. Aute ex consequat consectetur anim incididunt.
          Reprehenderit elit nisi Lorem nulla tempor quis occaecat sunt est nisi
          ullamco qui dolore. Sint mollit sint ex laboris do nisi adipisicing
          sunt sint eu. Adipisicing cupidatat nostrud anim laboris. <br />
          <br /> Enim id aliquip amet duis do est do amet. Minim aliquip ea
          aliquip dolore veniam et. Laboris esse do consectetur enim et ea Lorem
          ad aute nostrud enim tempor Lorem. Cupidatat consectetur sint ullamco
          est amet veniam. Enim magna velit excepteur minim culpa est nisi
          cupidatat excepteur laborum. Non cupidatat mollit sint quis Lorem anim
          commodo voluptate duis aute do fugiat culpa. <br />
          <br /> Consequat qui dolore qui ea non magna sit excepteur nisi.
          Nostrud laboris adipisicing irure non nostrud officia incididunt
          aliqua consequat. Incididunt duis duis id tempor excepteur dolor.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
