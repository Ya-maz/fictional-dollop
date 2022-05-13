import Layout from "antd/lib/layout";

import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Login />
      </Layout>
    </div>
  );
}

export default App;
