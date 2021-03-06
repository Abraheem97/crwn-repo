import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Checkout from "./components/checkout/checkout.component";
import { ToastContainer } from "react-toastify";

class App extends React.Component {
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
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
        <ToastContainer
          autoClose={2000}
          toastClassName="dark-toast"
          closeButton={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
