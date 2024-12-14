import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { useModalOption } from "./hooks/useModalOption.ts";

interface TypeProps {
  id: string;
  onClose: () => void;
  onSuccess: () => void;
  contents: string;
  isEscClose: boolean;
  isBackdropClose: boolean;
  isScroll: boolean;
  isInnerScroll: boolean;
  centered: boolean;
}

export const Modal = memo(
  ({
    id,
    onClose,
    onSuccess,
    contents,
    isEscClose = true,
    isBackdropClose = false,
    isScroll = false,
    isInnerScroll = false,
    centered = false,
  }: TypeProps) => {
    const scrollStyle = isScroll ? "modal-scroll" : ""; // 뷰포트 스크롤
    const innerScrollStyle = isInnerScroll ? "modal-inner-scroll" : ""; // 모달 내부 스크롤
    const centeredStyle = centered ? "modal-centered" : ""; // 수직 중앙 레이아웃

    // 모달 옵션
    const { handleBackdropClick } = useModalOption({
      isEscClose,
      isBackdropClose,
      onClose,
    });

    return ReactDOM.createPortal(
      <div
        id={id}
        className={`modal-overlay ${scrollStyle} ${centeredStyle} ${innerScrollStyle}`}
        onClick={handleBackdropClick}
      >
        <div className="modal-dialog" role="dialog" aria-modal="true">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button className="close-x-btn" onClick={onClose} />
          </div>
          <div className="modal-body">
            <p>{contents}</p>
          </div>
          <div className="modal-footer">
            <button className="close-btn" onClick={onClose} aria-label="Close">
              닫기
            </button>
            <button
              className="success-btn"
              onClick={onSuccess}
              aria-label="Submit"
            >
              성공
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  }
);
