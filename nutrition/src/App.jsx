import React from 'react';
import './App.css';
import FoodBox from './Component/FoodBox';
import FoodData from './resources/FoodData'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      newarr: FoodData,
    };
  }

  render() {
    let { newarr } = this.state;

    let handlechange = (e) => {
      let filter = newarr.filter((el) => el.name.includes(e.target.value));
      this.setState({ newarr: filter });
    };

    return (
      <>
        <div>
          <input type="text" placeholder="search" onChange={handlechange} />
        </div>
        {newarr.map((el, i) => (
          <FoodBox key={i} {...el} />
        ))}
      </>
    );
  }
}
