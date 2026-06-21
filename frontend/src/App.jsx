import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <WhatsAppButton />
    </>
  );
}

export default App;