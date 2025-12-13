import { useEffect } from 'react'
// !VA This is the component that scrolls linked to pages to the top when the page renders, otherwise the displayed page will inherit the scroll position of the previous page. I think this functionality is built-in in next.js...need to confirm that. At any rate, if this is needed for anything, you'll have to use the next-router version of useLocation.
// import { useLocation } from 'react-router'

const ScrollToTop = (props) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{props.children}</>
}

export default ScrollToTop
