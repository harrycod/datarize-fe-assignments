// 기본 API_URL, 포트 등 수정 가능
export const BASE_API_URL = 'http://localhost:4000'
export interface ApiError extends Error {
  status: number
  message: string
}

const fetchData = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(`${BASE_API_URL}${endpoint}`, options)

  if (!response.ok) {
    const errorData: { error: string } = await response.json()

    const error = new Error(errorData.error || 'Unknown error') as ApiError
    error.status = response.status

    throw error
  }
  return await response.json()
}

export interface PurchaseFrequency {
  range: string
  count: number
}

// 가격대별 구매빈도 데이터
export const fetchPurchaseFrequency = async ({ from, to }: { from?: string; to?: string }) => {
  const params = new URLSearchParams()

  if (from && to) {
    params.append('from', from)
    params.append('to', to)
  }

  const response = await fetchData<PurchaseFrequency[]>(`/api/purchase-frequency?${params.toString()}`)

  return response
}

export interface PurchaseCustomer {
  count: number
  totalAmount: number
  id: number
  name: string
}

// 고객 목록 데이터
export const fetchPurchaseCustomers = async ({ search, sortBy }: { search?: string; sortBy?: string }) => {
  const params = new URLSearchParams()

  if (search) params.append('name', search)
  if (sortBy) params.append('sortBy', sortBy)

  const response = await fetchData<PurchaseCustomer[]>(`/api/customers?${params.toString()}`)

  return response
}

export interface PurchaseCustomerDetail {
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}

// 고객 세부 데이터
export const fetchPurchaseCustomerDetails = async ({ customerId }: { customerId: number }) => {
  const response = await fetchData<PurchaseCustomerDetail[]>(`/api/customers/${customerId}/purchases/`)

  return response
}
