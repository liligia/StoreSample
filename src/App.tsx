
import { GlobalStyles } from "./styles/GlobalStyles"
import { Header } from "./components/Header/Header"
import { ProductsList } from "./components/ProductsList/ProductsList"
import { Provider } from "react-redux"
import { store } from "./redux/store"


function App() {
 return (
  <Provider store={store}>
  <Header></Header>
  <ProductsList></ProductsList>
  <GlobalStyles></GlobalStyles>
  </Provider>
 )
}
export default App
