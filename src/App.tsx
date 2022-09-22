import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);

  function handleOpenNewTranslationModal(){
      setIsNewTranslationModalOpen(true);
  }

  function handleCloseNewTranslationModal(){
      setIsNewTranslationModalOpen(false);
  }

  return (
    <>
      <Header 
        onOpenNewTranslationModal={handleOpenNewTranslationModal} 
      />
      <Dashboard />

      <Modal 
          isOpen={isNewTranslationModalOpen}
          onRequestClose={handleCloseNewTranslationModal}
      >
          <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
