import './app.module.css';
import Header from "../header/header";
import HomePage from "../../pages/home";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import CategoryPage from "../../pages/category";
import RecipePage from "../../pages/recipe";
import Swagger from "../swagger/swagger";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Switch>
                    <Route path='/' exact={true}><HomePage/></Route>
                    <Route path='/category/:code' exact={true}><CategoryPage /></Route>
                    <Route path='/category/:catId/recipe/:id' exact={true}><RecipePage /></Route>
                    <Route path='/swagger' exact={true}><Swagger /></Route>
                    <Route><HomePage/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
