import React, { useRef } from 'react';
import {Row, Input, Button, message , Progress } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import "./style.css";

export function Response() {
  return (
    <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
      <div className='responseWrapper'>
        <h2>Poll created Successfully !</h2>
        <div className='linkHolder'>
          <ReadOnlyCopy value='https://ant.design/' />
        </div>
      </div>
    </Row>
  );
}

function ReadOnlyCopy({ value }){
  const inputRef = useRef(null);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      message.success('Copied to clipboard');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input readOnly value={value} ref={inputRef} />
      <Button icon={<CopyOutlined />} onClick={handleCopy} />
    </div>
  );
};


