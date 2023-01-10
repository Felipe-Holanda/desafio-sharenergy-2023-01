import MakeRoutes from "./routes";
import { ContextUser } from "./context";

function App() {
  return (
    <>
      <ContextUser>
        <MakeRoutes></MakeRoutes>
      </ContextUser>
    </>
  );
}

export default App;
