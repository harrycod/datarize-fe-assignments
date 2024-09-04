import { useQuery } from '@tanstack/react-query'
import { fetchPurchaseFrequency } from '../apis'

export const usePurchaseFrequencyData = (fromDate: string, toDate: string) => {
  return useQuery({
    queryKey: ['purchaseFrequency', fromDate, toDate],
    queryFn: () => fetchPurchaseFrequency({ from: fromDate, to: toDate }),
    enabled: !!fromDate && !!toDate,
    staleTime: 1000 * 10,
    gcTime: 1000 * 60,
  })
}
