import React from 'react';
import ReactDOM from 'react-dom';
import EditEvent from '../components/EditEvent';
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Jumbotron } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

test("EditEvent form renders without an error", () => {
  const app = shallow(<EditEvent />);
  expect(app.find("Form").exists()).toBe(true);
});

test("EditEvent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditEvent />, div);
});

test("EditEvent renders a date input", () => {
  const app = shallow(<EditEvent />);
  expect(app.find("#date").exists()).toEqual(true);
});

test("EditEvent renders a name input", () => {
  const app = shallow(<EditEvent />);
  expect(app.find("#name").exists()).toEqual(true);
});

test("EditEvent renders a time input", () => {
  const app = shallow(<EditEvent />);
  expect(app.find("#time").exists()).toEqual(true);

});test("EditEvent renders a description input", () => {
  const app = shallow(<EditEvent />);
  expect(app.find("#description").exists()).toEqual(true);

});test("EditEvent renders a address input", () => {
  const app = shallow(<EditEvent />);
  expect(app.find("#address").exists()).toEqual(true);
});
