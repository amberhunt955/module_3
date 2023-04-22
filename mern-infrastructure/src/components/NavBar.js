import { Link } from "react-router-dom";

// import utilities
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);

  const handleLogOut = () => {
    logOut();
    setUser(null);
  };

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; &nbsp;
      <span>Welcome, {user.name}!</span>
      &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
