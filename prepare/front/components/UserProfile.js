import React, { useCallback } from 'react';
import {Avatar, Card, Button} from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction} from '../reducers'
const UserProfile = () => {
  const dispatch = useDispatch()
  console.log(setIsLoggedIn)
  
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  })
  return(
    <Card actions={[
      <div key="twit">짹쨱<br/>0</div>,
      <div key="followings">팔로잉<br/>0</div>,
      <div key="followers">팔로워<br/>0</div>

    ]}>
      <Card.Meta title={"Autumn"} Avatar={<Avatar>AT</Avatar>} />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile;