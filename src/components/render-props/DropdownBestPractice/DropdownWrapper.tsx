import React from "react";
import Dropdown from "./Dropdown";

interface DropdownWrapperProps {
  options: string[] | { group: string; options: string[] }[];
  type: "checkbox" | "normal";
  multiSelect?: boolean;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  options,
  type,
  multiSelect = false,
}) => {
  const renderDropdown = (
    isOpen: boolean,
    toggleDropdown: () => void,
    selectedItems: { [key: string]: string[] },
    toggleSelect: (item: string, group: string) => void,
    options: string[] | { group: string; options: string[] }[]
  ) => {
    return (
      <div>
        <button onClick={toggleDropdown}>
          {isOpen
            ? `Close ${type.charAt(0).toUpperCase() + type.slice(1)} Dropdown`
            : `Open ${type.charAt(0).toUpperCase() + type.slice(1)} Dropdown`}
        </button>
        {isOpen && (
          <ul>
            {Array.isArray(options) && options.length > 0 && (
              <>
                {options.map((option, idx) => {
                  if (typeof option === "string") {
                    // For flat options (no grouping)
                    return (
                      <li
                        key={option}
                        onClick={() => toggleSelect(option, "No Group")}
                      >
                        {type === "checkbox" ? (
                          <label>
                            <input
                              type="checkbox"
                              checked={
                                selectedItems["No Group"]?.includes(option) ||
                                false
                              }
                              onChange={() => toggleSelect(option, "No Group")}
                            />
                            {option}
                          </label>
                        ) : (
                          <span>{option}</span>
                        )}
                      </li>
                    );
                  } else {
                    // For grouped options
                    return (
                      <li key={idx}>
                        <strong>{option.group}</strong>
                        <ul>
                          {option.options.map((groupOption) => (
                            <li
                              key={groupOption}
                              onClick={() =>
                                toggleSelect(groupOption, option.group)
                              }
                            >
                              {type === "checkbox" ? (
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={
                                      selectedItems[option.group]?.includes(
                                        groupOption
                                      ) || false
                                    }
                                    onChange={() =>
                                      toggleSelect(groupOption, option.group)
                                    }
                                  />
                                  {groupOption}
                                </label>
                              ) : (
                                <span>{groupOption}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                })}
              </>
            )}
          </ul>
        )}
        <div>
          {type === "checkbox" ? (
            <p>
              Selected Items (Checkbox):{" "}
              {Object.entries(selectedItems)
                .map(([group, items]) => `${group}: ${items.join(", ")}`)
                .join(" | ")}
            </p>
          ) : (
            <p>
              Selected Items (Normal):{" "}
              {Object.entries(selectedItems)
                .map(([group, items]) => `${group}: ${items.join(", ")}`)
                .join(" | ")}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <Dropdown
      options={options}
      type={type}
      multiSelect={multiSelect}
      render={renderDropdown}
    />
  );
};

export default DropdownWrapper;
