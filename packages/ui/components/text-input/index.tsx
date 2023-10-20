import { TextInput as BaseTextInput } from "@mantine/core";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

export type TextInputRef = ElementRef<typeof BaseTextInput>;
export type TextInputProps = ComponentPropsWithoutRef<typeof BaseTextInput>;

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (props, ref) => <BaseTextInput ref={ref} {...props} />
);

TextInput.displayName = "TextInput";
