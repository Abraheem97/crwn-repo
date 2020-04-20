import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";

import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // UserAuth returns null if user is signed out or there is no session presesnt on firebase for current user
        const userRef = await createUserProfileDocument(userAuth); //this will return the userRef object from the method createUserProfileDocument

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id, //This iss the UID of the record in our database
              ...snapShot.data(), // The rest of the params we passed on creating the record
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribefromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
