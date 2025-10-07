import React from 'react'

export default function Card({ title, children }: { title: string; children?: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-slate-800 shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="text-sm text-slate-600 dark:text-slate-300">{children}</div>
        </div>
    )
}
