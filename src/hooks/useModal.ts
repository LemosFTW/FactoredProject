import { useState } from "react";

export function useModal<T = any>() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<T | null>(null);

  const openModal = (item: T) => {
    setSelected(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return { isOpen, selected, openModal, closeModal };
}
