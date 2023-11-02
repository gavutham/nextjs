import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="blog/blogId" className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            alt=""
            src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>Blog Desc</p>
        </div>
      </Link>
      <Link href="blog/blogId" className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            alt=""
            src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>Blog Desc</p>
        </div>
      </Link>
      <Link href="blog/blogId" className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            alt=""
            src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Blog Title</h1>
          <p className={styles.desc}>Blog Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
