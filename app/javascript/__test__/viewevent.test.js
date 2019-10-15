import React from 'react';
import ReactDOM from 'react-dom';
import ViewEvent from '../components/ViewEvent';
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Jumbotron } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

// test("ViewEvent form renders without an error", () => {
//   const app = shallow(<ViewEvent />);
//   expect(app.find("Form").exists()).toBe(true);
// });
//
// test("ViewEvent renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<ViewEvent />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
//
// test('ViewEvent contains three h1 Headers', () => {
//   const app = shallow(<ViewEvent />);
//   expect(app.find("h1").at(0).text()).toEqual("View Event");
//   expect(app.find("h1").at(1).text()).toEqual("Attendees");
//   expect(app.find("h1").at(2).text()).toEqual("Discussion");
// });
//
// test("ViewEvent renders a date", () => {
//   const app = shallow(<ViewEvent />);
//   expect(app.find("#date").exists()).toEqual(true);
// });
//
// test("ViewEvent renders a name", () => {
//   const app = shallow(<ViewEvent />);
//   expect(app.find("#name").exists()).toEqual(true);
// });
//
// test("ViewEvent renders a time", () => {
//   const app = shallow(<ViewEvent />);
//   expect(app.find("#time").exists()).toEqual(true);
//
// });test("ViewEvent renders a description", () => {
//   const app = shallow(<ViewEvent />);
//   expect(app.find("#description").exists()).toEqual(true);
//
// });test("ViewEvent renders a address", () => {
//   const app = shallow(<ViewEvent />);
//   expect(app.find("#address").exists()).toEqual(true);
// });
