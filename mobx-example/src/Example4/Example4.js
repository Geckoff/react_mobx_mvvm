import React from "react";
import { Store } from "./Srore";
import { CounterHandlers } from "./CounterHandlers";
import { CounterResults } from "./CounterResults";
import { Col, Row } from "reactstrap";

const store = new Store();
export const Context = React.createContext(store);

export const Example4 = ({ name }) => {
    return (
        <Context.Provider value={store}>
            {name}
            <Row>
                <Col>
                    <CounterHandlers />
                </Col>
                <Col>
                    <CounterResults />
                </Col>
            </Row>
        </Context.Provider>
    );
};
