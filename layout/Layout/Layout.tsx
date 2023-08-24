import { useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { ModalsContext } from '../../context/ModalsContext';

// import './Layout.css';

interface LayoutInt {
  children: JSX.Element,
}

function Layout({ children }: LayoutInt) {
  const {openMenu, closePopup} = useContext(ModalsContext);

  return (
    <>
      <Header
        onOpenMenu={openMenu}
        onClosePopup={closePopup}
      />
      <div className='main'>
        <main className='main-page'>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
