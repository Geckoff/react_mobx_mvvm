import React from "react";
import { Store } from "./Srore";
import { Provider } from "mobx-react";
import { CounterHandlers } from "./CounterHandlers";
import { CounterResults } from "./CounterResults";
import { Col, Row } from "reactstrap";

const store = new Store();

export const Example3 = ({ name }) => {
    return (
        <Provider store={store}>
            {name}
            <Row>
                <Col>
                    <CounterHandlers />
                </Col>
                <Col>
                    <CounterResults />
                </Col>
            </Row>
        </Provider>
    );
};
