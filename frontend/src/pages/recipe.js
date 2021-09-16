import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import CategoryCard from "../components/category-card/category-card";
import {
    Grid,
    Container,
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Breadcrumbs,
    Typography,
     Link
} from "@material-ui/core";
import recipeStyles from "./recipe-styles";
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => (recipeStyles));

export default function RecipePage() {
    const classes = useStyles();
    const {id, catId} = useParams();

    const {categories, recipes} = useSelector((store) => ({...store.recipes}))

    const cat = categories.find(item => (item.id === Number(catId)));
    const recipe = recipes.find(item => (item.id === Number(id)))

    return (
        <div className={classes.container}>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbsWrapper}>
                    <Link href="/">
                        Сборник рецептов
                    </Link>
                    <Link color="inherit" href={"/category/" + cat.code}>
                        {cat.fullname}
                    </Link>
                    <Typography color="textPrimary">{recipe.fullname}</Typography>
                </Breadcrumbs>
                <Grid container spacing={10} justifyContent="center">
                    <Grid item xs={10}>
                        <Recipe {...recipe} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

function Recipe(props) {

    return (
        <Card>
            <CardHeader title={props.fullname}/>
            <CardContent>{props.content}</CardContent>
        </Card>
    )
}