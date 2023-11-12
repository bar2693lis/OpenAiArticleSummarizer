import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({ // global state that save the entire info of our app
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    }, // reduce the entire state to only grab what we need
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) // do something with the state before we get it
})