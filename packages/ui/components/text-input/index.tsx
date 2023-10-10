import { TextInput as BaseTextInput } from "@mantine/core";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export type TextInputRef = ElementRef<typeof BaseTextInput>;
export type TextInputProps = ComponentPropsWithoutRef<typeof BaseTextInput>;

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (props, ref) => <BaseTextInput ref={ref} {...props} />,
);

TextInput.displayName = "TextInput";
