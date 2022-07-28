import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css'
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component{
    constructor()
    {
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>{return Response.json()
            .then(users=>{this.setState({robots:users})
            })
        })
        
    }
    onSearchChange=(event)=>
    {
        this.setState({searchfield:event.target.value})
    }
    render()
    {
        const{robots,searchfield}=this.state
        const filteredrobots = robots.filter(robots=>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
        
             <h1>Loading</h1>:
        
        
        (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundary>
            <CardList robots={filteredrobots}/>
            </ErrorBoundary>
            </Scroll>
            </div>    
        )
    }
    
}
    

export default App