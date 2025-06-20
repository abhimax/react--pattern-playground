import React from "react";
import type { DropdownOptions, DropdownType, SelectedItems, GroupedOptions, UngroupedOptions } from "./types";
import GroupedDropdown from "./GroupedDropdown";
import UngroupedDropdown from "./UngroupedDropdown";

interface DropdownProps {
  options: DropdownOptions;
  type: DropdownType;
  multiSelect?: boolean;
  render: (
    isOpen: boolean,
    toggleDropdown: () => void,
    selectedItems: SelectedItems,
    toggleSelect: (item: string, group: string) => void,
    options: DropdownOptions
  ) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  type,
  multiSelect = false,
  render,
}) => {
  if (Array.isArray(options) && options.length > 0 && typeof options[0] === "object" && "group" in options[0]) {
    // Grouped options
    return (
      <GroupedDropdown
        options={options as GroupedOptions}
        type={type}
        multiSelect={multiSelect}
        render={render as any}
      />
    );
  } else {
    // Ungrouped options
    return (
      <UngroupedDropdown
        options={options as UngroupedOptions}
        type={type}
        multiSelect={multiSelect}
        render={render as any}
      />
    );
  }
};

export default Dropdown;
