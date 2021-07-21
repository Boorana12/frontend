import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button, Box, ButtonGroup, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  const [value, setValue] = React.useState('female');
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setValue(event.target.value);
  };

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
          <Link href="/products/P001"><a> Products</a></Link> |
          <Link href="/components"><a> Components</a></Link>
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
          <br />
          <div>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
            <Checkbox
              defaultChecked
              indeterminate
              inputProps={{ 'aria-label': 'indeterminate checkbox' }}
            />
            <Checkbox
              defaultChecked
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <Checkbox
              defaultChecked
              size="small"
              inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
          </div>
          <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
          </FormControl>
        </center>
      </main>
    </div>
  )
}