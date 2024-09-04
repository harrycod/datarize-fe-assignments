import Dashboard from './page/Dashboard'
import BasicPageContainer from './layout/BasicPageContainer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasicPageContainer>
        <Dashboard />
      </BasicPageContainer>
    </QueryClientProvider>
  )
}

export default App
