import { useRef } from 'react'
import Footer from "./Footer"
import Header from "./Header"
import BottomNav from "./BottomNav"
import Consent from "./Consent"

import * as styles from '../styles/Light.module.scss'


const Layout = ({ children }) => {




  return (
    <>
      <Header />
      {/* <Consent/> */}
      <div className="content">
        { children }
      </div>
      <BottomNav />
      <Footer />
    </>
  );
}
 
export default Layout;
