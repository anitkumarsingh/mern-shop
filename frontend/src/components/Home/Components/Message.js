import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  console.log('asd', children);
  return (
    <div className="mt-3">
      <Alert variant={variant}>{children}</Alert>
    </div>
  );
};

Message.defaultProps = {
  variant: 'info'
};
export default Message;
