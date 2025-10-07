import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'

export default function Home() {
    const navigate = useNavigate()

    return (
        <main className="container-max py-12 min-h-[60vh] flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <Card title="Welcome" onCta={() => navigate('/details/welcome')}>
                        Welcome to the site. This is a simple home page designed with Tailwind CSS.
                    </Card>
                    <Card title="Features" onCta={() => navigate('/details/features')}>
                        - Responsive layout
                        <br />- Header, Footer, and Cards
                        <br />- React Router for navigation
                    </Card>
                </div>

                <div className="mt-6">
                    <Card title="Announcement" onCta={() => navigate('/details/announcement')}>
                        This is a full-width announcement card. Use this space for big updates,
                        banners, or important information that should span the main content area.
                    </Card>
                </div>
            </div>
        </main>
    )
}
