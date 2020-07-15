import React from "react";
import axios from "axios";
import Form from "./components/Form"
import UserCard from "./components/UserCard"
import FollowerCard from "./components/FollowerCard"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profileName: "JWilliams85",
      userData: [],
      followers: [],
      
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.profileName}`).then(response => {
     
      this.setState({
        userData: response.data
  
      });
    });
  }


  // handleChange = event => {
  //   this.setState({
  //     profileName: event.target.value
  //   });
  // };

  componentDidUpdate(prevProps, prevState) {

    if (this.state.profileName !== this.state.profileName) {
      this.setState({
          userData: []
      });
    }
    
  
    axios
      .get(`https://api.github.com/users/${this.state.profileName}/followers`)
      .then(res => {
        this.setState({ followers: res.data});
      });
  

  
  }
  searchUser = (e, text) => {
    e.preventDefault()
    this.setState({
      profileName:[text]
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
        <h1>Github User Info</h1>
        <Form searchUser={this.searchUser}></Form>
        <Link to= '/UserCard'>
        <h2>Users</h2>
        </Link>
        <div className = "cards">
          <Route exact path = '/UserCard'>
          <UserCard userData={this.state.userData} followers={this.state.followers}></UserCard>
          </Route>
        </div>
        {/* <h2>Followers</h2> */}
        <div className="cards">
          {this.state.followers.map((item, index) => {
            return <Route exact path= '/UserCard'>(<FollowerCard key = {index} userData={item} followers ={[]}></FollowerCard>)
           </Route>
          }
          )}
        </div>
        </Router>
      </div>
    );
  }
}

export default App;