import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseFromQuery from "../house/HouseFromQuery";
import HousesContext from "../context/housesContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />

        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>

          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
          </Route>

          <Route path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
