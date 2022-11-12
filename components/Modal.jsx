import React from "react";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  Header,
  Heading,
} from "./Modal.Elements.jsx";

const Modal = ({ showModal, setShowModal, children, heading, ...props }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            <Header>
              <Heading>{heading}</Heading>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </Header>
            <ModalContent>{children}</ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
