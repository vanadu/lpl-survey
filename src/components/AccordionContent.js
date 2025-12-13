import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { FaRegMinusSquare } from 'react-icons/fa'
import { FaRegPlusSquare } from 'react-icons/fa'

// !VA Get the props from the child
const AccordionContent = ({
  title,
  children,
  index,
  activeAccordionIndex,
  setActiveAccordionIndex,
}) => {



  // !VA 
  const accordionRef = useRef()

  const handleSetIndex= (index) => {
    if (activeAccordionIndex !== index ) {
      setActiveAccordionIndex(index);
    } else {
      setActiveAccordionIndex(0);
    }
    // !VA Once the accordion content has expanded, we can move the top of the accordion container to the top of the screen with the scroll-margin set in the CSS. If you scrollIntoView before the accordion is expanded, the scroll operation will run first and then when the accordion opens it will scroll again to accommodate the new container.
    setTimeout(() => {
      accordionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300);
  }



  return (
    <>
      <div 
        className={`accordion-container`}
        ref={accordionRef}
        >
        <div
          onClick={() => handleSetIndex(index)}
          className='accordion'>
          <div 
          className='accordion__title'>
            <div className='accordion__icon'>
              {activeAccordionIndex === index ? (
                <FaRegMinusSquare />
              ) : (
                <FaRegPlusSquare />
              )}
            </div>
            <h3
              className={`accordion__title-text ${index === activeAccordionIndex ? 'accordion_open' : ''}`}>{title}
            </h3>
          </div>
          {/* <SeparatorDots /> */}
          {activeAccordionIndex === index && (
            <div className='accordion__content'>
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AccordionContent
