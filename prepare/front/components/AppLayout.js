import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd'
import "antd/dist/antd.css"
import UserProfile from '../components/LoginForm'
import LoginForm   from "../components/LoginForm"
import styled from 'styled-components'


const SearchInput = styled(Input.Search)`
  vertical-align : middle;
`

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(isLoggedIn)
  }, [isLoggedIn])
  useEffect(() => {
    if (isLoggedIn) {
      console.log('일단 바뀜')
    }
  }, [isLoggedIn])
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
            <Link href="/"><a>홈</a></Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile"><a>프로필</a></Link>
          </Menu.Item>
          <Menu.Item>
            <SearchInput enterButton/>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
          </Menu.Item>
       </Menu>
       {/* 컬럼간의 패딩 넣기 다합치면 8px */}
       <Row gutter={8}>
        {/* 25%  xs : 모바일 md : 모니터 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        {/* 50% */}
        <Col xs={24} md={12}>
        {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://peach-hzz.tistory.com/" target="_blank"
          rel="noreferre nopener noreferrer">Made by Peach</a>
        </Col>
       </Row>

    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout