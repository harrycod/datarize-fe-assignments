import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 32px;
  width: 80%;
  max-width: 800px;
  position: relative;
`

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    document.body,
  )
}

export default Modal
