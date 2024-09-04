import styled from '@emotion/styled'

interface Props {
  defaultFromDate: string
  defaultToDate: string
  fromDate: string
  toDate: string
  onChangeFromDate: (date: string) => void
  onChangeToDate: (date: string) => void
}

const PurchaseFrequencyFilter = ({
  defaultFromDate,
  defaultToDate,
  fromDate,
  toDate,
  onChangeFromDate,
  onChangeToDate,
}: Props) => {
  return (
    <FilterWrapper>
      <input
        type="date"
        value={fromDate}
        min={defaultFromDate}
        max={toDate}
        onChange={(e) => e.target.value && onChangeFromDate(e.target.value)}
        placeholder="시작 날짜 선택"
      />
      <div>~</div>
      <input
        type="date"
        value={toDate}
        min={fromDate}
        max={defaultToDate}
        onChange={(e) => e.target.value && onChangeToDate(e.target.value)}
        placeholder="종료 날짜 선택"
      />
    </FilterWrapper>
  )
}

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 12px;
  font-size: 1.2rem;
  margin-bottom: 8px;
`

export default PurchaseFrequencyFilter
