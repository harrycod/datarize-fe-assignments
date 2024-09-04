import { useState } from 'react'
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

const PurchaseFrequencyChart = () => {
  const defaultFromDate = '2024-07-01'
  const defaultToDate = '2024-07-31'
  const [fromDate, setFromDate] = useState<string>(defaultFromDate)
  const [toDate, setToDate] = useState<string>(defaultToDate)

  const { data, error, isLoading, isError } = usePurchaseFrequencyData(fromDate, toDate)

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="date"
          value={fromDate}
          min={defaultFromDate}
          max={toDate}
          onChange={(e) => setFromDate(e.target.value)}
          placeholder="시작 날짜 선택"
        />
        <input
          type="date"
          value={toDate}
          min={fromDate}
          max={defaultToDate}
          onChange={(e) => setToDate(e.target.value)}
          placeholder="종료 날짜 선택"
        />
      </div>

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
    </div>
  )
}

export default PurchaseFrequencyChart
