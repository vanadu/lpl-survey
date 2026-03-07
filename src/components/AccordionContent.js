import { useId, useRef } from 'react'
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'

const AccordionContent = ({
  title,
  children,
  index,
  activeAccordionIndex,
  setActiveAccordionIndex,
}) => {
  const isOpen = activeAccordionIndex === index
  const contentId = useId()
  const accordionRef = useRef(null)

  const handleToggle = () => {
    const nextIndex = isOpen ? 0 : index
    setActiveAccordionIndex(nextIndex)

    if (!isOpen) {
      requestAnimationFrame(() => {
        accordionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  return (
    <section
      className={`accordion ${isOpen ? 'is-open' : ''}`}
      ref={accordionRef}
    >
      <h3 className="accordion__heading">
        <button
          type="button"
          className="accordion__trigger"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={handleToggle}
        >
          <span className="accordion__icon" aria-hidden="true">
            {isOpen ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
          </span>
          <span className="accordion__title">{title}</span>
        </button>
      </h3>

      <div
        id={contentId}
        className="accordion__content"
        hidden={!isOpen}
      >
        {children}
      </div>
    </section>
  )
}

export default AccordionContent