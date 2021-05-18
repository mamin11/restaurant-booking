import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Image, Typography, Space, Button, Card } from 'antd'
import Hero from './Hero'
import {Link } from 'react-router-dom'

export default function Home() {
    const row = {
        marginTop: '100px',
        marginBottom: '100px',
    };
    const title = {
        marginTop: '50px',
        marginBottom: '50px',
    };
    const homepage = {
        innerHeight: '100vh',
        // paddingBottom: '100px'
    };
    const {Title, Paragraph} = Typography;
    const { Meta } = Card;
    return (
        <div style={homepage}>
                {/* <h1>This is the home page</h1> */}
                {/* <DatePicker/> */}
                <Hero/>

                <Title style={title}>Food For You</Title>
                <Row style={row}>
                    
                    <Col span={6} push={4}>
                        <Link to="/menus/Breakfast" >
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="/imgs/m1.jpg" />}
                            >
                                <Meta title="Breakfast"  />
                            </Card>
                        </Link>
                    </Col>

                    <Col span={6} push={4}>
                        <Link to="/menus/Lunch" >
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="/imgs/m2.jpg" />}
                            >
                                <Meta title="Lunch"  />
                            </Card>
                        </Link>
                    </Col>

                    <Col span={6} push={4}>
                        <Link to="/menus/Dinner" >
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="/imgs/m3.jpg" />}
                            >
                                <Meta title="Dinner"  />
                            </Card>
                        </Link>
                    </Col>

                </Row>

                <Row style={row}>
                    <Col span={8} push={10}>
                    <Space direction="vertical">
                        <Title>We Love Food</Title>
                        <Paragraph >Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate</Paragraph>
                        <Paragraph >Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate</Paragraph>
                        <Button type="primary" style={{ background: "black", borderColor: "black" }}>Learn more</Button>
                    </Space>
                    </Col>
                    <Col span={16} pull={10}
                    >
                    <Image
                        alt="Restaurant Image"
                        width={400}
                        preview={false}
                        src="/imgs/r-1.jpg"
                        />
                    </Col>
                </Row>

                <div style={{ background: "#2d3436", height: "30vh", paddingTop: "100px" }}></div>
        </div>
    )
}
