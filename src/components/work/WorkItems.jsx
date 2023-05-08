import React from 'react'
import './work.css'

const WorkItems = ({item}) => {
  return (
    <div data-aos="zoom-in" data-aos-delay="800"  className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        {/* <a href="#" className='work__button'>
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a> */}
    </div>
  )
}

export default WorkItems
