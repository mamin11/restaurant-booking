import axios from 'axios'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {setMenus} from '../../app/actions/menuActions'
import { Row, Col, Card } from 'antd';
const {Meta} = Card

const MenuList = () => {
    const menus = useSelector(state => state.menus.menus)
    const dispatch = useDispatch()
    
    const fetchMenus = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log(err)
        })
        dispatch(setMenus(response.data))
    }

    useEffect(() => {
        fetchMenus()
    }, [])

    console.log(menus)

    const row = {
        margin: '50px',
    };


    const menuListRender = menus.map((menu) => {
        return (
            <Col className="gutter-row" span={6} key={menu.id}>
                <Link to={`/menu/${menu.id}`}>
                    <Card
                            // loading={true}
                            hoverable
                            style={{ width: 300, margin: '20px' }}
                            cover={<img alt="example" src={"/imgs/m1.jpg"} />}
                        >
                            <Meta title={menu.title}
                            // description={menu.description}
                            />
                            <h3>£{menu.price}</h3>
                    </Card>
                </Link>
            </Col>
        );
    })

    return (
        <div >
            <Row gutter={16} style={row}>
                {menuListRender}
            </Row>
        </div>
    )
}

export default MenuList