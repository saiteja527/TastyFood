import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./Store/CartContext";
import UserProgressContextProvider from "./Store/UserProgressContext";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <CheckOut />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
