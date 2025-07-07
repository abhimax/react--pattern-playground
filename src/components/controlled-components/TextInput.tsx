import React from "react";

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};
