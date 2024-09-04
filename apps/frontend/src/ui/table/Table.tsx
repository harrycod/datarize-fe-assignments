import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import type { HeaderProps } from './TableHeader'
import type { BodyProps } from './TableBody'
import type { RowProps } from './TableRow'
import type { CellProps } from './TableCell'

import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'

interface TableProps {
  children: ReactNode
}

const Table: React.FC<TableProps> & {
  Header: React.FC<HeaderProps>
  Body: React.FC<BodyProps>
  Row: React.FC<RowProps>
  Cell: React.FC<CellProps>
} = ({ children }) => {
  return <StyledTable>{children}</StyledTable>
}
const StyledTable = styled.table`
  width: 100%;
`

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell

export default Table
