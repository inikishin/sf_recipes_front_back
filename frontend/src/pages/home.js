import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import CategoryCard from "../components/category-card/category-card";
import {getCategories, getRecipes} from "../services/actions/recipes";
import {Grid, Container, makeStyles} from "@material-ui/core";
import homeStyles from "./home-styles";
import RecipeCard from "../components/recipe-card/recipe-card";

const useStyles = makeStyles((theme) => (homeStyles));

export default function HomePage() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {categories, recipes} = useSelector((store) => ({...store.recipes}))

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getRecipes());
    }, [])

    return (
        <div className={classes.container}>
            <Container>
                <Grid container spacing={10}>
                    {categories.map(item => (
                        <Grid item xs={6} key={item.fullname}>
                            <CategoryCard {...item}  />
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>
        </div>
    )
}