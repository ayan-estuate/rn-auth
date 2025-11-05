import { Input } from '@/components/ui/Input';
import React from 'react';
import { Controller } from 'react-hook-form';

export function EmailField({ control, name = 'email' }: any) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Input
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          placeholder="you@example.com"
        />
      )}
    />
  );
}
