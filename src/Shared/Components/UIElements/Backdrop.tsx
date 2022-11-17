import React from 'react';
import ReactDOM from 'react-dom';

// type BackdropProps = {
//   onClick: (event: React.MouseEvent<any>) => void;
// };

export default function Backdrop() {
  const content = <div className='backdrop' role='presentation'></div>;

  return ReactDOM.createPortal(
    content,
    document.getElementById('backdrop-hook') as HTMLElement
  );
}
