import { useRef } from 'react'
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {

  return (
    <>
      <div className="site-wrap">
        <Header />
        <div className="content">
          { children }
        </div>
        <Footer />
      </div>
    </>
  );
}
 
export default Layout;