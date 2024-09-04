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
