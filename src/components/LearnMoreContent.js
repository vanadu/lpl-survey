import { useId, useRef } from 'react'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'

const OPEN_SCROLL_DELAY = 300

const LearnMoreContent = ({
  id,
  header,
  anchor,
  children,
  openSection,
  setOpenSection,
}) => {
  const isOpen = openSection === id
  const contentId = useId()
  const showmoreRef = useRef(null)
  const triggerRef = useRef(null)

  const handleToggle = () => {
    if (isOpen) {
      const triggerTopBefore = triggerRef.current?.getBoundingClientRect().top ?? 0

      setOpenSection(null)

      requestAnimationFrame(() => {
        const triggerTopAfter = triggerRef.current?.getBoundingClientRect().top ?? 0
        const delta = triggerTopAfter - triggerTopBefore

        if (delta !== 0) {
          window.scrollBy(0, delta)
        }
      })

      return
    }

    setOpenSection(id)

    window.setTimeout(() => {
      showmoreRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, OPEN_SCROLL_DELAY)
  }

  return (
    <div
      className={`showmore ${isOpen ? 'showmore--open' : ''}`}
      ref={showmoreRef}
      id={anchor || undefined}
    >
      <button
        ref={triggerRef}
        type="button"
        className="showmore__trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        <span className="showmore__icon" aria-hidden="true">
          {isOpen ? <FaMinusSquare /> : <FaPlusSquare />}
        </span>
        {header}
      </button>

      <div
        id={contentId}
        className="showmore__content"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}

export default LearnMoreContent