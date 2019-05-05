import React from "react";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

// Set the default serializer for Jest to be from enzyme-to-json
// Easier to read serialized format
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make these globally available so we wont need to do import in each test suites
global.React = React;
global.mount = mount;
global.shallow = shallow;
global.render = render;
global.sinon = sinon;

global.MutationObserver = class MutationObserver {
    observe(){}
    disconnect(){}
};
