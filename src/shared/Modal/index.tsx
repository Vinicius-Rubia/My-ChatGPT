import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "../../redux/modalSlice";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as C from "./styles";

export const Modal: React.FC = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  return (
    <AlertDialog.Root open={modal.isActive}>
      <AlertDialog.Portal>
        <C.Overlay />
        <C.Content>
          <C.Title>
            <IoMdInformationCircle className={modal.type === "info" ? "text-yellow-500" : modal.type === "error" ? "text-red-500" : "text-green-500" } />
            {modal.title}
          </C.Title>
          <C.Description>{modal.message}</C.Description>
          <C.ButtonsActions>
            {/* <AlertDialog.Cancel asChild>
            <button className="Button mauve">Cancelar</button>
          </AlertDialog.Cancel> */}
            <AlertDialog.Action asChild onClick={() => dispatch(closeModal())}>
              <C.ButtonAccept>
                {modal.buttonMessage[0]}
              </C.ButtonAccept>
            </AlertDialog.Action>
          </C.ButtonsActions>
        </C.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
