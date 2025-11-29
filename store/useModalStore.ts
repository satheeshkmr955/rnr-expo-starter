import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface DefaultModalProps {
  modalId: string;
}

export interface OpenModal {
  modalType: string;
  modalProps: any;
}

export interface Modal extends OpenModal, DefaultModalProps {}

export interface ModalState {
  modals: Modal[];
}

interface ModalActions {
  openModal: (modal: OpenModal) => void;
  closeModal: (modalId: string) => void;
  closeAllModals: () => void;
}

type ModalStore = ModalState & ModalActions;

const initialState: ModalState = {
  modals: [],
};

export const useModalStore = create<ModalStore>()(
  devtools(
    immer((set) => ({
      ...initialState,

      openModal(modal) {
        set((state) => {
          state.modals.push({ ...modal, modalId: Date.now().toString() });
        });
      },

      closeModal(modalId) {
        set((state) => {
          state.modals = state.modals.filter((obj) => obj.modalId !== modalId);
        });
      },

      closeAllModals() {
        set((state) => {
          state.modals = [];
        });
      },
    }))
  )
);
