import { useState, useEffect } from 'react'
import { usePurchaseCustomersData } from '../hooks/usePurchaseCustomersData'

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

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total Purchases</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <p>Loading...</p>}

          {isError && <p>{`검색 결과가 없습니다(${error.message})`}</p>}

          {customers?.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.count}</td>
              <td>{customer.totalAmount}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PurchaseCustomersTable
