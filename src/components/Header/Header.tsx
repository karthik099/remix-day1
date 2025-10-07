import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? 'text-indigo-400 font-semibold' : 'text-white hover:text-indigo-200'

    return (
        <header className="bg-gray-700 dark:bg-slate-800 shadow text-white">
            <div className="container-max py-4 flex items-center justify-between">
                <div className="text-xl font-bold">
                    <NavLink to="/">
                        Router App
                    </NavLink></div>
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
