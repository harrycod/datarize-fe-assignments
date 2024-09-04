import styled from '@emotion/styled'

import { usePurchaseCustomersData } from '../hooks/usePurchaseCustomersData'
import Table from '../ui/table/Table'
import LoadingSpinner from '../ui/loading/LoadingSpinner'
import formatNumber from '../utils/formatNumber'

interface Props {
  search: string
  sortBy: string
  onSelectCustomer: (id: number) => void
}

const PurchaseCustomersTable = ({ search, sortBy, onSelectCustomer }: Props) => {
  const { data: customers, error, isLoading, isError } = usePurchaseCustomersData(search, sortBy)

  const handleSelectCustomer = (id: number) => {
    onSelectCustomer(id)
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorContent>{`검색 결과가 없습니다(${error.message})`}</ErrorContent>}

      {customers && (
        <Table>
          <Table.Header>
            <Table.Cell header>ID</Table.Cell>
            <Table.Cell header>이름</Table.Cell>
            <Table.Cell header>총 구매 횟수</Table.Cell>
            <Table.Cell header>총 구매 액수</Table.Cell>
          </Table.Header>

          <Table.Body>
            {customers.map((customer) => (
              <Table.Row key={customer.id} onClick={() => handleSelectCustomer(customer.id)}>
                <Table.Cell>{customer.id}</Table.Cell>
                <Table.Cell>{customer.name}</Table.Cell>
                <Table.Cell>{formatNumber(customer.count)}회</Table.Cell>
                <Table.Cell>{formatNumber(customer.totalAmount)}원</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
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

export default PurchaseCustomersTable
