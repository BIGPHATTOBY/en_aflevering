import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'

/**
 * Note : 
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead. 
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

class Top extends Component {

    render() {
        return (
            <Menu stackable>
                <Menu.Item>
                    <img src='https://react.semantic-ui.com/logo.png' />
                </Menu.Item>

                <Menu.Item
                    name='Assignments'
                    active={true}
                >
                    Assignments
            </Menu.Item>

                <Menu.Item
                    name='Classes'
                    active={false}
                >
                    Schema
            </Menu.Item>

                <Menu.Item
                    name='sign-in'
                    active={false}
                >
                    University
            </Menu.Item>
                <Menu.Item
                    name='sign-in'
                    active={false}
                >
                    Event Board
            </Menu.Item>
                <Menu.Item
                    position='right'
                    name='log out'
                    active={false}
                >
                    Sign out
            </Menu.Item>
            </Menu>
        );
    }
}


export default Top;
