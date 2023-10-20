import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { Select as BaseSelect } from "@mantine/core";

export type SelectRef = ElementRef<typeof BaseSelect>;
export type SelectProps = ComponentPropsWithoutRef<typeof BaseSelect>;

export const Select = forwardRef<SelectRef, SelectProps>((props, ref) => (
  <BaseSelect ref={ref} {...props} />
));

Select.displayName = "Select";
