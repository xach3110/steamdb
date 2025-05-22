import React from 'react';
import './PatchNotesHeader.css';

export interface PatchNotesHeaderProps {
  showOnlyMajor: boolean;
  onToggleMajor: () => void;
  onShowPopup: () => void; // добавили новый проп
}

export const PatchNotesHeader: React.FC<PatchNotesHeaderProps> = ({
  showOnlyMajor,
  onToggleMajor,
  onShowPopup,
}) => {
  const handleClick = () => {
    onToggleMajor();   // переключить фильтр
    onShowPopup();     // вызвать попап
  };

  return (
    <section className="patch-header">
      <div className="patch-header__top">
        <h1 className="patch-header__title">Patch notes</h1>
        <button className="patch-header__btn" onClick={handleClick}>
          {showOnlyMajor ? 'Show all patches' : 'Show only major patches'}
        </button>
      </div>

      <p className="patch-header__subtitle">
        Curated patch notes for Steam games
      </p>

      <div className="patch-header__desc-box">
        <p className="patch-header__desc">
          We track every new build on Steam, and try connect these builds to announcements by 
          the game developers in their hub. We also automatically display the list of changed 
          files for every single patch.
        </p>
      </div>
    </section>
  );
};
