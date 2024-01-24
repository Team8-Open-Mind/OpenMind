import { useState } from 'react';

import { useCloseModal } from './useCloseModal';

const useModal = () => {
  const [Modal, setModal] = useState(null);

  const [ModalInfo, setModalInfo] = useState({
    closeModalCallback: null,
  });

  const { isModalOpen, modalRef, toggleModal } = useCloseModal();

  const closeModal = (closeModalCallback) => {
    toggleModal();

    if (typeof closeModalCallback === 'function' && isModalOpen) closeModalCallback();
  };

  /**
   * # 모달에 대한 정보를 받아온다.
   * * `ModalComponent` 프롭은 필수. 어떤 모달을 띄울 것인지 모달 컴포넌트를 넣어준다.(필수)
   * 해당 ModalComponent는 modalRef를 prop으로 받을 수 있고 ref에 modalRef를 주입하는 모달이어야 한다.
   * 해당 ModalComponent는 closeModal이라는 prop으로 모달을 닫는 함수를 전달 받을 수 있어야 한다.
   * * `closeModalCallback`은 모달을 닫을 때 수행할 콜백 함수다.(옵션)
   * * `나머지`는 모달에 전달하고자 하는 프롭을 자유롭게 넣으면 된다.
   *
   * @example
   * ```js
   * {
   *  ModalComponent: TodoDeleteModal,
   *  closeModalCallback: doSomethingWhenCloseModal,
   *  todoId: todoId,
   *  ...
   * }
   * ```
   */
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

  /**
   * toggleAndSetModal에서 담은 ModalComponent
   */
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

    return <Modal modalRef={modalRef} closeModal={() => closeModal(ModalInfo.closeModalCallback)} {...validProps} />;
  };

  return { isModalOpen, toggleAndSetModal, ModalInfo, ModalComponent };
};

export { useModal };
