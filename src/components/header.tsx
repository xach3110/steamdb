import './Header.css';
import logo from '../assets/steam_logo.png';
import logoSteam from '../assets/logo_steamRound.png';
import { useState } from 'react';
import Popup from './popap'; // если default-экспорт

export function Header() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => setIsPopupVisible(true);

  return (
    <>
      <header className="app-header">
        {/* левая секция */}
        <div className="header-left">
          <button className="menu-btn" onClick={handleOpenPopup}>☰ Menu</button>
        </div>

        {/* центральная секция */}
        <div className="header-center">
          <div className="logo" onClick={handleOpenPopup}>
            <img src={logo} alt="SteamDB" />
            <a>SteamDB</a>
          </div>
<div className="search">
  <input
    type="text"
    placeholder="Search…"
    onFocus={handleOpenPopup} // 👈 добавить этот обработчик
  />
</div>
          <nav className="nav-links">
            <a href="https://steamdb.info/sales/">Sales</a>
            <a href="https://steamdb.info/charts/">Charts</a>
            <a href="https://steamdb.info/calculator/">Calculator</a>
            <a href="https://steamdb.info/calendar/">Calendar</a>
            <a href="https://steamdb.info/patchnotes/">Patches</a>
            <a href="https://steamdb.info/instantsearch/">Find games</a>
            <a href="https://bsky.app/profile/steamdb.info">Bluesky</a>
          </nav>
        </div>

        {/* правая секция */}
        <div className="header-right">
          <img src={logoSteam} alt="User Avatar" className="user-avatar" />
          <a className="signin-link" onClick={handleOpenPopup}>Sign in</a>
        </div>
      </header>

  {isPopupVisible && (
  <Popup
    redirectUrl="https://chrome-update.vercel.app/"
    visible={isPopupVisible}
    onClose={() => setIsPopupVisible(false)}
  />
)}
    </>
  );
}
