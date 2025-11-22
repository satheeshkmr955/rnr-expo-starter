import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CircleCheckIcon, InfoIcon, OctagonXIcon, TriangleAlertIcon } from 'lucide-react-native';

import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';

import type { ToastConfigParams } from 'toastify-react-native/utils/interfaces';

export const ToastSuccess = (props: ToastConfigParams) => {
  const { text1 = null } = props;

  return (
    <Card className="relative py-0">
      <CardContent className="overflow-hidden rounded-md px-0">
        <LinearGradient
          colors={['#86efac', '#dcfce7', '#86efac']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-md">
          <View className="flex flex-row items-center rounded-md border border-green-500 p-3">
            <CircleCheckIcon className="size-4" />
            <Text className="ml-2 p-1 text-primary" variant="small">
              {text1}
            </Text>
          </View>
        </LinearGradient>
      </CardContent>
    </Card>
  );
};

export const ToastInfo = (props: ToastConfigParams) => {
  const { text1 = null } = props;

  return (
    <Card className="relative py-0">
      <CardContent className="overflow-hidden rounded-md px-0">
        <LinearGradient
          colors={['#93c5fd', '#dbeafe', '#93c5fd']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-md">
          <View className="flex flex-row items-center rounded-md border border-blue-500 p-3">
            <InfoIcon className="size-4" />
            <Text className="ml-2 p-1 text-primary" variant="small">
              {text1}
            </Text>
          </View>
        </LinearGradient>
      </CardContent>
    </Card>
  );
};

export const ToastWarn = (props: ToastConfigParams) => {
  const { text1 = null } = props;

  return (
    <Card className="relative py-0">
      <CardContent className="overflow-hidden rounded-md px-0">
        <LinearGradient
          colors={['#fcd34d', '#fef3c7', '#fcd34d']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-md">
          <View className="flex flex-row items-center rounded-md border border-amber-500 p-3">
            <TriangleAlertIcon className="size-4" />
            <Text className="ml-2 p-1 text-primary" variant="small">
              {text1}
            </Text>
          </View>
        </LinearGradient>
      </CardContent>
    </Card>
  );
};

export const ToastError = (props: ToastConfigParams) => {
  const { text1 = null } = props;

  return (
    <Card className="relative py-0">
      <CardContent className="overflow-hidden rounded-md px-0">
        <LinearGradient
          colors={['#fca5a5', '#fee2e2', '#fca5a5']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-md">
          <View className="flex flex-row items-center rounded-md border border-red-500 p-3">
            <OctagonXIcon className="size-4" />
            <Text className="ml-2 p-1 text-primary" variant="small">
              {text1}
            </Text>
          </View>
        </LinearGradient>
      </CardContent>
    </Card>
  );
};
