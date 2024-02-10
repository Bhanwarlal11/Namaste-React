import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

/*
*Header - logo
        - Nav Items
*Body - Search
      - Restaurant container
      -    Restaurant card
          -img
          -Name of RES, Star Rating , Cuisines , delivery Time
*Footer - CopyRight
        - Links
        - Address
        - Contact
*/


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
