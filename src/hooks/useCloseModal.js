import { useEffect, useRef } from 'react';

import { useToggle } from './useToggle';

/**
 * modalRef가 걸려있는 드롭다운, 모달 이외의 영역을 클릭했을 때 닫는 용도
 * 자기자신이 아닌 다른 드롭다운, 모달을 클릭했을 때도 닫는다.
 */
const useCloseModal = () => {
  const [isModalOpen, toggleModal] = useToggle();

  /**
   * 모달이나 드롭다운의 최상위 태그의 ref에 걸어줘야 한다.
   * ---> 각 modal이나 dropdown은 modalRef로 prop을 받아서 해당 모달이나 드롭다운의 최상위 태그 ref에 주입시켜야 한다.
   */
  const modalRef = useRef(null);

  useEffect(() => {
    /**
     *
     * @param {MouseEvent} e
     */
    const closeModal = (e) => {
      if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 닫아라.(예를 들어 검정 뒷 배경이나 다른 노드를 클릭했을 때)
        toggleModal();
      }
    };

    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isModalOpen, toggleModal]);

  return { isModalOpen, modalRef, toggleModal };
};

export { useCloseModal };
