import React from "react";
import Dropdown from "./Dropdown";

interface DropdownWrapperProps {
  options: string[];
  type: "checkbox" | "normal";
  multiSelect?: boolean;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  options,
  type,
  multiSelect = false,
}) => {
  return (
    <Dropdown
      options={options}
      type={type}
      multiSelect={multiSelect}
      render={(
        isOpen,
        toggleDropdown,
        selectedItems,
        toggleSelect,
        options
      ) => (
        <div>
          <button onClick={toggleDropdown}>
            {isOpen
              ? `Close ${type.charAt(0).toUpperCase() + type.slice(1)} Dropdown`
              : `Open ${type.charAt(0).toUpperCase() + type.slice(1)} Dropdown`}
          </button>
          {isOpen && (
            <ul>
              {options.map((option) => (
                <li key={option} onClick={() => toggleSelect(option)}>
                  {type === "checkbox" ? (
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(option)}
                        onChange={() => toggleSelect(option)}
                      />
                      {option}
                    </label>
                  ) : (
                    <span>{option}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
          <div>
            {type === "checkbox" ? (
              <p>Selected Items (Checkbox): {selectedItems.join(", ")}</p>
            ) : (
              <p>Selected Item (Normal): {selectedItems.join(", ")}</p>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default DropdownWrapper;
