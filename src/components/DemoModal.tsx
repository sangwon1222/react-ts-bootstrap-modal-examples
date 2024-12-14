import React from "react";
import { DEMO_CONTENT, DEMO_MODAL_ID } from "../constants/modal.ts";
import { useModal } from "../hooks/useModal.ts";
import { Modal } from "../Modal.tsx";

export const DemoModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section aria-labelledby="live-demo-title">
        <h2 id="live-demo-title">라이브 데모</h2>
        <p>
          <code>isBackdropClose= false</code>
          배경을 클릭해 모달을 끌 수 있습니다. <code>default: false</code>
        </p>

        <p>
          <code>isEscClose= true</code>
          ESC버튼을 눌러 모달을 끌 수 있습니다. <code>default: true</code>
        </p>

        <div className="modal-btn-wrap">
          <button
            onClick={() => openModal()}
            aria-expanded={isOpen}
            aria-controls={DEMO_MODAL_ID}
          >
            모달 실행
          </button>
        </div>
      </section>

      {isOpen && (
        <Modal
          id={DEMO_MODAL_ID}
          onClose={closeModal}
          onSuccess={openModal}
          contents={DEMO_CONTENT}
        />
      )}
    </>
  );
};
