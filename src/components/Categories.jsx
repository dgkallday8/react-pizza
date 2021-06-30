import React from 'react'
import PropTypes from 'prop-types'


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        { items && items.map((item, index) =>
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            key={`${item}_${index}`}>
            { item }
          </li>)
        }
      </ul>
    </div>
  )
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([null, PropTypes.number]),
  // items: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  onClickCategory: PropTypes.func
}

Categories.defaultProps = {
  activeCategory: null,
  items: []
}

export default Categories
