import React, { ReactNode } from 'react'

export interface RowProps {
  onClick?: () => void
  children: ReactNode
}

export const TableRow: React.FC<RowProps> = ({ onClick, children }) => {
  return <tr onClick={onClick}>{children}</tr>
}
