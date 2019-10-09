import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Renders a LEARN welcome', ()=>{
  const app = mount(<Home logged_in={true} sign_in_route="/" sign_out_route="/" />)
  expect(app.find('#jumbotron-message').text()).toEqual('THIS IS OUR CAROUSEL')
})
