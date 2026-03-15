import { useId, useRef } from 'react'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'

const ShowMoreContent = ({
  title,
  anchor,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index
  const contentId = useId()
  const showmoreRef = useRef(null)

  const handleToggle = () => {
    const nextIndex = isOpen ? 0 : index
    setActiveIndex(nextIndex)

    if (!isOpen) {
      requestAnimationFrame(() => {
        showmoreRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }

  return (
    <div
      className={`showmore ${isOpen ? 'showmore--open' : ''}`}
      ref={showmoreRef}
      id={anchor || undefined}
    >
      <button
        type="button"
        className="showmore__trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        <span className="showmore__icon" aria-hidden="true">
          {isOpen ? <FaMinusSquare /> : <FaPlusSquare />}
        </span>

        <h3 className="showmore__title">{title}</h3>
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

export default ShowMoreContent