/* eslint-disable prettier/prettier */
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { UserContextProvider } from "./context/userContext";
import { LoggedInUserContextProvider } from "./context/logged-in-user";

import ProtectedRoute from "./helpers/protected-route";
import useAuthListener from "./hooks/use-auth-listener";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Dashboard = lazy(() => import("./pages/dashbord"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            {/* <Route path={ROUTES.PROFILE} element={<Profile />} /> */}
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <LoggedInUserContextProvider>
                  <ProtectedRoute user={user}>
                    <Dashboard />
                  </ProtectedRoute>
                </LoggedInUserContextProvider>
              }
            />
            <Route
              path={ROUTES.PROFILE}
              element={
                <ProtectedRoute user={user}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
