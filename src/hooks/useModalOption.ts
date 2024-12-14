import React, { useCallback, useEffect } from "react";

interface TypeProps {
  onClose: () => void;
  isBackdropClose: boolean;
  isEscClose: boolean;
}

export const useModalOption = ({
  onClose,
  isEscClose,
  isBackdropClose,
}: TypeProps) => {
  // ESC 모달 끄기
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  // 배경 클릭해서 모달 닫기
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && !isBackdropClose) onClose();
    },
    [isBackdropClose, onClose]
  );

  useEffect(() => {
    if (isEscClose) document.addEventListener("keydown", handleKeyDown); // ESC 이벤트 등록
    document.body.style.overflow = "hidden"; // 스크롤 방지

    return () => {
      // 이벤트 해제
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isEscClose, handleKeyDown]);

  return { handleBackdropClick };
};
