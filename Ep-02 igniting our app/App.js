import React from "react";
import ReactDOM  from "react-dom";


const heading = React.createElement("h1",  
{id: "heading" , xyz: "abc"},   
"Hello World from React!");   



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);



const part2  = React.createElement("div",{id:"parend"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"i am in h1 tag -> child1"),
    React.createElement("h2",{},"i am in h2 tag -> child1")])
    ,
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"i am in h1 tag -> child2"),
    React.createElement("h2",{},"i am in h2 tag -> child2")])
]
)

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(part2);