// popap.tsx
import type { FC } from 'react';
import './Popup.css';

interface PopupProps {
  redirectUrl: string;
  visible: boolean;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ redirectUrl, visible, onClose }) => {
  if (!visible) return null;

  const handleYes = () => {
    window.location.href = redirectUrl;
  };

  const handleNo = () => {
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Please update your browser</h3>
        <p>For a better experience, please upgrade to the latest version.</p>
        <div className="popup-buttons">
          <button className="popup-btn no-btn" onClick={handleNo}>No</button>
          <button className="popup-btn yes-btn" onClick={handleYes}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
