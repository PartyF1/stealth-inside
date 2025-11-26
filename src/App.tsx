import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./app/providers/AuthProvider";
import { router } from "./app/router/router";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
