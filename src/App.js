import React, { createContext, useReducer, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

import Signout from "./components/Signout";
import ExploreRentBike from "./components/ExploreRentBike";

import { initialState, reducer } from "../src/reducer/UseReducer";
import {
  adminInitialState,
  adminreducer,
} from "../src/reducer/UseReducerAdmin";

export const UserContext = createContext();
export const AdminContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [adminState, dispatchadmin] = useReducer(
    adminreducer,
    adminInitialState
  );

  return (
    <>
      <h1>test</h1>
      <UserContext.Provider value={{ state, dispatch }}>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/signin">
          {" "}
          <Signin />{" "}
        </Route>
        <Route path="/signup">
          {" "}
          <Signup />{" "}
        </Route>
        <Route path="/signout">
          {" "}
          <Signout />{" "}
        </Route>
        <Route path="/mycart">
          {" "}
          <Mycart />{" "}
        </Route>
        <Route path="/rentbike">
          {" "}
          <Rentabike />{" "}
        </Route>
        <Route path="/rentbikecart">
          {" "}
          <Rentbikecart />{" "}
        </Route>
        <Route path="/rentbikereviews">
          {" "}
          <Rentbikereviews />{" "}
        </Route>
        <Route path="/exploreRentBikes">
          {" "}
          <ExploreRentBike />{" "}
        </Route>
      </UserContext.Provider>

      <AdminContext.Provider value={{ adminState, dispatchadmin }}>
        <Route path="/adminsignin">
          {" "}
          <AdminSignin />{" "}
        </Route>
        <Route path="/adminsignout">
          {" "}
          <AdminSignout />{" "}
        </Route>
        <Route path="/dashboard">
          {" "}
          <Dashboard />{" "}
        </Route>
        <Route path="/addCars">
          {" "}
          <AddCars />{" "}
        </Route>
        <Route path="/rentbikesreports">
          {" "}
          <Rentbikereports />{" "}
        </Route>
        <Route path="/availableusers">
          {" "}
          <Availableusers />{" "}
        </Route>
        <Route path="/getrentbikesforadmin">
          {" "}
          <Getrentbikes />{" "}
        </Route>
      </AdminContext.Provider>
    </>
  );
};

export default App;
