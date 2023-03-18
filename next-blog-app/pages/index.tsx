import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minhee Kim</title>
      </Head>

      <section>
        <p>[Minhee Introduction]</p>
        <p>(This is a website)</p>
      </section>

      <section>
        <h2>Blog</h2>
        <ul>{/* 블로그 글을 넣어준다 */}</ul>
      </section>
    </div>
  );
};

export default Home;
