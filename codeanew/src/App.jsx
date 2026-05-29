import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import { AppRoutes } from "./routes";
import ScrollToTopAndTrack from "./components/common/ScrollToTopAndTrack";

function App() {
	return (
		<>
			<Toaster position="top-right" richColors />
			<BrowserRouter
				future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true,
				}}
			>
				<ScrollToTopAndTrack />
				<AppRoutes />
			</BrowserRouter>
		</>
	);
}

export default App;
