import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavegationItems from './NavegationItems';
import NavegationItem from './NavegationItem/NavegationItem';


configure({adapter: new Adapter()});

describe('<NavegationItems/>', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<NavegationItems/>);
  });

   it('shoul render two <NavegationItem/> elements if not atuhenticated', () => {
      expect(wrapper.find(NavegationItem)).toHaveLength(2);
   });

   it('shoul render three <NavegationItem/> elements if atuhenticated', () => {
      // wrapper = shallow(<NavigationItems isAuthenticated />);
       wrapper.setProps({isAuthenticated: true});
      expect(wrapper.find(NavegationItem)).toHaveLength(3);
   });

   it('should an exact logout button', () => {
      wrapper.setProps({isAuthenticated: true});
      expect(wrapper.contains(<NavegationItem link="/logout">Logout</NavegationItem>)).toEqual(true);
   });
});


