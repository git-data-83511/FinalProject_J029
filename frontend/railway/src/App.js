import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Register from "./routes/Register";
import SignIn from "./routes/SignIn";
import Logout from "./routes/Logout";
import PageNotFound from "./routes/PageNotFound";
// import ProtectedRoute from "./routes/ProtectedRoute";


import "react-toastify/dist/ReactToastify.css";

import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar></Navbar>

        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userhome" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/bookflight" element={<booktrain />} />
          <Route path="/logout" element={<Logout />} />

          
        </Routes>

        <ToastContainer />
        <Footer></Footer>
      </UserContext.Provider>
    </div>
  );
}

export default App;
