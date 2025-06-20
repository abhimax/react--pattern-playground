import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  type: "checkbox" | "normal"; // Type to decide whether to render a checkbox list or normal list
  multiSelect?: boolean; // For enabling/disabling multi-select in normal dropdown
  render: (
    isOpen: boolean,
    toggleDropdown: () => void,
    selectedItems: string[],
    toggleSelect: (item: string) => void,
    options: string[]
  ) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  type,
  multiSelect = false,
  render,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const toggleSelect = (item: string) => {
    if (type === "checkbox") {
      // For checkbox dropdown, allow multiple selections
      setSelectedItems((prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((selectedItem) => selectedItem !== item)
          : [...prevSelected, item]
      );
    } else {
      // For normal dropdown
      if (multiSelect) {
        // If multiSelect is true, allow multiple selections
        setSelectedItems((prevSelected) =>
          prevSelected.includes(item)
            ? prevSelected.filter((selectedItem) => selectedItem !== item)
            : [...prevSelected, item]
        );
      } else {
        // If multiSelect is false, allow only one selection
        setSelectedItems([item]);
      }
    }
  };

  return (
    <>{render(isOpen, toggleDropdown, selectedItems, toggleSelect, options)}</>
  );
};

export default Dropdown;
