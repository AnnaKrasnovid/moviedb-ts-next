import { useState } from 'react';
import type { AppProps } from 'next/app';

import { ModalsContext } from '../context/ModalsContext';
import { TooltipContext } from '../context/TooltipContext';
import { useToggleVisibility } from '../hooks/useToggleVisibillity';

import 'normalize.css';
import 'swiper/css/bundle';
import '../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  const menuPopup = useToggleVisibility(false)
  const searchPopup = useToggleVisibility(false)
  const tooltip = useToggleVisibility(false)
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [textError, setTextError] = useState('Что-то пошло не так...');


  const modalsContextProps = {
    closePopup: menuPopup.closeModal,
    openMenu: menuPopup.openModal,
    isOpenPopupMenu: menuPopup.isActive,
    openPopupSearch: searchPopup.openModal,
    isOpenPopupSearch: searchPopup.isActive,
    closePopupSearch: searchPopup.closeModal
  }

  const tooltipContextProps = {
    isOpenTooltip: tooltip.isActive,
    closeTooltip: tooltip.closeModal,
    textError: textError,
    setTextError: setTextError
  }

  return (
    <TooltipContext.Provider value={tooltipContextProps}>
      <ModalsContext.Provider value={modalsContextProps}>
        <Component {...pageProps} />
      </ModalsContext.Provider>
    </TooltipContext.Provider>
  )
}
