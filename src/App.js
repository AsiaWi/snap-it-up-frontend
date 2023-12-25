// css imports
import styles from './App.module.css';
// bootstrap imports
import Container from "react-bootstrap/Container";
// react imports
import {Route, Switch} from "react-router-dom";
import './api/axiosDefaults';
// components imports
import NavBar from './components/NavBar';
import RegisterForm from './pages/auth/RegisterForm';
import SigninForm from './pages/auth/SigninForm';



function App() {
 

  return (
    <div className= {styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <p>Hi this is home</p>}/>
          <Route path='/sign-in' render={() => <SigninForm/>}/>
          <Route path='/register' render={() =><RegisterForm/>}/>
          <Route render={() => <p>page not found</p>}/>

        </Switch>
      </Container>
    </div>
  );
}

export default App;