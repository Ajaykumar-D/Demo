import React, { Component } from 'react'
import Cart from './Cart'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="pull-left">My App</div>
                <div className="pull-right"><Cart /></div>
            </div>
        )
    }
}
/*
const Header = () => {
    return (
        <div>
            Header
        </div>
    )
}
export default Header;
*/
