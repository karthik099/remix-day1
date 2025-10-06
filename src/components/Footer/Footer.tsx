import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t mt-12">
      <div className="container-max py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  )
}
