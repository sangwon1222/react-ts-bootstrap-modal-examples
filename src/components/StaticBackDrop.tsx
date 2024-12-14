import React from "react";
import {
  STATIC_BACKDROP_CONTENT,
  STATIC_BACKDROP_MODAL_ID,
} from "../constants/modal.ts";
import { useModal } from "../hooks/useModal.ts";
import { Modal } from "../Modal.tsx";

export const StaticBackDrop = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section aria-labelledby="static-backdrop-title">
        <h2 id="static-backdrop-title">정적 배경</h2>
        <p>
          <code>isBackdropClose= true</code>
          배경이 정적으로 설정된 경우, 모달은 배경 밖을 클릭해도 닫히지
          않습니다. <code>default: false</code>
        </p>
        <p>
          <code>isEscClose= false</code>
          배경이 정적으로 설정된 경우, ESC를 눌러도 닫히지 않습니다.
          <code>default: true</code>
        </p>
        <div className="modal-btn-wrap">
          <button
            onClick={() => openModal()}
            aria-expanded={isOpen}
            aria-controls={STATIC_BACKDROP_MODAL_ID}
          >
            모달 실행
          </button>
        </div>
      </section>

      {isOpen && (
        <Modal
          id={STATIC_BACKDROP_MODAL_ID}
          onClose={closeModal}
          onSuccess={openModal}
          contents={STATIC_BACKDROP_CONTENT}
          isBackdropClose={true}
          isEscClose={false}
        />
      )}
    </>
  );
};
