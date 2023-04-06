import React from "react";
import { Route, Routes, NavLink, Link, HashRouter, BrowserRouter, MemoryRouter } from "react-router-dom";
import "./main.css"
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

function Main() {

    return (
        <MemoryRouter>
            <div>
              <ul className="header">

                    <li><Link to="/">Componente1</Link></li>
                    <li><Link to="/component2">Componente2</Link></li>
                    <li><Link to="/component3">Componente3</Link></li>
                </ul>

                <div className="content" style={{ backgroundColor: 'azure' }}>
                    <Routes>
                        <Route path="/" element={<Component1 />} />
                        <Route path="component2" element={<Component2 />} />
                        <Route path="component3" element={<Component3 />} />
                    </Routes>
                </div>
            </div>
        </MemoryRouter>
    );
}


export default Main;