import React, { ReactNode } from 'react'

export interface HeaderProps {
  children: ReactNode
}

export const TableHeader: React.FC<HeaderProps> = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}
