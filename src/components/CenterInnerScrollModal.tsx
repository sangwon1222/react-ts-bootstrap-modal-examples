import React from "react";
import { CENTER_INNER_MODAL_ID, SCROLL_CONTENT } from "../constants/modal.ts";
import { useModal } from "../hooks/useModal.ts";
import { Modal } from "../Modal.tsx";

export const CenterInnerScrollModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section aria-labelledby="layout-center-title">
        <h2 id="layout-center-title">레이아웃 수직 중앙 / 내부 스크롤 모달</h2>
        <p>
          <code>.modal-centered</code>
          레이아웃을 수직 중앙에 배치합니다.
        </p>
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
            aria-controls={CENTER_INNER_MODAL_ID}
          >
            모달 실행
          </button>
        </div>
      </section>

      {isOpen && (
        <Modal
          id={CENTER_INNER_MODAL_ID}
          onClose={closeModal}
          onSuccess={openModal}
          contents={SCROLL_CONTENT}
          isInnerScroll={true}
          centered={true}
        />
      )}
    </>
  );
};
