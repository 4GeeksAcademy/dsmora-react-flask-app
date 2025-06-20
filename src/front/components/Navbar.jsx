import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{
						store.user ?
							<Link to="/user-data">
								<button className="btn btn-success">{store.user.email}</button>
							</Link> :
							<Link to="/login">
								<button className="btn btn-success">Login</button>
							</Link>
					}

				</div>
			</div>
		</nav>
	);
};