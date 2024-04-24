import React from 'react';
import { CheckOutlined } from '@ant-design/icons';

import './style.css';

export function ThankYou() {
  return (
    <div className='thanksPage'>
      {/* {<Poll readonly={true} />} */}
      <div className='thanksMsg'>
        <CheckOutlined style={{ color: '#24b663' }} />
        <h3>Thank you for submitting !</h3>
      </div>
    </div>
  );
}
