import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

//const tabs = [
//{ id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//{ id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//{ id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
//];

export const TabsPage = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>;
      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab">
            <NavLink
              to="#/"
              end
              className={({ isActive }) => {
                return classNames({ 'is-active': isActive });
              }}
            >
              Tab 1
            </NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="#/" end>
              Tab 2
            </NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="#/" end>
              Tab 3
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    </>
  );
};
