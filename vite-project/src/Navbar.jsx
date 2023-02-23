import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
const Navbar = () => {
    const items = [
        {
            key: 1,
            label: <Link to={"/homepage"}><p style={{ cursor: "pointer", border: "1px solid black", padding: "20px", backgroundColor: " #FF4500" }}>HomePage</p></Link>
        },
        {
            key: 2,
            label: <Link to={"/categories"}><p style={{ cursor: "pointer", border: "1px solid black", padding: "20px", backgroundColor: " #FF4500" }}>Categories</p></Link>
        },
        {
            key: 3,
            label: <Link to={"/contacts"}><p style={{ cursor: "pointer", border: "1px solid black", padding: "20px", backgroundColor: " #FF4500" }}>Contacts</p></Link>
        },
        {
            key: 3,
            label: <Link to={"/ourblogs"}><p style={{ cursor: "pointer", border: "1px solid black", padding: "20px", backgroundColor: " #FF4500" }}>Our Blogs</p></Link>
        },
    ]

    return (
        <div style={{ marginLeft: "500px" }} >
            <Header >
                <div className="logo" />
                <Menu
                    mode="horizontal"
                    items={items}
                />
            </Header>
            <Link />
        </div>
    )
}

export default Navbar