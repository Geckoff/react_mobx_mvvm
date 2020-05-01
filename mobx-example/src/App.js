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
import { Example10 } from "./Example10/Example10";
import { Example11 } from "./Example11/Example11";

function App() {
    return (
        <Router>
            <div className="App p-4">
                <Row>
                    <Col sm={3}>
                        <ListGroup className="text-left">
                            <ListGroupItem>
                                <Link to="/example1">1. Basic App Structure</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example2">2. Basic App, MobX Provider</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example3">3. Files Structure</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example4">4. Mobx Store + React State</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example5">5. Mobx Store + ViewModel</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example6">6. Array Elements Observability</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example7">7. Object Properties Observability</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example8">8. Array Object Elements Observability</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example9">
                                    9. Nested Object Properties Observability
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to="/example10">10. Observability Loss</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                        <Switch>
                            <Route path="/example1">
                                <Example1
                                    name={
                                        <h2 className="text-left text-muted">
                                            1. Basic App Structure
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example2">
                                <Example2
                                    name={
                                        <h2 className="text-left text-muted">
                                            2. Basic App, MobX Provider
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example3">
                                <Example3
                                    name={
                                        <h2 className="text-left text-muted">3. Files Structure</h2>
                                    }
                                />
                            </Route>
                            <Route path="/example4">
                                <Example4
                                    name={
                                        <h2 className="text-left text-muted">
                                            4. Mobx Store + React State
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example5">
                                <Example5
                                    name={
                                        <h2 className="text-left text-muted">
                                            5. Mobx Store + ViewModel
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example6">
                                <Example6
                                    name={
                                        <h2 className="text-left text-muted">
                                            6. Array Elements Observability
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example7">
                                <Example7
                                    name={
                                        <h2 className="text-left text-muted">
                                            7. Object Properties Observability
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example8">
                                <Example8
                                    name={
                                        <h2 className="text-left text-muted">
                                            8. Array Object Elements Observability
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example9">
                                <Example9
                                    name={
                                        <h2 className="text-left text-muted">
                                            9. Nested Object Properties Observability
                                        </h2>
                                    }
                                />
                            </Route>
                            <Route path="/example10">
                                <Example10
                                    name={
                                        <h2 className="text-left text-muted">
                                            10. Observability Loss
                                        </h2>
                                    }
                                />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </div>
        </Router>
    );
}

export default App;
