import React, { useState } from "react";

interface DropdownProps {
  options: string[] | { group: string; options: string[] }[];
  type: "checkbox" | "normal"; // Type to decide whether to render a checkbox list or normal list
  multiSelect?: boolean; // For enabling/disabling multi-select in normal dropdown
  render: (
    isOpen: boolean,
    toggleDropdown: () => void,
    selectedItems: { [key: string]: string[] },
    toggleSelect: (item: string, group: string) => void,
    options: string[] | { group: string; options: string[] }[]
  ) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  type,
  multiSelect = false,
  render,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // selectedItems is now an object where each key is the group name and the value is an array of selected items in that group
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: string[];
  }>({});

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const toggleSelect = (item: string, group: string) => {
    // If it's a checkbox dropdown, allow multiple selections for each group
    if (type === "checkbox") {
      setSelectedItems((prevSelected) => {
        const groupSelected = prevSelected[group] || [];
        if (groupSelected.includes(item)) {
          return {
            ...prevSelected,
            [group]: groupSelected.filter(
              (selectedItem) => selectedItem !== item
            ),
          };
        } else {
          return {
            ...prevSelected,
            [group]: [...groupSelected, item],
          };
        }
      });
    } else {
      // For normal dropdown, allow single selection (or multi-select depending on the multiSelect prop)
      if (multiSelect) {
        setSelectedItems((prevSelected) => {
          const groupSelected = prevSelected[group] || [];
          if (groupSelected.includes(item)) {
            return {
              ...prevSelected,
              [group]: groupSelected.filter(
                (selectedItem) => selectedItem !== item
              ),
            };
          } else {
            return {
              ...prevSelected,
              [group]: [...groupSelected, item],
            };
          }
        });
      } else {
        // Only one selection per group
        setSelectedItems((prevSelected) => ({
          ...prevSelected,
          [group]: [item],
        }));
      }
    }
  };

  return (
    <>{render(isOpen, toggleDropdown, selectedItems, toggleSelect, options)}</>
  );
};

export default Dropdown;
