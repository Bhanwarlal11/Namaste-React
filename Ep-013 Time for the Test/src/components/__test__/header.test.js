import { fireEvent, render,screen } from "@testing-library/react";
import appStore from "../../utils/appStore"
import Header from "../Header"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



it("should render Header component with a login button", ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name: "Login"});
    // const loginButton = screen.getByText("Login");


    expect(loginButton).toBeInTheDocument();
});


it("should render Header component with a cart item", ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
                // complete text - same to same
    // const cartItems = screen.getByText("Cart - (0 items)")

                // match part of text -  {REGEX}
    const cartItems = screen.getByText(/Cart/)


    expect(cartItems).toBeInTheDocument();
});


it("should should change button  {login==>logout} on click", ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout"});

    expect(logoutButton).toBeInTheDocument();
});