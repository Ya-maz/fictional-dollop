import Layout from "antd/lib/layout";

import Navbar from "./components/Navbar";
import "./App.css";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Contacts/>
      </Layout>
    </div>
  );
}

export default App;
