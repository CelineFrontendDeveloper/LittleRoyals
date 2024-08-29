import React, { ReactNode } from "react";
import Header from "./Header";
import "../styles/Layout.css";   //.. steht für einen Pfad zurück gehen also aus components raus

interface LayoutProps{
    children: ReactNode;
}

function Layout ({children}: LayoutProps) {
    return(
        <div className="layout">
                <div className="main">
                <Header></Header>
                    {children}
                </div>
        </div>
    );
}

export default Layout;