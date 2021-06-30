import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'
import { addPizzaToCart } from '../redux/actions/cart'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Сладкие'
]
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }
]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  console.log(cartItems)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={ onSelectCategory } items={categoryNames}/>
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map(obj => <PizzaBlock
              onClickAddPizza={handleAddPizzaToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].length}
              {...obj} />)
            : Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
        }


      </div>
    </div>
  )
}



export default Home
