import React, { useCallback, useEffect, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { XIcon } from 'lucide-react-native';
import { BottomSheetModal as DefaultBottomSheetModal } from '@gorhom/bottom-sheet';

import { useModalStore } from '@/store/useModalStore';

import type { BottomSheetModalProps as DefaultBottomSheetModalProps } from '@gorhom/bottom-sheet';

const emptyFunc = () => {};

export interface BottomSheetModalProps extends DefaultBottomSheetModalProps {
  modalId: string;
  height?: string;
}

export const BottomSheetModal = (props: BottomSheetModalProps) => {
  const { modalId = '', height = '75%' } = props;

  const { closeModal } = useModalStore((state) => state);

  const bottomSheetModalRef = useRef<DefaultBottomSheetModal>(null);

  useEffect(() => {
    if (bottomSheetModalRef.current) {
      openModalHandler();
    }
  }, [bottomSheetModalRef.current]);

  const openModalHandler = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onChangeHandler = useCallback((index: number) => {
    if (index === -1) {
      closeModal(modalId);
    }
  }, []);

  const closeModalHandler = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <DefaultBottomSheetModal
      onChange={onChangeHandler}
      snapPoints={[height]}
      index={0}
      enablePanDownToClose={true}
      stackBehavior="push"
      backgroundStyle={tw`bg-red-400`}
      handleComponent={() => <Handle closeModal={closeModalHandler} />}
      {...props}
      ref={bottomSheetModalRef}>
      {props.children}
    </DefaultBottomSheetModal>
  );
};

type HandleProps = {
  closeModal: () => void;
};

export const Handle = (props: HandleProps) => {
  const { closeModal = emptyFunc } = props;

  return (
    <>
      <TouchableOpacity onPress={() => closeModal()}>
        <View className="absolute right-2 top-[-15] z-10 rounded-full border border-gray-200 bg-primary-foreground p-1">
          <XIcon width={22} height={22} style={tw`bg-primary`} />
        </View>
      </TouchableOpacity>
      <View className="h-6 w-full items-center justify-center">
        <View className="mt-2 h-[5] w-[31] rounded-full bg-gray-700"></View>
      </View>
    </>
  );
};
