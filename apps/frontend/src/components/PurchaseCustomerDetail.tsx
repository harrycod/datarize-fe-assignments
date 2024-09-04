import styled from '@emotion/styled'

import { usePurchaseCustomerDetailsData } from '../hooks/usePurchaseCustomerDetailsData'
import Table from '../ui/table/Table'
import LoadingSpinner from '../ui/loading/LoadingSpinner'
import formatNumber from '../utils/formatNumber'

interface Props {
  selectedCustomerId: number
}

const DetailTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const ProductThumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 4px;
`

const PurchaseCustomerDetail = ({ selectedCustomerId }: Props) => {
  const { data: purchases, error, isLoading, isError } = usePurchaseCustomerDetailsData(selectedCustomerId)

  return (
    <>
      <DetailTitle>구매 상세</DetailTitle>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorContent>{`검색 결과가 없습니다(${error.message})`}</ErrorContent>}

      {purchases && (
        <Table>
          <Table.Header>
            <Table.Cell header>날짜</Table.Cell>
            <Table.Cell header>상품</Table.Cell>
            <Table.Cell header>제품 종류</Table.Cell>
            <Table.Cell header>구매 가격</Table.Cell>
            <Table.Cell header>구매 갯수</Table.Cell>
          </Table.Header>
          <Table.Body>
            {purchases?.map((purchase, index) => (
              <Table.Row key={index}>
                <Table.Cell>{purchase.date}</Table.Cell>
                <Table.Cell>
                  {purchase.imgSrc && <ProductThumbnail src={purchase.imgSrc} alt={purchase.product} />}
                </Table.Cell>
                <Table.Cell>{purchase.product}</Table.Cell>
                <Table.Cell>{formatNumber(purchase.price)}원</Table.Cell>
                <Table.Cell>{formatNumber(purchase.quantity)}개</Table.Cell>
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

export default PurchaseCustomerDetail
