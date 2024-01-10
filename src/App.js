import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { Provider } from "react-redux";
import { store } from './redux/store';


 

function App() {
  return (
    <Provider store={store}>

      
      <Routes>
        <Route path="/*" element={<UserRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRoutes />}></Route>
      </Routes>

    </Provider>
   




  );
}

export default App;
