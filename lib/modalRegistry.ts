import { ExampleModal } from '@/features/posts/modals/ExampleModal';

export const MODAL_TYPE = {
  EXAMPLE_MODAL: 'EXAMPLE_MODAL',
};

export const modalRegistry = {
  [MODAL_TYPE.EXAMPLE_MODAL]: ExampleModal,
};
