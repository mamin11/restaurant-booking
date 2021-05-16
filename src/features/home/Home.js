import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Image, Typography, Space, Button, Card } from 'antd'
import Hero from './Hero'

export default function Home() {
    const row = {
        marginTop: '50px',
    };
    const {Title, Paragraph} = Typography;
    const { Meta } = Card;
    return (
        <div>
                {/* <h1>This is the home page</h1> */}
                {/* <DatePicker/> */}
                <Hero/>

                <Row style={row}>
                    <Col span={6} push={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col>
                    <Col span={6} push={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col>
                    <Col span={6} push={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col>
                </Row>

                <Row style={row}>
                    <Col span={8} push={10}>
                    <Space direction="vertical">
                        <Title>Restaurant Heading</Title>
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
                        <Button type="primary">Learn more</Button>
                    </Space>
                    </Col>
                    <Col span={16} pull={10}
                    >
                    <Image
                        alt="Restaurant Image"
                        width={400}
                        src="/imgs/r-1.jpg"
                        />
                    </Col>
                </Row>
        </div>
    )
}
