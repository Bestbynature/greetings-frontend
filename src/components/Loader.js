import React from 'react';

const Loader = () => (
  <div className="d-flex align-items-center">
    <strong role="status">Loading...</strong>
    <div className="spinner-border ms-auto text-primary" aria-hidden="true" />
  </div>
);

export default Loader;
