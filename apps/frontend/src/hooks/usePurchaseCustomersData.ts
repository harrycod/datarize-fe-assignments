import { useQuery } from '@tanstack/react-query'
import { fetchPurchaseCustomers } from '../apis'

export const usePurchaseCustomersData = (search?: string, sortBy?: string) => {
  return useQuery({
    queryKey: ['purchaseCustomers', search, sortBy],
    queryFn: () => fetchPurchaseCustomers({ search, sortBy: sortBy === 'id' ? undefined : sortBy }),
    staleTime: 1000 * 10,
    gcTime: 1000 * 60,
    retry: 0,
  })
}
