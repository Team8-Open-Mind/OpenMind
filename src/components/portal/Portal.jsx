import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('portal'));
};

const PortalContainer = ({ children }) => {
  return <Portal>{children}</Portal>;
};

export default PortalContainer;
