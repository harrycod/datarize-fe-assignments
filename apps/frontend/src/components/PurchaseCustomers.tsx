import { useState } from 'react'
import { usePurchaseCustomersData } from '../hooks/usePurchaseCustomersData'
import Table from '../ui/table/Table'
import PurchaseCustomersFilter from './PurchaseCustomersFilter'
import formatNumber from '../utils/formatNumber'

const PurchaseCustomersTable = () => {
  const [search, setSearch] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('id')

  const { data: customers, error, isLoading, isError } = usePurchaseCustomersData(search, sortBy)

  return (
    <div>
      <h3>구매 고객 목록</h3>
      <PurchaseCustomersFilter sortBy={sortBy} onSearchChange={setSearch} onSortChange={setSortBy} />

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
