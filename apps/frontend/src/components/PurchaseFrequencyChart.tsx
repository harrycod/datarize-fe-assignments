import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { usePurchaseFrequencyData } from '../hooks/usePurchaseFrequencyData'
import formatNumber from '../utils/formatNumber'

import LoadingSpinner from '../ui/loading/LoadingSpinner'
import styled from '@emotion/styled'

const legendFormatter = (key: string) => {
  return key === 'count' ? '구매 횟수' : key
}

const tooltipFormatter = (value: number, key: string) => {
  if (key === 'count') {
    return [`${formatNumber(value)}건`, '구매 횟수']
  }
  return [value, key]
}

interface Props {
  fromDate: string
  toDate: string
}

const PurchaseFrequencyChart = ({ fromDate, toDate }: Props) => {
  const { data, error, isLoading, isError } = usePurchaseFrequencyData(fromDate, toDate)

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorContent>Error loading data: {error.message}</ErrorContent>}

      {data && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" tickFormatter={(value) => formatNumber(value) + '원'} />
            <YAxis />
            <Tooltip formatter={tooltipFormatter} labelFormatter={(value) => formatNumber(value) + '원'} />
            <Legend formatter={legendFormatter} />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  font-size: 1.4rem;
`
export default PurchaseFrequencyChart
