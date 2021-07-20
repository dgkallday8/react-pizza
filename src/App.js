import React from 'react'
import { Header } from './components/Header'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

export default App












// function App() {
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas)
//     })
//
//   }, [])
// }


/*
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    )
  }
}
*/

/*
const mapStateToProps = state => {
  // console.log(state)
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

*/
