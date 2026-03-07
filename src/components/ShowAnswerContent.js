import { useId, useRef } from 'react'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'

const ShowAnswerContent = ({
  title,
  anchor,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index
  const contentId = useId()
  const showanswerRef = useRef(null)

  const handleToggle = () => {
    const nextIndex = isOpen ? 0 : index
    setActiveIndex(nextIndex)

    if (!isOpen) {
      requestAnimationFrame(() => {
        showanswerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }

  return (
    <div
      className={`showanswer ${isOpen ? 'showanswer--open' : ''}`}
      ref={showanswerRef}
      id={anchor || undefined}
    >
      <button
        type="button"
        className="showanswer__trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        <span className="showanswer__icon" aria-hidden="true">
          {isOpen ? <FaMinusSquare /> : <FaPlusSquare />}
        </span>

        <h3 className="showanswer__title">{title}</h3>
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