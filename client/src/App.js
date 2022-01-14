import "./style/imports.css"
import Main from "./crypto/Main";
import Header from "./crypto/Header";
import { Provider } from "react-redux";

import store from "./crypto/store";

function App() {
  return (
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
  );
}

export default App;