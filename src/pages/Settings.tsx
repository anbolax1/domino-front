import React from 'react';
import { ArrowLeft, Moon, Sun, Bell, Lock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useTheme } from '../context/ThemeContext';

interface SettingToggleProps {
  icon: React.ReactNode;
  label: string;
  enabled: boolean;
  onToggle: () => void;
}

function SettingToggle({ icon, label, enabled, onToggle }: SettingToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="w-full px-4 py-4 flex items-center justify-between"
    >
      <div className="flex items-center">
        {icon}
        <span className="text-gray-900 dark:text-white ml-3">{label}</span>
      </div>
      <div className={`w-11 h-6 flex items-center rounded-full p-1 ${
        enabled ? 'bg-blue-500' : 'bg-gray-300'
      }`}>
        <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`} />
      </div>
    </button>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto px-4 pt-6 pb-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-300 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Settings
        </h1>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <SettingToggle
              icon={darkMode ? 
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" /> :
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              }
              label="Dark Mode"
              enabled={darkMode}
              onToggle={toggleDarkMode}
            />

            <hr className="border-gray-200 dark:border-gray-700" />

            <SettingToggle
              icon={<Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
              label="Notifications"
              enabled={notifications}
              onToggle={() => setNotifications(!notifications)}
            />

            <hr className="border-gray-200 dark:border-gray-700" />

            <button
              onClick={() => navigate('/settings/change-password')}
              className="w-full px-4 py-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-900 dark:text-white ml-3">Change Password</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            Version 1.0.0
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}