import { Modal as AntModal } from 'antd';

function Modal({ visible, children }) {
  return (
    <AntModal visible={visible}>
      {children ? children : 'pusto'}
    </AntModal>
  );
}

export default Modal;
