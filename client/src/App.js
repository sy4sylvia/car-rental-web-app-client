import { Outlet, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/register">Register</Link> |{" "}
                <Link to="/login">Log in</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
