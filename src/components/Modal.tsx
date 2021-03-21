import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn, pulse } from "react-animations";
import OutsideClickHandler from "react-outside-click-handler";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${keyframes`${fadeIn}`} 250ms;
`;

const Content = styled.div`
  position: relative;
  max-width: calc(100vw - 5rem);
  width: 1200px;
  height: 800px;
  max-height: calc(100vh - 5rem);
  margin: auto;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  overflow: auto;
  animation: ${keyframes`${pulse}`} 350ms;
  z-index: 9999;
`;

interface IProps {
  isOpen: boolean;
  close: VoidFunction;
}

const Modal: React.FC<IProps> = ({ isOpen, close, children }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <OutsideClickHandler onOutsideClick={close}>
        <Content>{children}</Content>
      </OutsideClickHandler>
    </Overlay>
  );
};

export default Modal;
