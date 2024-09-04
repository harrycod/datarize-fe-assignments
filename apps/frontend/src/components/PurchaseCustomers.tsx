import { useState } from 'react'
import styled from '@emotion/styled'

import PurchaseCustomersFilter from './PurchaseCustomersFilter'
import PurcahseCustomersTable from './PurcahseCustomersTable'
import PurchaseCustomerDetail from './PurchaseCustomerDetail'
import Modal from '../ui/modal/Modal'

const PurchaseCustomersTable = () => {
  const [search, setSearch] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('id')
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null)

  return (
    <div>
      <PurchaseCustomerTitle>구매 고객 목록</PurchaseCustomerTitle>
      <PurchaseCustomersFilter sortBy={sortBy} onSearchChange={setSearch} onSortChange={setSortBy} />
      <PurcahseCustomersTable search={search} sortBy={sortBy} onSelectCustomer={setSelectedCustomerId} />

      {selectedCustomerId && (
        <Modal onClose={() => setSelectedCustomerId(null)}>
          <PurchaseCustomerDetail selectedCustomerId={selectedCustomerId} />
        </Modal>
      )}
    </div>
  )
}

const PurchaseCustomerTitle = styled.h3`
  font-size: 2.4rem;
  margin: 20px 0;
`

export default PurchaseCustomersTable
