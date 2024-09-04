import styled from '@emotion/styled'

interface Props {
  width?: string
  height?: string
}

const LoadingSpinner = ({ width = '100%', height = '400px' }: Props) => {
  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
  `

  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  )
}

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export default LoadingSpinner
