import React from "react";
import axios from "axios";
import Form from "./components/Form"
import UserCard from "./components/UserCard"
import FollowerCard from "./components/FollowerCard"
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
    
  
    axios
      .get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => {
        this.setState({ followers: res.data});
      });
  

  
  }
  searchUser = (e, text) => {
    e.preventDefault()
    this.setState({
      userName:[text]
    })
  }
  render() {
    return (
      <div className="App">
        
        <h1>Github User Info</h1>
        <Form searchUser={this.searchUser}></Form>
        <h2>User</h2>
        <div className = "cards">
          <UserCard userData={this.state.userData} followers={this.state.followers}></UserCard>
        </div>
        <h2>Followers</h2>
        <div className="cards">
          {this.state.followers.map((item, index) => {
            return (<FollowerCard key = {index} userData={item} followers ={[]}></FollowerCard>)
          }
          )}
        </div>
       
      </div>
    );
  }
}

export default App;