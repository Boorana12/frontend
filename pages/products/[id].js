import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Products = () => {
    const router = useRouter()
    const pathData = router.query
    return (
        <div>
            <h1>
                <center>Product ID: {pathData.id}</center>
            </h1>
            <main>
                <br />
                <center>
                    <Link href="/"><a>Home</a></Link> |
                    <Link href="/about"><a> About</a></Link> |
                    <Link href="/service"><a> Service</a></Link> |
                    <Link href="/products/P001"><a> Products</a></Link> |
                    <Link href="/components"><a> Components</a></Link>
                </center>
            </main>
        </div>
    )
}
export default Products