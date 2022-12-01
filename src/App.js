import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <div className="App">
      {/* BrowserRouter表示使用的是history路由 */}
      <BrowserRouter>
        {/* <Routes>表示匹配到路由后不会再继续往后匹配了，只匹配一个 */}
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
