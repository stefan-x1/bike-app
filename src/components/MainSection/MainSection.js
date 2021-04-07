import React from "react";
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";

class MainSection extends React.Component {
  state = {
    bikes: [],
    filteredBikes: [],
    filter: "",
  };

  componentDidMount() {
    fetch("https://json-project3.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          bikes: data,
          filteredBikes: data,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filter !== prevState.filter) {
      if (this.state.filter === "Male" || this.state.filter === "Female") {
        this.setState({
          filteredBikes: this.state.bikes.filter(
            (el) => el.gender === this.state.filter.toUpperCase()
          ),
        });
      } else if (this.state.filter === "Show all") {
        this.setState({
          filteredBikes: this.state.bikes,
        });
      } else {
        this.setState({
          filteredBikes: this.state.bikes.filter(
            (el) => el.brand === this.state.filter.toUpperCase()
          ),
        });
      }
    }
  }

  setBikeFilter = (e) => {
    e.preventDefault();

    if (e.target.localName === "a") {
      this.setState({
        filter: e.target.text,
      });
    }
  };

  render() {
    return (
      <div className="main">
        <Filters
          bikes={this.state.bikes}
          handleFilter={(e) => this.setBikeFilter(e)}
        />
        <Cards filteredBikes={this.state.filteredBikes} />
      </div>
    );
  }
}

export default MainSection;
