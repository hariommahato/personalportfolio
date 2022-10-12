import "./App.css";
import { Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LatestProject from "./components/LatestProject/LatestProject";
import Header from "./components/Header/Header";

// import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
// import AdminLoginForm from "./components/Admin/AdminLoginForm/AdminLoginForm";
// import AddAbout from "./components/AddAbout";
// import AllAbout from "./components/AllAbout";
// import EditAbout from "./components/EditAbout";
// import AllAdmin from "./components/AllAdmin";
// import EditAdmin from "./components/EditAdmin";
// import AddAdmin from "./components/AddAdmin";
// import AddProject from "./components/AddProject";
// import EditProject from "./components/EditProject";
// import AllProject from "./components/AllProject";
// import AddWhatIDo from "./components/AddWhatIDo";
// import EditWhatIDo from "./components/EditWhatIDo";
// import AllWhatIDo from "./components/AllWhatIDo";
// import AddContact from "./components/AddContact";
// import AllContact from "./components/AllContact";
// import EditContact from "./components/EditContact";
import Signup from "./components/Signup";
import Login from "./components/Login";

// import { useEffect } from "react";
import {PrivateRoute} from './utils/PrivateRoute';

const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const DefaultLayout = () => {
  return (
    <>
      <Outlet/>
    </>
  );
};

const AdminLayout = () => {
  return <Outlet />;
};

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
        <Route index element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
        </Route>

        <Route
          path="/home"
          exact
          element={
            <PrivateRoute>
              <BasicLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/home/contact" exact element={<Contact />} />
          <Route path="/home/work" exact element={<LatestProject />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLoginForm />} />
          <Route path="/admin/dashboard" exact element={<AdminDashboard />}>
            <Route
              path="/admin/dashboard/addabout"
              exact
              element={<AddAbout />}
            />
            <Route
              path="/admin/dashboard/editabout/:id"
              exact
              element={<EditAbout />}
            />
            <Route path="/admin/dashboard/allabout" element={<AllAbout />} />

            <Route
              path="/admin/dashboard/addadmin"
              exact
              element={<AddAdmin />}
            />
            <Route
              path="/admin/dashboard/editadmin/:id"
              exact
              element={<EditAdmin />}
            />
            <Route path="/admin/dashboard/alladmin" element={<AllAdmin />} />

            <Route
              path="/admin/dashboard/addproject"
              exact
              element={<AddProject />}
            />
            <Route
              path="/admin/dashboard/editproject/:id"
              exact
              element={<EditProject />}
            />
            <Route
              path="/admin/dashboard/allproject"
              element={<AllProject />}
            />

            <Route
              path="/admin/dashboard/addwhatido"
              exact
              element={<AddWhatIDo />}
            />
            <Route
              path="/admin/dashboard/editwhatido/:id"
              exact
              element={<EditWhatIDo />}
            />
            <Route
              path="/admin/dashboard/allwhatido"
              element={<AllWhatIDo />}
            />

            <Route
              path="/admin/dashboard/addcontact"
              exact
              element={<AddContact />}
            />
            <Route
              path="/admin/dashboard/editcontact/:id"
              exact
              element={<EditContact />}
            />
            <Route
              path="/admin/dashboard/allcontact"
              element={<AllContact />}
            />
          </Route>
        </Route>
      </Routes> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<CodeForInterview /> } /> */}
      {/* <Route path="all" element={<AllAbout /> } />
        <Route path="/" element={<AddAbout />} />
        <Route path="/edit/:id" element={<EditAbout />} /> */}
      {/* <Route path='/*' element={<NotFound />} /> */}
      {/* </Routes> */}

      {/* <AboutForm/> */}
    </>
  );
}

export default App;
