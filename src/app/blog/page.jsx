import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error fetching data");
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link key={item.id} href={`blog/${item.id}`} className={styles.wrapper}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
