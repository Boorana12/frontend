import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
        <div>
            <Head>
                <title>เกี่ยวกับเรา</title>
            </Head>
            <main>
                <h1><center>About Page</center></h1>
                <br />
                <center>
                    <Link href="/"><a>Home</a></Link> |
                    <Link href="/about"><a> About</a></Link> |
                    <Link href="/service"><a> Service</a></Link> |
                    <Link href="/products/P001"><a> Products</a></Link>
                </center>
            </main>
        </div>
    )
}