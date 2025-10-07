import React from 'react'
import Card from '../../components/Card/Card'

export default function Home() {
    return (
        <main className="container-max py-12 min-h-[60vh] flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <Card title="Welcome">
                        Welcome to the site. This is a simple home page designed with Tailwind CSS.
                    </Card>
                    <Card title="Features">
                        - Responsive layout
                        <br />- Header, Footer, and Cards
                        <br />- React Router for navigation
                    </Card>
                </div>
            </div>
        </main>
    )
}
