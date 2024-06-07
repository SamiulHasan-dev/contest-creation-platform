import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import SignUp from "../pages/Home/SignUp";
import DashBoard from "../pages/DashBoard/DashBoard";
import AddContest from "../pages/DashBoard/AddContest";
import CreateContest from "../pages/DashBoard/CreateContest";
import Update from "../pages/DashBoard/Update";
import PrivateRoute from "./PrivateRoute";
import AllContest from "../pages/AllContest/AllContest";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'allContest',
        element: <AllContest></AllContest>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children:[
      {
        path: 'addContest',
        element: <AddContest></AddContest>
      },
      {
        path: 'createdContest',
        element: <CreateContest></CreateContest>
      },
      {
        path: 'createdContest/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/contest/${params.id}`)
      }
    ]
  }
]);