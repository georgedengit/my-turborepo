import {
  Modal as BaseModal,
  ModalProps as BaseModalProps,
} from "@mantine/core";
import { forwardRef } from "react";

export type ModalProps = BaseModalProps;

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => (
  <BaseModal ref={ref} {...props} />
));

Modal.displayName = "Modal";
