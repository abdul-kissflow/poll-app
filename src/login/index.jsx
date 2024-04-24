import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './style.css';

export function Login() {
  return (
    <div className='signInWrapper'>
      <Button shape='round' icon={<GoogleOutlined />} size={'large'}>
        Sign in with google
      </Button>
    </div>
  );
}
