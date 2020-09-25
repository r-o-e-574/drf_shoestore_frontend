import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    };
  }
  //TODO put in the api info from our Shoe Django app
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/Shoe')
      .then((res) => res.json())
      .then((data) => this.setState({ shoes: data }));
  }

  render() {
    return (
      <div>
        <h1>SHOEZ</h1>
        {this.state.shoes.map((s) => (
          <ul>
            <li>
              size: {s.size}
            </li>
            <li>
              brand name: {s.brand_name}
            </li>
            <li>
              manufacturer: {s.manufacturer}
            </li>
            <li>
              color: {s.color}
            </li>
            <li>
              material: {s.material}
            </li>
            <li>
              shoe type: {s.shoe_type}
            </li>
            <li>
              fasten type: {s.fasten_type}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
