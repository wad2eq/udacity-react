import { Component } from "react";

class AddPlayers extends Component{
    

    handleSubmit= (e)=>{
        e.preventDefault();
    }

    render(){
        return (
            <header>
               <h3>Add players</h3>
               <form onSubmit = {this.handleSubmit}></form>
               <button>Update player list</button>
            </header>
        )
    }

}

export default AddPlayers;