import React from 'react'

type Props = {
    title: string
    children?: React.ReactNode
    ctaLabel?: string
    onCta?: () => void
}

export default function Card({ title, children, ctaLabel = 'Learn more', onCta }: Props) {
    return (
        <div className="bg-white dark:bg-slate-800 shadow rounded-lg p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <div className="text-sm text-slate-600 dark:text-slate-300">{children}</div>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    type="button"
                    onClick={onCta}
                    className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    {ctaLabel}
                </button>
            </div>
        </div>
    )
}
