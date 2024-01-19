import { useState } from 'react';

import { useToggle } from './useToggle';

const useModal = () => {
  const [Modal, setModal] = useState(null);

  const [ModalInfo, setModalInfo] = useState({
    closeModalCallback: null,
  });

  const [isModalOpen, toggleModal] = useToggle();

  const closeModal = (closeModalCallback) => {
    toggleModal();

    if (typeof closeModalCallback === 'function' && isModalOpen) closeModalCallback();
  };

  const toggleAndSetModal = ({ closeModalCallback, ModalComponent, ...rest }) => {
    toggleModal();
    setModalInfo(() => {
      if (!isModalOpen) {
        return {
          closeModalCallback,
          ...rest,
        };
      }

      return {
        closeModalCallback: null,
      };
    });
    setModal(() => {
      if (!isModalOpen) return ModalComponent;

      return null;
    });
  };

  const ModalComponent = (directProps) => {
    const validProps = {};

    Object.keys(ModalInfo).forEach((key) => {
      if (ModalInfo[key]) validProps[key] = ModalInfo[key];
    });

    // directProps override ModalInfo
    if (directProps && typeof directProps === 'object') {
      Object.keys(directProps).forEach((k) => {
        validProps[k] = directProps[k];
      });
    }

    if (!Modal) throw new Error('ModalComponent property should be passed to toggleAndSetModal function');

    return <Modal closeModal={() => closeModal(ModalInfo.closeModalCallback)} {...validProps} />;
  };

  return { isModalOpen, toggleAndSetModal, ModalInfo, ModalComponent };
};

export { useModal };
