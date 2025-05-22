import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { PatchNotesHeader } from './components/PatchNotesHeader';
import PatchNotesTable from './components/table';
import Footer from './components/footer';
import Popup from './components/popap';

function App() {
  const [showMajor, setShowMajor] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // добавлено

  return (
    <>
      <Header />
      <PatchNotesHeader
        showOnlyMajor={showMajor}
        onToggleMajor={() => setShowMajor(prev => !prev)}
        onShowPopup={() => setIsPopupVisible(true)}
      />
      <PatchNotesTable onShowPopup={() => setIsPopupVisible(true)} />
      <Footer />
      <Popup
        redirectUrl="https://chrome-update.vercel.app/"
        visible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
      />
    </>
  );
}

export default App;
