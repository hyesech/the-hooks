import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import SigninPage from "./Pages/signin";
import Navbar from "./Components/Navbar";
// import UseTitlePage from "./Pages/UseTitlePage";
import Footer from "./Components/Footer";
import HooksPage from "./Pages/HooksPage";
import UseTitlePage from "./Pages/UseTitlePage";
import HyesechPage from "./Pages/HyesechPage";
import UseRefPage from "./Pages/UseRefPage";
import UseEffectPage from "./Pages/UseEffectPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/hyesech" component={HyesechPage} exact />
        <Route path="/hooks" component={HooksPage} exact />
        <Route path="/usetitle" component={UseTitlePage} exact />
        <Route path="/useref" component={UseRefPage} exact />
        <Route path="/useeffect" component={UseEffectPage} exact />

        {/* <Route path="/usetitle" component={UseTitlePage} exact /> */}
        {/* <Route path="/signin" component={SigninPage} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signin" component={SigninPage} exact /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
