import { Spinner } from '@nextui-org/react';
import React from 'react';

export default function Loading() {
  return (
    <div className="text-center mt-5">
      <Spinner
        animation="border"
        style={{
          color: '#00BF67',
          width: '100px',
          height: '100px',
        }}
      />
    </div>
  );
}
