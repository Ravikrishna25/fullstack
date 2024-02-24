import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LazyLayout from "./components/ui/LazyLayout";
import UserLayout from "./components/ui/user/UserLayout";
import AdminLayout from "./components/ui/admin/AdminLayout";

//lazy
//user
const lazyLogin = lazy(() => import("./pages/auth/Login"));
const lazyProfile = lazy(() => import("./pages/user/Profile"));
const lazyRegister = lazy(() => import("./pages/auth/Register"));
const lazyHome = lazy(() => import("./pages/user/Home"));
const lazyAcademy = lazy(() => import("./pages/user/Academy"));
const lazyCourses = lazy(() => import("./pages/user/Courses"));
const lazyEnroll = lazy(() => import("./pages/user/Enroll"));
const lazyAbout = lazy(() => import("./pages/user/About"));

//admin
const lazyDashboard = lazy(() => import("./pages/admin/Dashboard"));
const lazyUser = lazy(() => import("./pages/admin/Users"));
const lazyAdminAcademy = lazy(() => import("./pages/admin/Institute"));
const lazyAdminCourse = lazy(() => import("./pages/admin/Courses.jsx"));
const lazyAdminLearner = lazy(() => import("./pages/admin/Learner.jsx"));

//layouts
const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={lazyHome} />} />
        <Route
          path="/academy"
          element={<LazyLayout component={lazyAcademy} />}
        />
        <Route
          path="/profile"
          element={<LazyLayout component={lazyProfile} />}
        />
        <Route
          path="/academy/:id"
          element={<LazyLayout component={lazyCourses} />}
        />
        <Route
          path="/academy/:id/course/:id"
          element={<LazyLayout component={lazyEnroll} />}
        />
        <Route
          path="/about"
          element={<LazyLayout component={lazyAbout} />}
        />
      </Routes>
    </UserLayout>
  );
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route
          path="/dashboard"
          element={<LazyLayout component={lazyDashboard} />}
        />
        <Route
          path="/user-info"
          element={<LazyLayout component={lazyUser} />}
        />
        <Route
          path="/academy"
          element={<LazyLayout component={lazyAdminAcademy} />}
        />
        <Route
          path="/course"
          element={<LazyLayout component={lazyAdminCourse} />}
        />
        <Route
          path="/learner"
          element={<LazyLayout component={lazyAdminLearner} />}
        />
      </Routes>
    </AdminLayout>
  );
};

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/reign/login" />} />
      <Route
        path="/reign/login"
        element={<LazyLayout component={lazyLogin} />}
      />
      <Route
        path="/reign/register"
        element={<LazyLayout component={lazyRegister} />}
      />
      <Route path="/reign/user/*" element={<UserRoutes />} />
      <Route path="/reign/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
