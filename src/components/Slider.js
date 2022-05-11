import React, {useState} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import data from '../data'

const Slider = () => {
  const [items,] = useState(data);
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    if(index > items.length - 1){
      setIndex(0);
    }
    if(index < 0){
      setIndex(items.length - 1);
    }
  }, [index, items]);

  React.useEffect(() => {
    const autoSlide =  setInterval(() => {
      setIndex(index + 1);
    }, 5000)
    return () => {
      clearInterval(autoSlide);
    }
  }, [index]);

  return (
    <div className='container'>
      <div className='slider'>
        <h1> <span>/</span> Reviews</h1>
        <div className='items'>
          {items.map((item, itemIndex) => {
            const {id, image, title} = item;

            let changePosition = 'item right-position';
            if(itemIndex === index) {
              changePosition = 'item active';
            }
            if(itemIndex === index - 1 || 
              (index === 0 && itemIndex === items.length - 1)) {
              changePosition = 'item left-position';
            }
            return(
              <div key={id} className={changePosition} >
                <img src={image} alt={title} />
                <div className='title'>{title}</div>
              </div>
            )
          })}
          <FiChevronLeft className='left' onClick={() => setIndex(index - 1)}/>
          <FiChevronRight className='right' onClick={() => setIndex(index + 1)}/>
        </div>
      </div>
    </div>
  )
}

export default Slider
