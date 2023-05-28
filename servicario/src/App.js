import React from "react";

//state stuff
import { Provider } from "react-redux";
import initStore from "./store/index.js";
import { Toaster } from "react-hot-toast";
import ServiceApp from "ServiceApp.js";

//states
import {
  onAuthStateChanged,
  storeAuthUser,
  subscribeToMessages,
} from "actions";

const store = initStore();

class App extends React.Component {
  //calling the functions below, after initing
  componentDidMount() {
    this.unsubscribeAuth = onAuthStateChanged((authUser) => {
      store.dispatch(storeAuthUser(authUser));
      if (authUser) {
        this.unsubscribeMessages = store.dispatch(
          subscribeToMessages(authUser.uid)
        );
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeAuth();
    // this.unsubscribeMessages();
  }
  
  render() {
    return (
      <Provider store={store}>
        <Toaster />
        <ServiceApp />
      </Provider>
    );
  }
}

export default App;
