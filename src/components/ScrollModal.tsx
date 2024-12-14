import React from "react";
import { SCROLL_CONTENT, SCROLL_MODAL_ID } from "../constants/modal.ts";
import { useModal } from "../hooks/useModal.ts";
import { Modal } from "../Modal.tsx";

export const ScrollModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section aria-labelledby="scroll-modal-title">
        <h2 id="scroll-modal-title">뷰포트보다 긴 콘텐츠 스크롤</h2>
        <p>
          <code>.modal-scroll</code>
          뷰포트보다 긴 콘텐츠 길이에 따라 스크롤할 수 있습니다.
        </p>
        <p>
          <code>isScroll= true</code>
          뷰포트보다 긴 콘텐츠 길이에 따라 스크롤할 수 있습니다.
          <code>default: false</code>
        </p>

        <div className="modal-btn-wrap">
          <button
            onClick={() => openModal()}
            aria-expanded={isOpen}
            aria-controls={SCROLL_MODAL_ID}
          >
            모달 실행
          </button>
        </div>
      </section>

      {isOpen && (
        <Modal
          id={SCROLL_MODAL_ID}
          onClose={closeModal}
          onSuccess={openModal}
          contents={SCROLL_CONTENT}
          isScroll={true}
        />
      )}
    </>
  );
};
