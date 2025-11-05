import { Input } from '@/components/ui/Input';
import React from 'react';
import { Controller } from 'react-hook-form';

export function PasswordField({
  control,
  name = 'password',
  label = 'Password',
}: any) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Input
          label={label}
          secureTextEntry
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          placeholder="••••••••"
        />
      )}
    />
  );
}
