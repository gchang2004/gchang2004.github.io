import React from 'react';
import './toggle.css';
import ReactSwitch from 'react-switch';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Toggle = ({toggler, themeOutput, status}) => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    <div className="nextensio__theme-toggle">
        {/*Light/Dark Mode Toggler 😄 */}
        <ReactSwitch onChange={toggler} checked={themeOutput}
            height={27} //toggle height
            width={58} //toggle width
            handleDiameter={18} //toggle button size
            activeBoxShadow=	'0 0 2px 2px rgba(129, 175, 221, 0.90)' //toggle shadow ==> when active!
            offColor="#1F1B24" //light mode background color
            offHandleColor="#ffffff" //light mode toggle button color
            onColor="#ffffff"//dark mode background color
            onHandleColor="#000000" //dark mode toggle button color
            uncheckedIcon={<svg
                color="#ffffff"
                height="90%"
                width="90%"
                viewBox="0 -3 10 20"> {/*icon display positioning*/}
                <RiMoonLine /></svg>}
            checkedIcon={<svg
                color="#000000"
                height="90%"
                width="90%"
                viewBox="3.5 -3 10 20"> {/*icon display positioning*/}
                <RiSunLine /></svg>}
            />
        <label>{status === "light" ? t('toggle-light') : t('toggle-dark')}</label>
    </div>
  )
}

export default Toggle