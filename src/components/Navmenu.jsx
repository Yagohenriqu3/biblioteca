import './Navmenu.css'
import Logo from '../assets/logo/logo.png'

export default function Navmenu() {
  return (
    <>
   


<div className="navbar bg-base-100 shadow-sm m-auto navmenu">
    <div className="navbar-start w-auto">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Catálogo</a></li>
        <li><a>Sobre</a></li>
      </ul>
    </div>
  </div>

  <div className="flex-1">
    
    <a className=""><img src={Logo} alt="bibliotech" className='logo-navmenu' /></a>
  </div>
  <div className="flex gap-2">
    
    <div className="dropdown dropdown-end mr-5 ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</>
  )
}
