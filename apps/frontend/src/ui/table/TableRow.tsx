import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

export interface RowProps {
  onClick?: () => void
  children: ReactNode
}

export const TableRow: React.FC<RowProps> = ({ onClick, children }) => {
  const StyledTRow = styled.tr`
    cursor: ${onClick && 'pointer'};
  `

  return <StyledTRow onClick={onClick}>{children}</StyledTRow>
}
