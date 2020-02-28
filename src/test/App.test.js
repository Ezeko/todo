import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import App from '../App';
import InputField from '../InputField';
import Todos from '../Todos';
const wrapper = shallow(<App />);



describe('App Component', () => {
  it('it should render InputField component', () => {
    expect(wrapper.find(<InputField />)).toBeTruthy()
  });

  it('it should render Todos component', () => {
    expect(wrapper.find(<Todos />)).toBeTruthy();
  });

  it('should render Add task in the documents', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Add task/i);
    expect(linkElement).toBeInTheDocument();
  });
});

