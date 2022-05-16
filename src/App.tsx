import AppRouter from "./components/AppRouter";
import { useAuthDetector } from "./hooks/useAuthDetector";

import "./App.css";

const App = () => {
  useAuthDetector();
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
