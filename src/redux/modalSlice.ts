import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../interfaces";

const initialState: ModalState = {
  isActive: false,
  title: "",
  message: "",
  buttonMessage: [],
  type: undefined,
};

export const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(state, { payload }: { payload: ModalState }) {
      return {
        ...state,
        ...{
          isActive: true,
          title: payload.title,
          message: payload.message,
          buttonMessage: payload.buttonMessage,
          type: payload.type,
        },
      };
    },
    closeModal(state) {
      return { ...state, isActive: false };
    },
  },
});

export const { setModal, closeModal } = slice.actions;

export const selectModal = (state: any): ModalState => state.modalModel;

export default slice.reducer;
