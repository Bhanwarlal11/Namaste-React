import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"


it("should render RestaurantCard Component With Props data",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();
});