import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";
import Profile from './Profile';

// Snapshot for a Profile React Component
describe('A Snapshot of Profile Component', () => {
  it('capturing Snapshot of Profile', () => {
      const renderedValue = renderer.create(<Profile name="Daniel" />).toJSON();
      expect(renderedValue).toMatchSnapshot();
  });
});

describe('A Shallow Render of Profile Component', function() {
  // tslint:disable-next-line: no-any
  let wrapper: ShallowWrapper<any, any>;
  const mockCallBack = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Profile name="Daniel" forkProject={mockCallBack}/>);
  });

  it('renders the correct text when name is given', () => {
    const greeting = wrapper.find('.greeting');
    expect(greeting).toBeDefined();
    expect(greeting.length).toEqual(1);
    expect(greeting.text()).toEqual('Hello! My name is Daniel. My name was passed in through a route param!');
  });

  it('renders the button', () => {
    const button = wrapper.find('button');
    expect(button).toBeDefined();
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Fork the Project');
  });

  it('doesn\'t calls the output if it was not specified when click on button', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack.mock.calls[0][0]).toEqual('https://github.com/absa-subatomic/photon');
  });
});