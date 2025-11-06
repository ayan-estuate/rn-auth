import { Input } from '@/components/ui/Input';
import React from 'react';
import { Controller } from 'react-hook-form';

export function NameField({ control, name = 'name' }: any) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Input
          label="Name"
          keyboardType="default"
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          placeholder="John Doe."
        />
      )}
    />
  );
}
