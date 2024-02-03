/**
 *
 *  part 03 -  create <h1> tag using React ? &  meaing of {createElemnt} & {.render} methods?
 *
 **/



const heading = React.createElement("h1",  // tag
{id: "heading" , xyz: "abc"},   //id , attibutes  // props
"Hello World from React!");     // children // innerHTML

// React.createElement -->> just create an object , not a h1 tag html

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);
//.render -->>>   it is an method to converting object into HMTL format & putting into the REF


/* *  
*
*
*           part 04  --  create this structure using react ?   
*                      it is based on nested childen
*
*
*<div id="parent">
*       <div class="child1">
*            <h1>i am in h1 tag -> child1</h1>
*            <h2>i am in h2 tag -> child1</h2>
*        </div>
*        <div class="child2">
*            <h1>i am in h1 tag -> child2</h1>
*            <h2>i am in h2 tag -> child2</h2>
*        </div>
*</div>
*
*/


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