import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  border-radius: 10px;
  overflow: hidden;
  max-height: calc(100% - 8rem);
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 0;
`;

export const Heading = styled.div`
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  min-width: 30rem;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
  color: #000;
  font-weight: bold;
  position: relative;
  z-index: 10;
  height: 5rem;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  overflow-y: scroll;
  width: 100%;
  max-height: calc(100vh - 125px);
  line-height: 1.8;
  color: #141414;
  padding: 2rem;

  // custom scrollbar
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  background: black;
  color: #fff;
  border: 2px solid #fff;
  outline: 2px solid hsla(200, 95%, 14%, 1);
  border-radius: 10px;
`;
