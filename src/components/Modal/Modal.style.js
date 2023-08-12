import styled,{ keyframes } from 'styled-components';

export const ModalContainer = styled.div`
max-width: calc(100vw - 48px);
max-height: calc(100vh - 24px);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const ModalLoader = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite; 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 60px;
  background: none;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;