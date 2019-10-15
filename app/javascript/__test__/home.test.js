import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Jumbotron } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() });

test("Home page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});

test('The Jumbotron contains a company message', () => {
  const app = shallow(<Home />);
  expect(app.find("#jumbotron-message").text()).toEqual("Get Down brings energy and liveliness to the general public by connecting them through events in real time.");
});

test("The Jumbotron contains team info", () => {
  const app = shallow(<Home />);
  expect(app.find("#card-group").exists()).toBe(true);
});
