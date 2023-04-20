import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";

// import components
import NavBar from "./components/NavBar";

// import styling
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? 
        (<>
          <NavBar />

          <Routes>
            <Route path="orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>)
        : 
        <AuthPage />
       }
    </main>
  );
}

export default App;
