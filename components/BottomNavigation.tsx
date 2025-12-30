import React from 'react';
import { Link } from 'react-router-dom';
import { NavItemProps } from '../types';

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, active, onClick }) => {
    const content = (
        <>
            <div className={`p-1 rounded-full transition-colors ${active ? '' : 'group-hover:bg-primary/10'}`}>
                <span 
                    className="material-symbols-outlined" 
                    style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
                >
                    {icon}
                </span>
            </div>
            <span className="text-[10px] font-medium">{label}</span>
        </>
    );

    const baseClasses = `flex flex-1 flex-col items-center justify-center gap-1 group transition-colors ${
        active 
            ? 'text-primary' 
            : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary'
    }`;

    if (to) {
        return <Link to={to} className={baseClasses}>{content}</Link>;
    }

    return <button onClick={onClick} className={baseClasses}>{content}</button>;
};

interface BottomNavigationProps {
    activeTab: 'home' | 'saved' | 'settings';
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
    return (
        <>
             {/* Gradient Overlay for aesthetic fade */}
            <div className="pointer-events-none fixed bottom-[68px] left-0 right-0 h-12 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-30 max-w-md mx-auto"></div>
            
            <nav className="fixed bottom-0 left-0 right-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 z-50 max-w-md mx-auto">
                <div className="flex justify-around items-center px-2 pb-2 h-16">
                    <NavItem 
                        to="/" 
                        icon="home" 
                        label="홈" 
                        active={activeTab === 'home'} 
                    />
                    <NavItem 
                        to="/saved" 
                        icon="inventory_2" 
                        label="보관함" 
                        active={activeTab === 'saved'} 
                    />
                    <NavItem 
                        icon="settings" 
                        label="설정" 
                        active={activeTab === 'settings'}
                        onClick={() => console.log('Settings clicked')}
                    />
                </div>
            </nav>
        </>
    );
};

export default BottomNavigation;