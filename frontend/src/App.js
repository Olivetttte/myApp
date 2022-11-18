import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Dashboardproxi from "./Pages/Dashboardproxi";
import Gatepool from "./Dashboard_Items/Gatepool";
import Profile from "./Pages/Profile";
import Modals from "./Modal/Modals";
import Dashboardprincipal from "./Pages/Principal/Dashboardprincipal";
import Sendrequests from "./Pages/Principal/Sendrequests";
import Tasksprincipal from "./Pages/Principal/Taskprincipal";
import React from "react";
import LiveLocation from "./Dashboard_Items/LiveLocation";
import Tasks from "../src/Dashboard_Items/Tasks";
import getState from "./Components/store/actions/actions";
import { Context } from "./Components/store/actions/appContext";
import { useState, useEffect } from "react";

function App() {
  // const [tasks, setTasks] = React.useState([]);
  // useEffect(() => {
  //   fetch("/fecthtasks").then((response) =>
  //     response.json().then((data) => {
  //       setTasks(data.tasks);
  //     })
      
  //   );
    
  // }, []);
  

  // ALL YOUR STORE ACTION COMES IN HERE AND THIS WRAPPER THAT WAS MEANT TO BE HERE HAS BEEN MOVED TO THE BOTTOM
  // THAT WHY YOU HAVE cONTEXT.PROVIDER WITH THE VALUE OF YOUR STATE ACTION WHICH WAS PULLED FROM GETACTIONS

  const [state, setState] = React.useState(
    getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (updatedStore) =>
        setState({
          store: Object.assign(state.store, updatedStore),
          actions: { ...state.actions },
        }),
    })
  );
  React.useEffect(() => {
    state.actions.loadSomeData();
    // state.actions.syncTokenFromSessionStore().
  }, [state.actions]);

  const authenticationContext = React.useMemo(() => ({
    TOKEN_SYNCHRONIZATION: async () => {},
    SignIn: async (userToken, accountType) => {},

    SignInDisplayer: async (userToken, accountType) => {},
    SignOut: async () => {},
  }));

  return (
    
    <BrowserRouter>
      <Context.Provider value={state}>
        <Header />
        {/* <Gatepool tasks={tasks}/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Dashboardprincipal" element={<Dashboardprincipal />} />
          <Route path="login/*" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="Register" element={<Register />} />
          <Route path="About" element={<About />} />
          <Route path="Dashboardproxi" element={<Dashboardproxi />} />
          <Route path="Gatepool" element={<Gatepool  />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Sendrequests" element={<Sendrequests />} />
          <Route path="Tasksprincipal" element={<Tasksprincipal />} />
          <Route path="LiveLocation" element={<LiveLocation />} />
          <Route path="/Logout" element={<Home />} />
          <Route path="Tasks" element={<Tasks />} />
        </Routes>

        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
