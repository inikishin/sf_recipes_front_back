import React from "react";
import recipeCardStyles from './recipe-card-styles';
import {Link} from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia,
    IconButton,
    Button,
    Badge,
    makeStyles
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => (recipeCardStyles));

export default function RecipeCard(props) {
    const classes = useStyles();

    return (
        <Badge color='secondary' badgeContent={props.category_name}
               anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
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
                        <FavoriteIcon/>{props.likes}
                    </IconButton>
                    <Link to={'/category/' + props.category + '/recipe/' + props.id}>
                        <Button color="primary" variant="contained">Читать далее</Button>
                    </Link>
                </CardActions>
            </Card>
        </Badge>
    )
}