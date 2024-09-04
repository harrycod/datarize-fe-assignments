import Dashboard from './page/Dashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard></Dashboard>
    </QueryClientProvider>
  )
}

export default App
