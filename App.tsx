import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import SavedNews from './pages/SavedNews';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="mx-auto w-full min-h-screen max-w-md shadow-2xl overflow-hidden bg-background-light dark:bg-background-dark">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/article/:id" element={<ArticleDetail />} />
                    <Route path="/saved" element={<SavedNews />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default App;