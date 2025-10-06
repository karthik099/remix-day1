import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-indigo-600 font-semibold' : 'text-slate-700 hover:text-indigo-600'

  return (
    <header className="bg-white dark:bg-slate-800 shadow">
      <div className="container-max py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Router App</div>
        <nav className="space-x-4">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
