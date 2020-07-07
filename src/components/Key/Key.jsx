import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ keyAction, keyType, keyValue }) => (
  <div className={`key-container ${keyType}`}>
    <p className="key-value">
      {keyValue}
    </p>
  </div>
);

export default Key;