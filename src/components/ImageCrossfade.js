import React from 'react'


// !VA IMPORTANT: This component uses only two images and depends on the CSS properties in globals.scss, because the animation has to be calculated separately for the number of images, duration of display, and duration of fade animation. 
// !VA Important: globals.scss also includes the responsive dimensions for this crossfade image in surgerytypes.js. To made a crossfader with different dimensions, you'd have to wrap image-crossfade-container in a parent and then size the parent.
// !VA Crossfade a number of images or containers of fixed size. Pass in the background image path, height and width as props.
const ImageCrossfade = ({ crossfade }) => {

  // !VA 
  // !VA Map over the crossfade image src
  return (
    <>
      <div 
        className='image-crossfade-container'
        >
        
        {crossfade.map(( src, index) => {
        return (
          <>
            <div 
              id={`crossfade-img${index+1}`}
              style={{ 
                backgroundImage: `url("${src}")`
              }}
              key={index}
              width="0"
              height="0"
              // sizes="100vw"
              className='image-crossfade-img' alt="Before and After Tieback Surgery"
              >
            </div>
          </>
          );
        })}


      </div>
    </>
  )
}

export default ImageCrossfade