/*
 * @Descripttion:
 * @Author: lizhengxing
 * @Date: 2022-11-05 13:21:45
 * @LastEditTime: 2022-11-05 19:53:20
 */
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
// import ManualHeader from "../components/ManualHeader"
import LotteryEntrance from "../components/LotteryEntrance"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {/* <ManualHeader /> */}
            <LotteryEntrance />
        </div>
    )
}
