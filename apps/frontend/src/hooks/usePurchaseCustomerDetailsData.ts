import { useQuery } from '@tanstack/react-query'
import { fetchPurchaseCustomerDetails } from '../apis'

export const usePurchaseCustomerDetailsData = (customerId: number) => {
  return useQuery({
    queryKey: ['purchaseCustomerDetails', customerId],
    queryFn: () => fetchPurchaseCustomerDetails({ customerId }),
    staleTime: 1000 * 10,
    gcTime: 1000 * 60,
    retry: 0,
  })
}
