import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-notifications/lib/notifications.css";
import { Col, Row } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Example1 } from "./Example1/Example1";
import { Example2 } from "./Example2/Example2";
import { Example3 } from "./Example3/Example3";
import { Example4 } from "./Example4/Example4";
import { Example5 } from "./Example5/Example5";
import { Example6 } from "./Example6/Example6";
import { Example7 } from "./Example7/Example7";
import { Example8 } from "./Example8/Example8";
import { Example9 } from "./Example9/Example9";

function App() {
	return (
		<Router>
			<div className="App p-4">
				<Row>
					<Col sm={2}>
						<ListGroup>
							<ListGroupItem>
								<Link to="/example1">Example 1</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example2">Example 2</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example3">Example 3</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example4">Example 4</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example5">Example 5</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example6">Example 6</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example7">Example 7</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example8">Example 8</Link>
							</ListGroupItem>
							<ListGroupItem>
								<Link to="/example9">Example 9</Link>
							</ListGroupItem>
						</ListGroup>
					</Col>
					<Col sm={10}>
						<Switch>
							<Route path="/example1">
								<Example1 />
							</Route>
							<Route path="/example2">
								<Example2 />
							</Route>
							<Route path="/example3">
								<Example3 />
							</Route>
							<Route path="/example4">
								<Example4 />
							</Route>
							<Route path="/example5">
								<Example5 />
							</Route>
							<Route path="/example6">
								<Example6 />
							</Route>
							<Route path="/example7">
								<Example7 />
							</Route>
							<Route path="/example8">
								<Example8 />
							</Route>
							<Route path="/example9">
								<Example9 />
							</Route>
						</Switch>
					</Col>
				</Row>
			</div>
		</Router>
	);
}

export default App;
