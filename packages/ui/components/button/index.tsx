import { Button as BaseButton } from "@mantine/core";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

export type ButtonRef = ElementRef<typeof BaseButton>;
export type ButtonProps<T = "button"> = ComponentPropsWithoutRef<
  typeof BaseButton<T>
>;

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => (
  <BaseButton ref={ref} {...props} />
));

Button.displayName = "Button";
