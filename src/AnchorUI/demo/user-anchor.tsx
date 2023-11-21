import React from 'react';
import { AnchorUI } from 'sic-ui';
export default () => (
  <div style={{ display: 'flex' }}>
    <AnchorUI />
    <div style={{ flex: 1 }}>
      <div style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
      <div style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
      <div style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
    </div>
  </div>
);
