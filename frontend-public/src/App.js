import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { AppRoutes } from "./routes";
import HubSpotChat from "./components/HubSpotChat";
import ScrollToTopAndTrack from "./components/common/ScrollToTopAndTrack";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <ScrollToTopAndTrack />
        <HubSpotChat />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
