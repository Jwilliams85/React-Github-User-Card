import React from 'react'
import {  Link } from 'react-router-dom'
class Form extends React.Component
{
    constructor(props)
    {
        super(props);
         this.state ={text:""}
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchUser(e, this.state.text)
        this.setState({
            text:""
        })
    }

    render(){
        return (
            <div>
                <h1>Welcome to Today</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <input name="text"
                    type="text"
                    onChange={this.handleChange}
                    placeholder="UserName"
                    value={this.state.text}/>
                    {/* <Link to = '/UserCard'> */}
                    <button onClick ={this.handleSubmit}>Find User</button>
                    {/* </Link> */}
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
}
export default Form;