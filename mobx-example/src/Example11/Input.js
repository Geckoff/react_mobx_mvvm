import { computed, action } from "mobx";
import React from "react";
import { observer } from "mobx-react";

export const Input = observer(({ inputViewModel }) => (
    <input
        value={inputViewModel.value}
        onChange={e => {
            inputViewModel.setValue(e.target.value);
        }}
    />
));

export class InputViewModel {
    _source;
    property;

    constructor(source, property) {
        this._source = source;
        this.property = property;
    }

    @computed get source() {
        return this._source();
    }

    @computed get value() {
        return this.source[this.property];
    }

    @action setValue(value) {
        this.source[this.property] = value;
    }
}
