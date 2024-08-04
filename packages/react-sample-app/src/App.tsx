import { MyComponent } from "@workspace/react";
import { defineCustomElements } from "@workspace/stencil/loader";

defineCustomElements();

function App() {
  return (
    <>
      <MyComponent first="Your" last="Name" />
    </>
  );
}

export default App;
