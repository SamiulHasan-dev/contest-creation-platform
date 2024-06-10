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
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import ManegeUser from "../pages/DashBoard/ManegeUser";
import ManageContest from "../pages/DashBoard/ManageContest";
import ContestSubmitted from "../pages/DashBoard/ContestSubmitted";
import MyProfile from "../pages/DashBoard/MyProfile";
import Payment from "../pages/Payment/Payment";
import MyParticipation from "../pages/DashBoard/MyParticipation";
import SubmitContests from "../pages/AllContest/SubmitContests/SubmitContests";



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
      },
      {
        path: '/contestDetails/:id',
        element: <ContestDetails></ContestDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/contest/${params.id}`)
      },
      {
        path: '/payment/:id',
        element: <Payment></Payment>,
        loader: ({params})=> fetch(`http://localhost:5000/contest/${params.id}`)
      },
      
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
      },
      {
        path: 'contestSubmitted',
        element: <ContestSubmitted></ContestSubmitted>
      },
      //admin
      {
        path: 'manageUser',
        element: <ManegeUser></ManegeUser>
      },
      {
        path: 'manageContest',
        element: <ManageContest></ManageContest>,
      },
      //user
      {
        path: 'myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'participatedContest',
        element: <MyParticipation></MyParticipation>
      },
      {
        path: 'participatedContest/submit/:id',
        element: <SubmitContests></SubmitContests>,
        loader: ({params})=> fetch(`http://localhost:5000/paymentSingle/${params.id}`)
      }
    ]
  }
]);