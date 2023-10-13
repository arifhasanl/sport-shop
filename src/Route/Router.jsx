import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Page/Home/Home'
import Login from "../Page/Login/Login";
import SignUp from "../Page/Login/SingUp"
import AddToy from "../Page/AddToy/AddToy";
import AllToy from "../Page/AllToy/AllToy";
import Mytoy from "../Page/MyToy/Mytoy";
import PrivateRoute from "./PriveteRoute";
import Eorre from "../Page/Eorre";
const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<SignUp></SignUp>
                },
                {
                    path:'/addtoy',
                    element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
                },
                {
                    path:'/alltoy',
                    element:<AllToy></AllToy>
                },
                {
                    path:'/mytoy',
                    element:<PrivateRoute><Mytoy></Mytoy></PrivateRoute>
                }
                
            ]
        },
        {
            path:'*',
            element:<Eorre></Eorre>
        }
    
    ])
    export default router


