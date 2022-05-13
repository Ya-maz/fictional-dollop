import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import { useAuthDetector } from "./hooks/useAuthDetector";
import store from "./store";
import "./App.css";




const App = () => {
  useAuthDetector();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
            <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
