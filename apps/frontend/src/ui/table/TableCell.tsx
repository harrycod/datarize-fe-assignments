import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

export interface CellProps {
  header?: boolean
  children: ReactNode
}

export const TableCell: React.FC<CellProps> = ({ header = false, children }) => {
  // header가 true일 때 <th>로 렌더링
  if (header) {
    return <StyledThead>{children}</StyledThead>
  }
  return <StyledTData>{children}</StyledTData>
}

const StyledThead = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 1.4rem;
`

const StyledTData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  font-size: 1.2rem;
`
