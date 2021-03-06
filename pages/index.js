import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

import MainPage from "./MainPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caner Airbnb Clone</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainPage />
    </div>
  );
}
