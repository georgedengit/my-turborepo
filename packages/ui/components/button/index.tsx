import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  ...other
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
};

Button.displayName = "Button";
