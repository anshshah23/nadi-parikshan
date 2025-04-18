import React from 'react';

const MapSection = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1u4U0wvXr9uKcwOpRxVVMbz5ftH6WVDI&ehbc=2E312F&noprof=1"
        width="100%"
        height="480"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Doctors Map"
      ></iframe>
    </div>
  );
};

export default MapSection;
