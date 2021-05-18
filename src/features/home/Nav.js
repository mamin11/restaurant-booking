import React from 'react'
import {Link } from 'react-router-dom'
import { Menu } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

export default function Nav() {
    const state = {
        theme: 'dark',
        current: '1',
    };

    return (
        <div>
            <Menu
                theme={state.theme}
                selectedKeys={[state.current]}
                mode="horizontal"
            >
                <SubMenu key="logo" icon={<ShopOutlined />} title="THEONEAMIN"></SubMenu>
                <Menu.Item style={{float: 'right'}} key="about"><Link to="/about" >About</Link></Menu.Item>
                <Menu.Item style={{float: 'right'}} key="booking"><Link to="/booking" >Booking</Link></Menu.Item>
                <SubMenu style={{float: 'right'}} key="foodmenu" title="Food Menu">
                <Menu.Item key="breakfast"><Link to="/menus/Breakfast" >Breakfast</Link></Menu.Item>
                <Menu.Item key="lunch"><Link to="/menus/Lunch" >Lunch</Link></Menu.Item>
                <Menu.Item key="dinner"><Link to="/menus/Dinner" >Dinner</Link></Menu.Item>
                </SubMenu>
                <Menu.Item style={{float: 'right'}} key="home"><Link to="/" >Home</Link></Menu.Item>
            </Menu>
        </div>
    )
}
