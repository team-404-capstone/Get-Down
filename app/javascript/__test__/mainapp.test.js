import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../components/MainApp';
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Jumbotron } from 'reactstrap';
import "isomorphic-fetch"

Enzyme.configure({ adapter: new Adapter() });

test("MainApp renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
