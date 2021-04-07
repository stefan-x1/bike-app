import React from "react";
import "./Filters.css";

class Filters extends React.Component {
  state = {
    activeElement: 'Show all'
  };

  toggleActive = (e) => {
    if(e.target.localName === 'a'){
      this.setState({
        activeElement: e.target.innerText
      })
    }
  }

  render() {
    const {bikes} = this.props;
    const bikeBrands = ["LE GRAND BIKES", "KROSS", "EXPLORER", "VISITOR", "PONY", "FORCE", "E-BIKES", "IDEAL"];

    return (
      <div className="Filters" onClick={(e) => this.props.handleFilter(e)}>
        <h4>
          <b>Filter by:</b>
        </h4>
        <ul onClick={this.toggleActive}>
          <li className={this.state.activeElement === 'Show all' ? 'active' : ''}>
            <a href="/">Show all</a>
            <span>{bikes.length}</span>
          </li>
        </ul>
        <hr />
        <h4>
          <b>Gender</b>
        </h4>
        <ul onClick={this.toggleActive}>
          <li className={this.state.activeElement === 'Male' ? 'active' : ''}>
            <a href="/">Male</a>
            <span>{bikes.filter((bike) => bike.gender === "MALE").length}</span>
          </li>
          <li className={this.state.activeElement === 'Female' ? 'active' : ''}>
            <a href="/">Female</a>
            <span>
              {bikes.filter((bike) => bike.gender === "FEMALE").length}
            </span>
          </li>
        </ul>
        <hr />
        <h4>
          <b>Brand</b>
        </h4>
        <ul onClick={this.toggleActive}>
          {bikeBrands.map((brand, index) => {
            return (<li className={this.state.activeElement === brand ? 'active' : ''} key={index}>
              <a href="/">{brand}</a>
              <span>
                {bikes.filter((bike) => bike.brand === brand).length}
              </span>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default Filters;
