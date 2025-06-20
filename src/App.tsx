//import "./App.css";
import MouseTracker from "./components/render-props/MouseTracker";
// import withAuth from "./components/hoc/withAuth";
// import { TextInput } from "./components/controlled-components/TextInput";
// import { useState } from "react";

// const Dashboard = () => {
//   return <div>Welcome to the Dashboard!</div>;
// };

// const ProtectedDashboard = withAuth(Dashboard);

function App() {
  // const [text, setText] = useState("");
  return (
    <div>
      <h1>React Design Patterns Demo</h1>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            Mouse Position: ({x}, {y})
          </p>
        )}
      />
      {/* Protected Route (HOC) */}
      {/* <ProtectedDashboard /> */}

      {/* Controlled Component */}
      {/* <TextInput value={text} onChange={(e) => setText(e.target.value)} /> */}
    </div>
  );
}

export default App;
