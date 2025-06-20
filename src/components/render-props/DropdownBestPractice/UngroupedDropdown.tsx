import React, { useState, useCallback } from "react";
import type { UngroupedOptions, DropdownType, SelectedItems } from "./types";

interface UngroupedDropdownProps {
  options: UngroupedOptions;
  type: DropdownType;
  multiSelect?: boolean;
  render: (
    isOpen: boolean,
    toggleDropdown: () => void,
    selectedItems: SelectedItems,
    toggleSelect: (item: string, group: string) => void,
    options: UngroupedOptions
  ) => React.ReactNode;
}

const UngroupedDropdown: React.FC<UngroupedDropdownProps> = ({
  options,
  type,
  multiSelect = false,
  render,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const toggleSelect = useCallback(
    (item: string) => {
      if (type === "checkbox" || multiSelect) {
        setSelectedItems((prevSelected) => {
          const groupSelected = prevSelected["No Group"] || [];
          if (groupSelected.includes(item)) {
            return {
              ...prevSelected,
              ["No Group"]: groupSelected.filter((selectedItem) => selectedItem !== item),
            };
          } else {
            return {
              ...prevSelected,
              ["No Group"]: [...groupSelected, item],
            };
          }
        });
      } else {
        setSelectedItems({ "No Group": [item] });
      }
    },
    [type, multiSelect]
  );

  return <>{render(isOpen, toggleDropdown, selectedItems, toggleSelect, options)}</>;
};

export default UngroupedDropdown; 