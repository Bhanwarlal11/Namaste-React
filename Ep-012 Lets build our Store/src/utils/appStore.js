import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducers :{
        cart: cartSlice,
    }
})

export default appStore;