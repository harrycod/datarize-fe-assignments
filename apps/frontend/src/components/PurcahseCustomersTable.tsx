import { usePurchaseCustomersData } from '../hooks/usePurchaseCustomersData'
import Table from '../ui/table/Table'
import formatNumber from '../utils/formatNumber'

const PurchaseCustomersTable = ({ search, sortBy }: { search: string; sortBy: string }) => {
  const { data: customers, error, isLoading, isError } = usePurchaseCustomersData(search, sortBy)

  return (
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
  )
}

export default PurchaseCustomersTable
