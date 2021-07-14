import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
export default function OutlinedButtons() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const [value, setValue] = React.useState('female');
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const [age, setAge] = React.useState('');
    const handleChange = (event, newValue) => {
        setChecked(event.target.checked);
        setValue(event.target.value);
        setAge(event.target.value);
        setValue(newValue);
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <center>
            <div>
                <Head>
                    <title>Components</title>
                </Head>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                News
                            </Typography>
                            <Button color="inherit">Login </Button>
                            <Link href="/"><a>Home </a></Link> |
                            <Link href="/about"><a> About </a></Link> |
                            <Link href="/service"><a> Service </a></Link> |
                            <Link href="/products/P001"><a> Products </a></Link> |
                            <Link href="/components"><a> Components </a></Link>
                        </Toolbar>
                    </AppBar>
                </div>
                <h1><center>Components Page</center></h1>
                <br />
            </div>
            <br />
            <div className={classes.root}>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" color="primary" href="#outlined-buttons">
                    Link
                </Button>
            </div>
            <br />
            <div className={classes.root}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
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
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
            </FormControl>
            <br />
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Without label</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Age
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Label + placeholder</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl} disabled>
                    <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Disabled</FormHelperText>
                </FormControl>
            </div>
            <br />
            <div>
                <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
                <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>
            <br />
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
            <br />
            <br />
            <br />
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
            <br />
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <br />
            <Grid item xs={6}>
                <div className={classes.root}>
                    <Typography id="continuous-slider" gutterBottom>
                        Volume
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown />
                        </Grid>
                        <Grid item xs>
                            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                        </Grid>
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                    </Grid>
                    <Typography id="disabled-slider" gutterBottom>
                        Disabled slider
                    </Typography>
                    <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
                </div>
            </Grid>
        </center>
    );
}
