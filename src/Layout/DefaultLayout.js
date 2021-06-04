import React from 'react'
import { Footer } from './Partials/Footer'
import { Header } from './Partials/Header'

export const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">


{/* This is a section for header */}
            <header className="header">
                <Header />
            </header>
{/* This is a main section. All main contents go here */}
            

            <main className="main-body">
            {children}
            </main>

{/* This is a section for footer */}

            <footer className="footer">
                <Footer />

            </footer>

        </div>
            
        
    )
}
