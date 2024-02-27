import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
//  dummy data
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/bhanwarlal11");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render(){
        
        const {name,location,login,avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <div className="avatar_url">
                    <img  src={avatar_url}/>
                </div>
                <div>
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Contact: {login}</h4>
                </div>
            </div>
        )
    }
}

export default UserClass;