import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { usePurchaseFrequencyData } from '../hooks/usePurchaseFrequencyData'

const legendFormatter = (key: string) => {
  return key === 'count' ? '구매횟수' : key
}

const tooltipFormatter = (value: number, key: string) => {
  if (key === 'count') {
    return [`${value}건`, '구매횟수']
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
      {isLoading && <p>Loading data...</p>}
      {isError && <p>Error loading data: {error.message}</p>}

      {data && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" tickFormatter={(value) => value + '원'} />
            <YAxis />
            <Tooltip formatter={tooltipFormatter} labelFormatter={() => ''} />
            <Legend formatter={legendFormatter} />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

export default PurchaseFrequencyChart
