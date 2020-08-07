import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import {Grid} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: 'linear-gradient(#cfd9df,#e2ebf0)',
        color: 'grey',
    },
    bigAvatar: {
        margin: 30,
        width: 100,
        height: 100,
    },
}));

const SideMenu = () => {
    const classes = useStyles();

    return(
        <>
            <Drawer
                open={true}
                variant='permanent'
                anchor='left'
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
            <Grid container justify='center' alignItems='center'>
                <Avatar
                    src='https://images.unsplash.com/photo-1576478907913-7085b6220a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
                    className={classes.bigAvatar}
                />
            </Grid>
            <List>
                {['Profile', 'Sign Out'].map( (text, id) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {id % 2 === 0 ? <AccountCircle /> : <ExitToApp />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            </Drawer>
        </>

    )
};

export default SideMenu;