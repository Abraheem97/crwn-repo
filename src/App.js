import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.actions";
class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // UserAuth returns null if user is signed out or there is no session presesnt on firebase for current user
        const userRef = await createUserProfileDocument(userAuth); //this will return the userRef object from the method createUserProfileDocument

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id, //This iss the UID of the record in our database
            ...snapShot.data(), // The rest of the params we passed on creating the record
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribefromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
