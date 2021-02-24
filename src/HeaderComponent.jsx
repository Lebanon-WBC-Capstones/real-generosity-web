import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
function HeaderComponent() {
  const [t, i18n] = useTranslation('translation');
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <button onClick={() => i18n.changeLanguage('ar')}>ar</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  );
}

export default HeaderComponent;
