import React, { useCallback, useState} from "react";
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import useInput from '../components/hooks/useInput'

// 계속 리렌더링 되기 때문에 이렇게 따로 빼는게 좋음 / 성능 문제
const ButtonWrapper = styled.div`
  margin-top:10px;`
// 둘 중 하나 골라쓰면 된다
// const style = useMemo(() => ({marginTop:10}), []);

const FormWrapper = styled(Form)`
padding:10px`

const LoginForm = ({setIsLoggedIn}) => {
  // 커스텀 훅으로 중복 제거
  const [id, onChangeId] = useInput('');
  const [password, onChangepassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log({
      id, password,
    });
    setIsLoggedIn(true)
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user_id">아이디</label>
        <br />
        <Input name="user_id" value={id} 
        onChange={onChangeId} required/>
      </div>

      <div>
      <label htmlFor="user_password">비밀번호</label>
        <br />
        <Input name="user_password" value={password} 
        onChange={onChangepassword} required/>
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" 
          loading={false}>로그인</Button>
        <Link href="/signup"><a>회원가입</a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}

LoginForm.propTypes ={
  setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm;