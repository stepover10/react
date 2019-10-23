import * as React from 'react';

type props = {
  type: string; // yellow
  children: any;
}

const Button = (props:props|any):JSX.Element => {
  return (
    <button { ...props}>
      {props.children}
    </button>
  )
};

export default Button;
