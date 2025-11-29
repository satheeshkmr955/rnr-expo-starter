import { useModalStore } from '@/store/useModalStore';
import { modalRegistry } from '@/lib/modalRegistry';
import { BottomSheetModal } from '@/components/ui/modal';

export const GlobalModalWrapper = () => {
  const { modals } = useModalStore((state) => state);

  return (
    <>
      {modals.map((obj, index) => {
        const { modalId = '', modalType = '', modalProps = {} } = obj || {};

        const ModalComponent = modalRegistry[modalType];

        if (!ModalComponent) return null;

        return (
          <BottomSheetModal
            {...modalProps}
            key={modalId}
            id={modalId}
            modalType={modalType}
            modalId={modalId}>
            <ModalComponent
              {...modalProps}
              key={modalId}
              id={modalId}
              modalType={modalType}
              modalId={modalId}
            />
          </BottomSheetModal>
        );
      })}
    </>
  );
};
