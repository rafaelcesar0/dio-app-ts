import Footer from "./Footer"
import Header from "./Header/Header"

const Layout = ({children}: any) => {
  return (
    <div className="bg-white p-5 rounded-3xl min-w-80 mt-20 h-min">
        {children}
    </div>
  )
}

export default Layout