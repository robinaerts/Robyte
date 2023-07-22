import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Mathboard() {
    return (
        <>
            <Head>
                <title>Mathboard</title>
            </Head>
            <Nav/>
            <div>
                <a href="/mathboard/Install_Mathboard.exe">Download Software</a>
            </div>
            <Footer/>
        </>
    )
}