import React from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom';
import {Container} from "@material-ui/core";

export default function Header() {
    return (
        <Container>
            <div className={styles.headerWrapper}>
                <h1>Сборник рецептов</h1>
                <a href='/swagger'><h4>Документация API</h4></a>
            </div>
        </Container>
    )
}