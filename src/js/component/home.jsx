import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    constructor(){
        super();
        this.state = {
            list: [],
            currentTask: ""
        };
        
        
    }
    
    updateList(task) {
        let currentState = this.state;
        currentState.list.push(task);
        currentState.currentTask = "";
        this.setState(currentState);
    }
    
    inputTask (thing) {
        let currentState = this.state;
        currentState.currentTask = thing;
        this.setState(currentState);
    }
    
    
    
    
    deleteTask (index) {
        let currentState = this.state;
        currentState.list.splice(index,1);
        this.setState(currentState);
    }
    
    
    
    render(){
        
        
        return (
            <div className="text-center mt-2">
                <div className="container border border-dark">
                    <h1>todos</h1>
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <input onChange={(e) => this.inputTask(e.target.value)} 
                            onKeyPress={(e) => {if(e.key === "Enter") 
                            { this.updateList(e.target.value);}  }} 
                            value={this.state.currentTask}
                            className="col-11" type="text" placeholder="What needs to be done?">
                            </input>
                            <ul className="list-inline ">
                           
                                {
                                        this.state.list.map((garbage, index) => {
                                        return <li key={index} className="list-inline-item d-flex justify-content-between">{garbage} 
                                            <span id={index} onClick={(index) => {this.deleteTask(index.currentTarget.id);}}>
                                                <i className="fas fa-times"></i>
                                            </span></li>;
                                        }
                                    )
                                }
                            </ul>
                            {this.state.list.length} items left
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
