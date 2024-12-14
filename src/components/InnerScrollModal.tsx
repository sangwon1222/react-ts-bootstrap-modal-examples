import React from "react";
import { INNER_SCROLL_MODAL_ID, SCROLL_CONTENT } from "../constants/modal.ts";
import { useModal } from "../hooks/useModal.ts";
import { Modal } from "../Modal.tsx";

export const InnerScrollModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section aria-labelledby="inner-scroll-modal-title">
        <h2 id="inner-scroll-modal-title">내부 스크롤</h2>
        <p>
          <code>.modal-inner-scroll</code>
          <code>isInnerScroll= true</code>
          모달 내부에서 콘텐츠 길이에 따라 스크롤할 수 있습니다.
          <code>default: false</code>
        </p>

        <div className="modal-btn-wrap">
          <button
            onClick={() => openModal()}
            aria-expanded={isOpen}
            aria-controls={INNER_SCROLL_MODAL_ID}
          >
            모달 실행
          </button>
        </div>
      </section>

      {isOpen && (
        <Modal
          id={INNER_SCROLL_MODAL_ID}
          onClose={closeModal}
          onSuccess={openModal}
          contents={SCROLL_CONTENT}
          isInnerScroll={true}
        />
      )}
    </>
  );
};
