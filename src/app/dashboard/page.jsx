"use client";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
  const fetcher = (...args) =>
    fetch(...args).then(async (res) => await res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
