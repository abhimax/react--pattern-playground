//import "./App.css";
import Counter from "./components/render-props/Counter";
import Dropdown from "./components/render-props/DropdownBasic/Dropdown";
import MouseTracker from "./components/render-props/MouseTracker";
import Toggle from "./components/render-props/Toggle";
// import withAuth from "./components/hoc/withAuth";
// import { TextInput } from "./components/controlled-components/TextInput";
// import { useState } from "react";

// const Dashboard = () => {
//   return <div>Welcome to the Dashboard!</div>;
// };

// const ProtectedDashboard = withAuth(Dashboard);

function App() {
  // const [text, setText] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <div>
      <h1>React Design Patterns Demo</h1>
      <h3>Render Prop Example</h3>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            Mouse Position: ({x}, {y})
          </p>
        )}
      />

      <Toggle
        render={(isToggled, toggle) => (
          <div>
            <p>The toggle is {isToggled ? "ON" : "OFF"}</p>
            <button onClick={toggle}>Toggle</button>
          </div>
        )}
      />

      <Counter
        render={(count, increment, decrement) => (
          <div>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        )}
      />

      <div>
        <h1>Render Prop Example: Two Dropdowns</h1>

        {/* Checkbox Dropdown */}
        <Dropdown
          options={options}
          type="checkbox"
          render={(
            isOpen,
            toggleDropdown,
            selectedItems,
            toggleSelect,
            options
          ) => (
            <div>
              <button onClick={toggleDropdown}>
                {isOpen ? "Close Checkbox Dropdown" : "Open Checkbox Dropdown"}
              </button>
              {isOpen && (
                <ul>
                  {options.map((option) => (
                    <li key={option}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(option)}
                          onChange={() => toggleSelect(option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
              <div>
                <p>Selected Items (Checkbox): {selectedItems.join(", ")}</p>
              </div>
            </div>
          )}
        />

        {/* Normal Dropdown with MultiSelect Enabled */}
        <Dropdown
          options={options}
          type="normal"
          multiSelect={true} // Enable multiSelect
          render={(
            isOpen,
            toggleDropdown,
            selectedItems,
            toggleSelect,
            options
          ) => (
            <div>
              <button onClick={toggleDropdown}>
                {isOpen ? "Close Normal Dropdown" : "Open Normal Dropdown"}
              </button>
              {isOpen && (
                <ul>
                  {options.map((option) => (
                    <li key={option} onClick={() => toggleSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <div>
                <p>
                  Selected Items (Normal, MultiSelect):{" "}
                  {selectedItems.join(", ")}
                </p>
              </div>
            </div>
          )}
        />

        {/* Normal Dropdown without MultiSelect */}
        <Dropdown
          options={options}
          type="normal"
          multiSelect={false} // Disable multiSelect
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
                  ? "Close Normal Dropdown (Single)"
                  : "Open Normal Dropdown (Single)"}
              </button>
              {isOpen && (
                <ul>
                  {options.map((option) => (
                    <li key={option} onClick={() => toggleSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <div>
                <p>Selected Item (Normal, Single): {selectedItems[0]}</p>
              </div>
            </div>
          )}
        />
      </div>
      {/* Protected Route (HOC) */}
      {/* <ProtectedDashboard /> */}

      {/* Controlled Component */}
      {/* <TextInput value={text} onChange={(e) => setText(e.target.value)} /> */}
    </div>
  );
}

export default App;
