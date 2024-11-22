import React from 'react';
import { Lock } from 'lucide-react';

const Header = ({ isAuthenticated, user }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
            <div>
                <div className="text-gray-900 dark:text-white font-bold">{user.role}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{user.name}</div>
            </div>
            <button className="flex items-center text-gray-600 dark:text-gray-300">
                {isAuthenticated ? (
                    <>
                        <Lock className="w-5 h-5 mr-2" />
                        Logout
                    </>
                ) : (
                    'Login'
                )}
            </button>
        </div>
    );
};

export default Header;
