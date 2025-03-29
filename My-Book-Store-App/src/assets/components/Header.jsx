import Cart from "./Cart";
import MyLogo from "./MyLogo"


function Header() {

  return (
    <>
    <header className="header">
        <MyLogo />
        <Cart />
    </header>
    </>
  )
}

export default Header