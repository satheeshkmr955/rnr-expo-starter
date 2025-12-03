import { useModalStore } from '@/store/useModalStore';
import { modalRegistry } from '@/lib/modalRegistry';
import { BottomSheetModal } from '@/components/ui/modal';

export const GlobalModalWrapper = () => {
  const { modals } = useModalStore((state) => state);

  return (
    <>
      {modals.map((obj) => {
        const { modalId = '', modalType = '', modalProps = {} } = obj || {};

        const { ModalComponent = null, defaultModalProps = {} } = modalRegistry[modalType] || {};

        const combinedModalProps = {
          ...defaultModalProps,
          ...modalProps,
        };

        if (!ModalComponent) return null;

        return (
          <BottomSheetModal
            {...combinedModalProps}
            key={modalId}
            id={modalId}
            modalType={modalType}
            modalId={modalId}>
            <ModalComponent
              {...combinedModalProps}
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
