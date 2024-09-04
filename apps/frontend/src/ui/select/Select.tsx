import React, { ReactNode } from 'react'

import type { OptionProps } from './Option'
import { Option } from './Option'

// SelectProps 인터페이스 정의
interface SelectProps {
  children: ReactNode // 자식 요소로 Option을 받음
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void // 선택 변경 시 호출되는 핸들러
  value?: string // 현재 선택된 값
}

// Select 컴포넌트 정의
const Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> } = ({ children, onChange, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <select value={value} onChange={handleChange}>
      {children}
    </select>
  )
}

// Select 컴포넌트에 Option을 하위 컴포넌트로 추가
Select.Option = Option

export default Select
