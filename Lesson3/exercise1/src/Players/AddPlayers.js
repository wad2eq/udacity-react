import { Component } from "react";

class AddPlayers extends Component{
    

    state={
        nickName : "",
        firstName: "",
        secondName: "", 
        gamePlayed: 0
    }
    handleSubmit= (e)=>{
        console.log(this.props);
        e.preventDefault();
        this.props.showForm();
    }

    render(){
        return (
            <header>
               <h3>Add players</h3>
               <form onSubmit = {this.handleSubmit}>
                    <p><input type="text" placeholder="The nick-name" /></p>
                    <p><input type="text" placeholder="First Name" /></p>
                    <p><input type="text" placeholder="Second Name" /></p>
                    <p><input type="number" placeholder="Played games" /></p>
                    <button>Update player list</button>
               </form>
            </header>
        )
    }

}

export default AddPlayers;