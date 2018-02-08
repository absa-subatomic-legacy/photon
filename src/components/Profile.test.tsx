import * as React from 'react';
import { shallow } from "enzyme";
import Profile from './Profile';

describe('A Profile', function() {
  it('renders the correct text when no enthusiasm level is given', () => {
    const hello = shallow(<Profile name="Daniel" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });

  it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = shallow(<Profile name="Daniel" enthusiasmLevel={1}/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
  });

  it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = shallow(<Profile name="Daniel" enthusiasmLevel={5} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
  });

  it('throws when the enthusiasm level is 0', () => {
    expect(() => {
      shallow(<Profile name="Daniel" enthusiasmLevel={0} />);
    }).toThrow();
  });

  it('throws when the enthusiasm level is negative', () => {
    expect(() => {
      shallow(<Profile name="Daniel" enthusiasmLevel={-1} />);
    }).toThrow();
  });
});