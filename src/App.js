import "./App.css";
import { RouterProvider } from "react-router-dom";
// import Explore from "./Page/Explore";
// import Notifications from "./Page/Notifications";
// import Massages from "./Page/Massages";
// import Profile from "./Page/Profile";
// import Premium from "./Page/Premium";
// import More from "./Page/More";
import router from "./routes";
// import Home from "./Page/Home";
// import Leftsidebar from "./components/Leftsidebar";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/massages" element={<Massages />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
