import React from "react";
import { Routes, Route } from "react-router-dom";
import { BasicList } from "./BasicList";


export const ApplicationViews = () => {
    return (
        <main>
            <Routes>
                    <Route
                        index
                        path="/" element={<BasicList />} />
                    <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Routes>
        </main>
    );
};