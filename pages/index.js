import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button, Box, ButtonGroup, Checkbox } from '@material-ui/core';

export default function Home() {
  return (
    <div>
      <Head>
        <title>รับออกแบบและพัฒนาเว็บไซต์</title>
      </Head>
      <main>
        <h1><center>Index Page</center></h1>
        <br />
        <center>
          <Link href="/"><a>Home</a></Link> |
          <Link href="/about"><a> About</a></Link> |
          <Link href="/service"><a> Service</a></Link> |
          <Link href="/products/P001"><a> Products</a></Link>
          <br />
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <br />
          <Box component="span" m={1}>
            <Button variant="contained" color="secondary">Button Box1</Button>
          </Box>
          <br />
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <br />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <br />
          
        </center>
      </main>
    </div>
  )
}