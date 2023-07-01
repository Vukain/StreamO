import styles from './Modal.module.sass';
import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { ContentCard } from '@/ui/ContentCard/ContentCard';

type Props = {
  autoClose?: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
};

export const Modal: React.FC<Props> = ({ autoClose = 0, setActive, children }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 700);
  };

  const autoCloseModal = () => {
    const timeoutState = setTimeout(() => {
      setModalVisible(false);
    }, autoClose);
    const timeoutShow = setTimeout(() => {
      setActive(false);
    }, autoClose + 700);

    return () => {
      clearTimeout(timeoutState);
      clearTimeout(timeoutShow);
    };
  };

  const childrenWithProps = React.cloneElement(children, {
    closeModal: closeModal,
  });

  useEffect(() => {
    if (autoClose !== 0) {
      autoCloseModal();
    }
  }, []);

  return (
    <div className={clsx(styles.modal, !modalVisible && styles.hiding)}>
      <div className={clsx(styles.card, !modalVisible && styles.hiding_card)}>
        <ContentCard>{childrenWithProps}</ContentCard>
      </div>
    </div>
  );
};
