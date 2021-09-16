import React from "react";
import categoryCardStyles from './category-card-styles';
import {Link} from 'react-router-dom';

import {Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Button, makeStyles} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => (categoryCardStyles));

export default function CategoryCard(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader title={props.fullname} className={classes.cardHeader} color="primary"/>
            <CardMedia
                image={props.img_scr}
                title={props.fullname}
                className={classes.cardMedia}
            />
            <CardContent>{props.description}</CardContent>
            <CardActions className={classes.cardActionsWrapper}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <Link to={'/category/' + props.code}>
                    <Button color="primary" variant="contained">Читать далее</Button>
                </Link>
            </CardActions>
        </Card>
    )
}