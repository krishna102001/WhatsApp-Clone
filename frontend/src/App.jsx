import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
