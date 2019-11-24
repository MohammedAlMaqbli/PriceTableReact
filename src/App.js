import React, { Component } from "react";
import "./App.css";
import PriceCard from "./PriceCard";
import SectionHeader from "./SectionHeader";
import { getPriceCards } from "./services/fakeCardService";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.setState({ data: getPriceCards() });
  }

  render() {
    return (
      <div class="">
        <SectionHeader />

        <div className="all-price-cords">
          {this.state.data.map(card => (
            <PriceCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
