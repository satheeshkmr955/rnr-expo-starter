import tw from 'twrnc';
import { ComponentType } from 'react';

import { ExampleModal } from '@/features/posts/modals/ExampleModal';
import { BottomSheetModalProps } from '@/components/ui/modal';

export const MODAL_TYPE = {
  EXAMPLE_MODAL: 'EXAMPLE_MODAL',
};

export type ModalRegistryEntry = {
  ModalComponent: ComponentType<any>;
  defaultModalProps: Partial<BottomSheetModalProps>;
};

export const modalRegistry: Record<string, ModalRegistryEntry> = {
  [MODAL_TYPE.EXAMPLE_MODAL]: {
    ModalComponent: ExampleModal,
    defaultModalProps: {
      backgroundStyle: tw`bg-red-400`,
      height: '50%',
    },
  },
};
