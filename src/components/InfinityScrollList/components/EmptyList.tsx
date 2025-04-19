import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

export interface EmptyListProps {
  loading: boolean;
  error: unknown;
  refetch: () => void;
  emptyMessage?: string;
  errorMessage?: string;
}
export function EmptyList({
  loading,
  error,
  refetch,
  emptyMessage = 'No hay publicaciones en su feed',
  errorMessage = 'No fue posible cargar su feed',
}: EmptyListProps) {
  let component = (
    <Text bold preset="paragraphMedium">
      {emptyMessage}
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          {errorMessage}
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
