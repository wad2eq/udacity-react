import { Component } from "react";

class AddPlayers extends Component{
    state={
        nickName : "",
        firstName: "",
        secondName: "", 
        playedGames: 0
    }
    handleSubmit= (e)=>{
        console.log(this.props);
        e.preventDefault();
        this.props.showForm();
    }
    stateUpdate = (event)=>{
        const nameValu = event.target.name;
        this.setState({
            [nameValu] : event.target.value,
        })
    }
    render(){
        return (
            <header>
               <h3>Add players</h3>
               <form onSubmit = {this.handleSubmit}>
                    <p>
                        <input
                            name="nickName" 
                            type="text" 
                            placeholder="The nick-name" 
                            value= {this.state.nickName}
                            onChange={this.stateUpdate}/>
                        </p>
                    <p>
                        <input
                            name="firstName" 
                            type="text" 
                            placeholder="First Name"
                            value= {this.state.firstName}
                            onChange={this.stateUpdate} />
                    </p>
                    <p>
                        <input
                            name="secondName" 
                            type="text" 
                            placeholder="Second Name"
                            value= {this.state.secondName}
                            onChange={this.stateUpdate} 
                            />
                        </p>
                    <p>
                        <input 
                            name="playedGames"
                            type="number" 
                            placeholder="Played games" 
                            value = {this.state.playedGames}
                            onChange={this.stateUpdate} 
                        />
                    </p>
                    <button onClick={() => this.props.addNewPlayer(this.state)}>Update player list</button>
               </form>
            </header>
        )
    }

}

export default AddPlayers;