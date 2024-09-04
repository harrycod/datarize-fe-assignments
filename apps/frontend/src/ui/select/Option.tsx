// OptionProps 인터페이스 정의
export interface OptionProps {
  value: string // 옵션의 값
  children: React.ReactNode // 옵션의 텍스트
}

// Option 컴포넌트 정의
export const Option: React.FC<OptionProps> = ({ value, children }) => {
  return <option value={value}>{children}</option>
}
