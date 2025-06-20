import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  render: (
    isOpen: boolean,
    toggleDropdown: () => void,
    selectedItems: string[],
    toggleSelect: (item: string) => void,
    options: string[]
  ) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ options, render }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const toggleSelect = (item: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((selectedItem) => selectedItem !== item)
        : [...prevSelected, item]
    );
  };

  return (
    <>{render(isOpen, toggleDropdown, selectedItems, toggleSelect, options)}</>
  );
};

export default Dropdown;
