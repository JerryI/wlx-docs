import React, { useEffect, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import './styles.css'

export default function Theme({}) {
    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
          document.getElementsByClassName("navbar__title")[0].innerText = "Wolfram Language XML";
          
          document.getElementsByClassName("navbar__logo")[0].firstChild.src = "/wljs-docs/img/logo2.svg";
          document.documentElement.style.setProperty('--ifm-color-primary', '#2dd4bf');
      document.documentElement.setAttribute('data-theme', 'dark');
      //document.getElementsByClassName("navbar__title")[0].innerText = "Wolfram Language XML"
      //document.getElementsByClassName("navbar__logo")[0].firstChild.src = "/wljs-docs/img/logo2.svg";
      setTimeout(() => document.documentElement.setAttribute('data-theme', 'dark'), 100);
          
        }

        return () => {
            if (ExecutionEnvironment.canUseDOM) {
                //document.getElementsByClassName("navbar__title")[0].innerText = "WLJS"
                //document.getElementsByClassName("navbar__logo")[0].firstChild.src = "/wljs-docs/img/logo.svg";
            }            
        }
    }, []);

  return (
    <></>
  )

}