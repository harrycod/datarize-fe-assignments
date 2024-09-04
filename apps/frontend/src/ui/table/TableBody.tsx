import React, { ReactNode } from 'react'

export interface BodyProps {
  children: ReactNode
}

export const TableBody: React.FC<BodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>
}
