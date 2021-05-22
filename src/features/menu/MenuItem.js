import axios from 'axios'
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {selectedMenu, removeSelectedMenu} from '../../app/actions/menuActions'
import { Row, Col, Layout, Image, Typography, Space, } from 'antd'

const {Title, Paragraph} = Typography

const MenuItem = () => {
    const {id} = useParams()

    const menuItem = useSelector(state => state.menus.menuItem)
    const dispatch = useDispatch()
    
    const fetchMenuItem = async () => {
        const response = await axios
        .get(`https://restaurant-amin.herokuapp.com/api/menus/${id}`)
        .catch((err) => {
            console.log(err)
        })
        dispatch(selectedMenu(response.data))
    }

    useEffect(() => {
        // if(id && id !== "") {}
        fetchMenuItem()
        // return () => {
        //     dispatch(removeSelectedMenu());
        // };
    }, [id])

    console.log('selected item: ', menuItem)

    const row = {
        margin: '50px',
        height: '80vh',
    };

    return (
        <div >
            <Layout>
                <Row style={row}>
                        <Col span={10}>
                            <Image
                                width={'100%'}
                                preview={false}
                                src={menuItem.image}
                            />
                        </Col>

                        <Col span={12} style={{margin: '0 auto', textAlign: 'left'}}>
                            <Space direction="vertical">
                                <Title>Title: {menuItem.title}</Title>
                                <h3>Price: £{menuItem.price}</h3>
                                <h3>Description:</h3>
                                <Paragraph>{menuItem.description}</Paragraph>
                            </Space>
                        </Col>
                </Row>
            </Layout>
        </div>
    )
}

export default MenuItem