import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import StoriesPage from "./pages/StoriesPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/stories">
              <StoriesPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
