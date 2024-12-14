import React from "react";
import { CENTER_MODAL_ID, LAYOUT_CENTER_CONTENT } from "../constants/modal.ts";
import { useModal } from "../hooks/useModal.ts";
import { Modal } from "../Modal.tsx";

export const CenterModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section aria-labelledby="layout-center-title">
        <h2 id="layout-center-title">레이아웃 수직 중앙 모달</h2>

        <p>
          <code>.modal-centered</code>
          레이아웃을 수직 중앙에 배치합니다.
        </p>

        <div className="modal-btn-wrap">
          <button
            onClick={() => openModal()}
            aria-expanded={isOpen}
            aria-controls={CENTER_MODAL_ID}
          >
            모달 실행
          </button>
        </div>
      </section>

      {isOpen && (
        <Modal
          id={CENTER_MODAL_ID}
          onClose={closeModal}
          onSuccess={openModal}
          contents={LAYOUT_CENTER_CONTENT}
          centered={true}
        />
      )}
    </>
  );
};
