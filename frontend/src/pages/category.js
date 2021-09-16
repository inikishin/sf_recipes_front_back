import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import CategoryCard from "../components/category-card/category-card";
import {getCategories, getRecipes} from "../services/actions/recipes";
import {Grid, Container, makeStyles, Typography, Breadcrumbs, Link} from "@material-ui/core";
import categoryStyles from "./category-styles";
import RecipeCard from "../components/recipe-card/recipe-card";
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => (categoryStyles));

export default function CategoryPage() {
    const classes = useStyles();

    console.log(1);
    const {code} = useParams();
    const {categories, recipes} = useSelector((store) => ({...store.recipes}))

    const cat = categories.find(item => (item.code === code));
    const filteredRecipes = recipes.filter(item => (item.category===cat.id));

    return (
        <div className={classes.container}>
            <Container>
                <Breadcrumbs className={classes.breadcrumbsWrapper}>
                    <Link href="/">
                        Сборник рецептов
                    </Link>
                    <Typography color="textPrimary">{cat.fullname}</Typography>
                </Breadcrumbs>
                <Grid container spacing={10}>
                    {filteredRecipes.map(item => (
                        <Grid item xs={4} key={item.fullname}>
                            <RecipeCard {...item}  />
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>
        </div>
    )
}