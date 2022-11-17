import React from 'react';

type BtnTypes = 'button' | 'submit' | 'reset' | undefined;

type BtnDisplayTypes = 'primary' | 'secondary' | 'tertiary' | 'inline';

export declare interface ButtonProps {
  type?: BtnTypes;
  href?: string;
  children: React.ReactNode;
  displayType: BtnDisplayTypes;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  size?: string;
}

export default function Button(props: ButtonProps) {
  if (props.href) {
    return (
      <a
        className={`btn btn--${props.size || 'default'} btn--${
          props.displayType
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={`btn btn--${props.size || 'default'} btn--${
        props.displayType
      }`}
      type={props.type}
      onClick={props.onClickHandler}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
