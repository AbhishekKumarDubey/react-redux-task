import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';

type ModalProps = {
  show: boolean;
  // className: string;
  headerClass: string;
  header: string;
  contentClass?: string;
  children: React.ReactNode;
  modalClass: string;
  // onSubmitHandler: (event: React.SyntheticEvent) => void;
  onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ModalOverlay = (props: ModalProps) => {
  const content = (
    <div className={`modal ${props.modalClass}`}>
      <header className='modal__header'>
        <h2 className={`${props.headerClass}`}>{props.header}</h2>
        <button className='btn--close-modal' onClick={props.onCancel}>
          &times;
        </button>
      </header>
      <div className={`modal__content ${props.contentClass}`}>
        {props.children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-hook') as HTMLElement
  );
};

export default function Modal(props: ModalProps) {
  // const returnElement = props.show && <ModalOverlay {...props} />;
  // return returnElement;
  return (
    <>
      {props.show && (
        <>
          <Backdrop />
          <ModalOverlay {...props} />
        </>
      )}
    </>
  );
}
