import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
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
        <Link
          key={item._id}
          href={`blog/${item._id}`}
          className={styles.wrapper}
        >
          <div className={styles.imgContainer}>
            <Image
              alt=""
              src={item.img}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
