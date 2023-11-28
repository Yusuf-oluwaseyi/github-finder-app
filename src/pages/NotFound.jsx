import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content text-[#1e90ff]">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oooops!</h1>
          <p className="text-2xl mb-8 font-bold">404 - WE LOST THIS PAGE, AGAIN!!</p>
          <Link to='/' className="btn btn-[#fdffb8] btn-lg">
            <FaHome className="mr-2" />
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
