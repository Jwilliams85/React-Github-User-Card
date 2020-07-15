import React from "react";
import axios from "axios";
// import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "JWilliams85",
      userData: [],
      followers: [],
      
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userName}`).then(response => {
     
      this.setState({
        userData: response.data
  
      });
    });
  }


  handleChange = event => {
    this.setState({
      userName: event.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {

    if (this.state.userName !== this.state.userName) {
      this.setState({
          userData: []
      });
    }
    
  fetchFollowers = event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => {
        this.setState({ followers: res.data});
      });
  };

  searchUser = (e, text) => {
    e.preventDefault()
    this.setState({
      userName:[text]
    })
  }
  }
  render() {
    return (
      <div className="App">
        <h1>Github User Info</h1>
        <input
          type="text"
          value={this.login}
          onChange={this.handleChange}
        />
        <button onClick={this.fetchFollowers}>People Cards</button>
        <div className="cards">
          {this.state.cards.map(card => (
            <img width="200" src={card} key={card} alt={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;