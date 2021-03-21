import React, { useState } from "react";
import { Theme } from "src/lib";
import styled from "styled-components";
import { IModalContent } from "../AppDataContext";

import Modal from "../Modal";

interface IProps {
  modal: IModalContent[];
}

const Image = styled.img`
  padding: 1rem 2rem;
  background: #ccc;
  margin-bottom: 2rem;
`;

const SeeMore = styled.div`
  color: ${Theme.primary};
  font-family: ${Theme.heroFont};
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  letter-spacing: -2px;
  display: block;
  text-align: right;
`;

const Title = styled.div`
  color: ${Theme.primary};
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`;

const Description = styled.div`
  font-size: 1.5rem;
  font-family: ${Theme.fontFamily1};
  text-align: center;
  margin: 2rem 0;
`;

const CareerModal: React.FC<IProps> = ({ modal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const seeMoreClicked = () => {
    setModalVisible((value) => !value);
  };
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <div>
        <SeeMore onClick={seeMoreClicked}>See More</SeeMore>
      </div>
      <Modal isOpen={modalVisible} close={closeModal}>
        {modal.map((modalContent, index) => (
          <div key={modalContent.title}>
            {index !== 0 && (
              <>
                <br />
                <hr />
                <br />
              </>
            )}
            <Title>{modalContent.title}</Title>
            <Image
              src={require(`../../images/works/${modalContent.img}.png`)}
              alt={modalContent.description}
            />
            <Description>{modalContent.description}</Description>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default CareerModal;
