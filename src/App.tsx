import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routing from "./routes/Routing";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  );
}

export default App;
