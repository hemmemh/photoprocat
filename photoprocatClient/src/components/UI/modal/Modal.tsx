import { useCallback, useEffect, useRef, FC } from 'react';
import './modal.scss';

interface FooterProps {
  active?: boolean;
  setActive: (value: boolean) => void;
  children?: React.ReactNode;
  modalCover?: boolean;
  modalClass?: string;
}

export const Modal: FC<FooterProps> = ({
  active,
  setActive,
  children,
  modalCover,
  modalClass = 'origin',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalCoverRef = useRef<boolean>(false);
  useEffect(() => {
    if (!modalCover) return;
    modalCoverRef.current = modalCover;
  }, [modalCover]);

  const addClick = useCallback((e: React.MouseEvent) => {
    if (e.target === modalRef.current && !modalCoverRef.current) {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    if (active) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [active]);

  useEffect(() => {
    document.addEventListener('keydown', keyDown);

    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  }, []);

  const keyDown = function (e: KeyboardEvent) {
    if (e.key === 'Escape') {
      setActive(false);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={addClick}
      className={active ? `modal ${modalClass} active` : `modal ${modalClass}`}
    >
      <div className={active ? 'modal__body active' : 'modal__body'}>
        {children}
      </div>
    </div>
  );
};
