import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}
export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      No hay publicaciones 😢
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          No fue posible cargar el feed 😖
        </Text>
        <Button preset="outline" onPress={refetch} title="Reintentar" />
      </>
    );
  }
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
