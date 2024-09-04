import { useState, useEffect } from 'react'
import { usePurchaseCustomersData } from '../hooks/usePurchaseCustomersData'
import Table from '../ui/table/Table'
import formatNumber from '../utils/formatNumber'

const PurchaseCustomersTable = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('id')

  const { data: customers, error, isLoading, isError } = usePurchaseCustomersData(search, sortBy)

  // 디바운스 구현
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchTerm)
    }, 300)

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm])

  return (
    <div>
      <h3>구매 고객 목록</h3>
      <div>
        <input
          type="text"
          placeholder="고객 이름 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p>정렬 방법</p>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="id">기본 정렬(ID)</option>
          <option value="desc">구매가격 높은 순</option>
          <option value="asc">구매가격 낮은 순</option>
        </select>
      </div>

      <Table>
        <Table.Header>
          <Table.Cell header>ID</Table.Cell>
          <Table.Cell header>이름</Table.Cell>
          <Table.Cell header>총 구매 횟수</Table.Cell>
          <Table.Cell header>총 구매 액수</Table.Cell>
        </Table.Header>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{`검색 결과가 없습니다(${error.message})`}</p>}
        <Table.Body>
          {customers?.map((customer) => (
            <Table.Row key={customer.id}>
              <Table.Cell>{customer.id}</Table.Cell>
              <Table.Cell>{customer.name}</Table.Cell>
              <Table.Cell>{formatNumber(customer.totalAmount)}회</Table.Cell>
              <Table.Cell>{formatNumber(customer.totalAmount)}원</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default PurchaseCustomersTable
