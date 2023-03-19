import type { NextPage } from "next";
import Head from "next/head";
import homeStyles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Minhee Kim</title>
      </Head>

      <section className={homeStyles.headingMd}>
        <p>[Minhee Introduction]</p>
        <p>(This is a website)</p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>{/* 블로그 글을 넣어준다 */}</ul>
      </section>
    </div>
  );
};

export default Home;
