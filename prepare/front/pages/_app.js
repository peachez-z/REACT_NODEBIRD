import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head'

const NodeBird = ({Component}) => {
  return(
    <>
    {/* Head 변경하기 */}
    <Head>
      <meta charset="utf-8"/>
      <title>Home</title>
    </Head>
    
    <Component />
    </>
    
  )
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird;