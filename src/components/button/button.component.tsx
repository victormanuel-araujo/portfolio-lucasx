import type { ButtonProps } from "./button.types";
import "./button.css";

export const Button = (props: ButtonProps) => {
  return (
    <div role="button" className="button-component" onClick={props.onClick}>
      <span className="text-white button-text">{props.children}</span>
    </div>
  );
};
