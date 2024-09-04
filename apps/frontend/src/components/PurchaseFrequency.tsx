import { useState } from 'react'
import styled from '@emotion/styled'

import PurchaseFrequencyFilter from './PurchaseFrequencyFilter'
import PurchaseFrequencyChart from './PurchaseFrequencyChart'

const PurchaseFrequency = () => {
  const defaultFromDate = '2024-07-01'
  const defaultToDate = '2024-07-31'
  const [fromDate, setFromDate] = useState<string>(defaultFromDate)
  const [toDate, setToDate] = useState<string>(defaultToDate)

  return (
    <div>
      <PurchaseFrequencyTitle>가격대별 구매 빈도</PurchaseFrequencyTitle>
      <PurchaseFrequencyFilter
        defaultFromDate={defaultFromDate}
        defaultToDate={defaultToDate}
        fromDate={fromDate}
        toDate={toDate}
        onChangeFromDate={setFromDate}
        onChangeToDate={setToDate}
      />

      <PurchaseFrequencyChart fromDate={fromDate} toDate={toDate} />
    </div>
  )
}

const PurchaseFrequencyTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 20px;
`

export default PurchaseFrequency
