import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'

import Select from '../ui/select/Select'

interface Props {
  sortBy: string
  onSearchChange: (value: string) => void
  onSortChange: (value: string) => void
}

const PurchaseCustomersFilter = ({ sortBy, onSearchChange, onSortChange }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value)
  }

  // 디바운스 구현
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(searchTerm)
    }, 300)

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm, onSearchChange])

  return (
    <div>
      <input type="text" placeholder="고객 이름 검색" value={searchTerm} onChange={handleSearchChange} />
      <Select value={sortBy} onChange={handleSortChange}>
        <Select.Option value="id">기본 정렬(ID)</Select.Option>
        <Select.Option value="desc">구매가격 높은 순</Select.Option>
        <Select.Option value="asc">구매가격 낮은 순</Select.Option>
      </Select>
    </div>
  )
}

export default PurchaseCustomersFilter
