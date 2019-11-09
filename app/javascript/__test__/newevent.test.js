import React from 'react';
import ReactDOM from 'react-dom';
import NewEvent from '../components/NewEvent';
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Jumbotron } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

test("NewEvent form renders without an error", () => {
  const app = shallow(<NewEvent />);
  expect(app.find("Form").exists()).toBe(true);
});

test("NewEvent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewEvent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("NewEvent renders a date input", () => {
  const app = shallow(<NewEvent />);
  expect(app.find("#date").exists()).toEqual(true);
});

test("NewEvent renders a name input", () => {
  const app = shallow(<NewEvent />);
  expect(app.find("#name").exists()).toEqual(true);
});

test("NewEvent renders a time input", () => {
  const app = shallow(<NewEvent />);
  expect(app.find("#time").exists()).toEqual(true);

});test("NewEvent renders a description input", () => {
  const app = shallow(<NewEvent />);
  expect(app.find("#description").exists()).toEqual(true);

});test("NewEvent renders a address input", () => {
  const app = shallow(<NewEvent />);
  expect(app.find("#address").exists()).toEqual(true);
});
