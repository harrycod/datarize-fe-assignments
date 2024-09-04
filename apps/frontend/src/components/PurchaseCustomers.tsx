import { useState } from 'react'

import PurchaseCustomersFilter from './PurchaseCustomersFilter'
import PurcahseCustomersTable from './PurcahseCustomersTable'

const PurchaseCustomersTable = () => {
  const [search, setSearch] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('id')

  return (
    <div>
      <h3>구매 고객 목록</h3>
      <PurchaseCustomersFilter sortBy={sortBy} onSearchChange={setSearch} onSortChange={setSortBy} />
      <PurcahseCustomersTable search={search} sortBy={sortBy} />
    </div>
  )
}

export default PurchaseCustomersTable
