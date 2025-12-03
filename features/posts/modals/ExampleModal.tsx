import React from 'react';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { Text } from '@/components/ui/text';

export const ExampleModal = () => {
  return (
    <BottomSheetView className="flex h-[400] flex-1 items-center justify-center">
      <Text>Awesome 🎉</Text>
    </BottomSheetView>
  );
};
