// css imports
import styles from './App.module.css';
// bootstrap imports
import Container from "react-bootstrap/Container";
// components imports
import NavBar from './components/NavBar';
// react imports
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className= {styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <p>Hi this is home</p>}/>
          <Route path='/sign-in' render={() => <p>Hi this is sign in page</p>}/>
          <Route path='/register' render={() => <p>Hi this is reg page</p>}/>
          <Route render={() => <p>page not found</p>}/>

        </Switch>
      </Container>
    </div>
  );
}

export default App;