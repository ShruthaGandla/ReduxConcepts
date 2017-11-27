import React from "react";
//this file is to show how the age attribute when incremented is not rendered with the new value.that is why we use this.state property.
export class Home extends React.Component{

    constructor(props){
        super();

        // gettings values from props and assigning to local variables
        // this.age = props.age; 

        this.state ={ 
            age: props.age, 
            homeLink:"new link"
        };
    }


    //user-defined functions
    onMakeOlder(){

        //very imp method ..when ever we call this method re-render is triggered
        this.setState({
            age: this.state.age +=3

        });
        
        console.log(this.age);
        
    }

    changeLink(){
        this.props.changeLink(this.state.homeLink);
    }
    render(){
        //can have local vairable to display in html
        var text = "something"
        return (
            <div>
                <p>{text}</p>

                {/* name and age are passed from App (parent) component */}
                

                <hr/>
                {/* learning events */}
                {/* <button onClick={this.onMakeOlder.bind(this)}type="button">Increase Age</button> */}
                                          {/* or */}
                
                
                <button onClick={() => this.onMakeOlder()}type="button">Increase Age</button>
                <p> Your name is {this.props.name},your age is {this.state.age}</p>
                <p>The user is {this.props.user.first_name}</p>


                <hr/>

                {/* Besides props ,we can also pass html elements from parent to child and render like below */}
                {this.props.children}

                <button onClick={this.props.greet}type="button">Greet</button>

                {/* ask doubt:why couldnot i write the logic in render like this.props.changeLink("new Link") */}
                {/* this works then,the reason it was not working before is because i wasnt using fat arrow function*/}
                {/* <button onClick={() => this.props.changeLink("new Link")}type="button">change</button> */}
                {<button onClick={this.changeLink.bind(this)}type="button">change</button>}


                </div>

        );
    }

    
}

// Home.propTypes={
//     name:React.PropTypes.string,
//     age:React.PropTypes.number,
//     greet:React.PropTypes.func

// };