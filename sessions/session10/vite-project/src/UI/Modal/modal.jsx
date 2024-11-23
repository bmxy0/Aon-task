import styles from "./Modal.module.css";
export const Modal = ({ isOpen,children,onClose}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} style={{visibility:isOpen?'visible':'hidden'}} onClick={onClose}></div>
      <div className={styles.content} style={{visibility:isOpen?'visible':'hidden'}}>{children}</div>
    </div>
  );
};
