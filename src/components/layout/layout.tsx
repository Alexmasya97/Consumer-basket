import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../footer/footer';
import Header from '../header/header';

export default function Layout() {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div >
    );
}

// main className="root" in my version