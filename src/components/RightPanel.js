import React, { Component } from 'react';
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';




const styles = theme => ({
    card: {
        maxWidth: 400,
        backgroundColor: green[100],
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
});
class RightPanel extends Component {

    render() {
        const {classes} = this.props;
        return (

            <div className = "col-md-3">
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />

                    <CardContent>
                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon/>
                        </IconButton>

                    </CardActions>
                </Card>
            </div>
        );
    }
}

RightPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightPanel);
