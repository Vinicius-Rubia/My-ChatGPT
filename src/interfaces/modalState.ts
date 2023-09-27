export interface ModalState {
  isActive: boolean;
  title: string;
  message: string;
  buttonMessage: Array<string>;
  type: "success" | "error" | "info" | undefined;
}