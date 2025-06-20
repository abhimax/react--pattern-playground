// Types for Dropdown options and selection

export type UngroupedOptions = string[];

export interface GroupedOption {
  group: string;
  options: string[];
}

export type GroupedOptions = GroupedOption[];

export type DropdownOptions = UngroupedOptions | GroupedOptions;

export type DropdownType = "checkbox" | "normal";

export type SelectedItems = {
  [key: string]: string[];
}; 