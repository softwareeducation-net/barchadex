import React from 'react';
import { Typography } from 'antd';
import FloatingElement from '../layout/FloatingElement';

const { Paragraph } = Typography;

export default function Index() {
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 20 }}>
      <Typography>
        <Paragraph style={{ color: 'rgba(255,255,255,0.5)' }}>
          Welcome to Barcha Trade
        </Paragraph>
      </Typography>
    </FloatingElement>
  );
}


