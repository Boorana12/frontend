import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button, Box, ButtonGroup,Checkbox,makeStyles,Fab} from '@material-ui/core';  
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>รับออกแบบและพัฒนาเว็บไซต์</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
          <div className={classes.root}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab variant="extended">
              <NavigationIcon className={classes.extendedIcon} />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <FavoriteIcon />
            </Fab>
          </div>
          <br />
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </center>
      </main>
    </div>
  )
}