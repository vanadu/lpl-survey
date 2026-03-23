import { useId, useRef } from 'react'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'

const OPEN_SCROLL_DELAY = 220

const ShowAnswerContent = ({
  header,
  anchor,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index
  const contentId = useId()
  const showanswerRef = useRef(null)
  const triggerRef = useRef(null)

  const handleToggle = () => {
    if (isOpen) {
      const triggerTopBefore = triggerRef.current?.getBoundingClientRect().top ?? 0

      setActiveIndex(null)

      requestAnimationFrame(() => {
        const triggerTopAfter = triggerRef.current?.getBoundingClientRect().top ?? 0
        const delta = triggerTopAfter - triggerTopBefore

        if (delta !== 0) {
          window.scrollBy(0, delta)
        }
      })

      return
    }

    setActiveIndex(index)

    window.setTimeout(() => {
      showanswerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, OPEN_SCROLL_DELAY)
  }

  return (
    <div
      className={`showanswer ${isOpen ? 'showanswer--open' : ''}`}
      ref={showanswerRef}
      id={anchor || undefined}
    >
      <button
        ref={triggerRef}
        type="button"
        className="showanswer__trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        <span className="showanswer__icon" aria-hidden="true">
          {isOpen ? <FaMinusSquare /> : <FaPlusSquare />}
        </span>
        {header}
      </button>

      <div
        id={contentId}
        className="showanswer__content"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}

export default ShowAnswerContent