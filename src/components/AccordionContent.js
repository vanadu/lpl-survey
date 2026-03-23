import { useId, useRef } from 'react'
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'

const OPEN_SCROLL_DELAY = 220

const AccordionContent = ({
  header,
  children,
  index,
  activeAccordionIndex,
  setActiveAccordionIndex,
}) => {
  const isOpen = activeAccordionIndex === index
  const contentId = useId()
  const accordionRef = useRef(null)
  const triggerRef = useRef(null)

  const handleToggle = () => {
    if (isOpen) {
      const triggerTopBefore = triggerRef.current?.getBoundingClientRect().top ?? 0

      setActiveAccordionIndex(null)

      requestAnimationFrame(() => {
        const triggerTopAfter = triggerRef.current?.getBoundingClientRect().top ?? 0
        const delta = triggerTopAfter - triggerTopBefore

        if (delta !== 0) {
          window.scrollBy(0, delta)
        }
      })

      return
    }

    setActiveAccordionIndex(index)

    window.setTimeout(() => {
      accordionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, OPEN_SCROLL_DELAY)
  }

  return (
    <section
      className={`accordion ${isOpen ? 'is-open' : ''}`}
      ref={accordionRef}
    >
      <button
        ref={triggerRef}
        type="button"
        className="accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        <span className="accordion__icon" aria-hidden="true">
          {isOpen ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
        </span>
        {header}
      </button>

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