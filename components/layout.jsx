import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Kodeative</title>
                <meta name='description' content='Mastering computer science fundamentals from zero to hero, with the best experts around the world.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
               
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout