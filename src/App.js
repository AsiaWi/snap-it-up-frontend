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
import CreateAdvertForm from './pages/adverts/CreateAdvertForm';
import AdvertDetailPage from './pages/adverts/AdvertDetailPage';



function App() {
 

  return (
    <div className= {styles.App}>
      <NavBar/>
      <Container >
        <Switch>
          <Route exact path='/' render={() => <p>Hi this is home</p>}/>
          <Route path='/sign-in' render={() => <SigninForm/>}/>
          <Route path='/register' render={() =><RegisterForm/>}/>
          <Route path='/adverts/create' render={() => <CreateAdvertForm/>}/>
          <Route path='/adverts/:id' render={() => <AdvertDetailPage/>}/>
          <Route render={() => <p>page not found</p>}/>
          
        </Switch>
      </Container>
    </div>
  );
}

export default App;