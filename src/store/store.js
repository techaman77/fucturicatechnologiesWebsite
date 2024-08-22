import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'
import formReducer from './forms'
const store = configureStore ({
    reducer : {
       auth : authReducer ,
       form : formReducer
    }
})

export default store;