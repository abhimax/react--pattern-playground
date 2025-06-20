import React, { useState, useCallback } from "react";
import type { GroupedOptions, DropdownType, SelectedItems } from "./types";

interface GroupedDropdownProps {
  options: GroupedOptions;
  type: DropdownType;
  multiSelect?: boolean;
  render: (
    isOpen: boolean,
    toggleDropdown: () => void,
    selectedItems: SelectedItems,
    toggleSelect: (item: string, group: string) => void,
    options: GroupedOptions
  ) => React.ReactNode;
}

const GroupedDropdown: React.FC<GroupedDropdownProps> = ({
  options,
  type,
  multiSelect = false,
  render,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const toggleSelect = useCallback(
    (item: string, group: string) => {
      if (type === "checkbox" || multiSelect) {
        setSelectedItems((prevSelected) => {
          const groupSelected = prevSelected[group] || [];
          if (groupSelected.includes(item)) {
            return {
              ...prevSelected,
              [group]: groupSelected.filter((selectedItem) => selectedItem !== item),
            };
          } else {
            return {
              ...prevSelected,
              [group]: [...groupSelected, item],
            };
          }
        });
      } else {
        setSelectedItems((prevSelected) => ({
          ...prevSelected,
          [group]: [item],
        }));
      }
    },
    [type, multiSelect]
  );

  return <>{render(isOpen, toggleDropdown, selectedItems, toggleSelect, options)}</>;
};

export default GroupedDropdown; 