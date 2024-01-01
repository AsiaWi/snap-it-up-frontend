// css imports
import styles from "./App.module.css";
// bootstrap imports
import Container from "react-bootstrap/Container";
// react imports
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
// components imports
import NavBar from "./components/NavBar";
import RegisterForm from "./pages/auth/RegisterForm";
import SigninForm from "./pages/auth/SigninForm";
import CreateAdvertForm from "./pages/adverts/CreateAdvertForm";
import AdvertDetailPage from "./pages/adverts/AdvertDetailPage";
import AdvertsListViewPage from "./pages/adverts/AdvertsListViewPage";
import { useLoggedInUser } from "./contexts/LoggedInUserContext";
import EditAdvertForm from "./pages/adverts/EditAdvertForm";
import ProfilePage from "./pages/profiles/ProfilePage"
import EditUsernameForm from "./pages/profiles/EditUsernameForm";
import EditPasswordForm from "./pages/profiles/EditPasswordForm";
import EditProfileForm from "./pages/profiles/EditProfileForm";
// import EditOffersForm from "./pages/offers/EditOffersForm"

function App() {
  const userLoggedIn = useLoggedInUser();
  const profile_id = userLoggedIn?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <AdvertsListViewPage message="No results found.Adjust your search requirements" />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => (
              <AdvertsListViewPage
                message="No results found. Save adverts you are interested in to view them here"
                filter={`save__owner__profile=${profile_id}&ordering=save__-advert__updated_at&`}
                // filter={`owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route exact path="/sign-in" render={() => <SigninForm />} />
          <Route exact path="/register" render={() => <RegisterForm />} />
          <Route exact path="/adverts/create" render={() => <CreateAdvertForm />} />
          <Route exact path="/adverts/:id" render={() => <AdvertDetailPage />} />
          <Route exact path="/adverts/:id/edit" render={() => <EditAdvertForm/>} />
          {/* <Route exact path="/offers/:id/edit" render={() => <EditOffersForm/>} /> */}
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
  exact
  path="/profiles/:id/edit/username"
  render={() => <EditUsernameForm />}
/>
<Route
  exact
  path="/profiles/:id/edit/password"
  render={() => <EditPasswordForm />}
/>
<Route
  exact
  path="/profiles/:id/edit"
  render={() => <EditProfileForm />}
/>
          <Route render={() => <p>page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
