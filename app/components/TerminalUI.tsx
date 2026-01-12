'use client';

import React, { useState, useEffect } from 'react';

interface TerminalSearchProps {
  onSearch: (query: string) => void;
  onClear: () => void;
}

export const TerminalSearch: React.FC<TerminalSearchProps> = ({
  onSearch,
  onClear,
}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      onSearch(value);
    } else {
      onClear();
    }
  };

  return (
    <div className="my-6">
      <div className="flex items-center gap-2">
        <span className="text-green-500">$</span>
        <span className="text-green-400">search</span>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="flex-1 bg-black text-green-400 placeholder-green-700 outline-none border-b border-green-500 focus:border-green-300 transition-colors"
          autoFocus
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              onClear();
            }}
            className="text-green-600 hover:text-green-400 text-xl"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

interface TerminalHeaderProps {
  title: string;
  subtitle: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  title,
  subtitle,
}) => {
  const [displayedTitle, setDisplayedTitle] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < title.length) {
        setDisplayedTitle(title.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [title]);

  return (
    <div className="border-b-2 border-green-500 pb-4 mb-8">
      <div className="flex items-center gap-1 text-green-500 text-lg font-bold">
        <span>$</span>
        <span className="text-green-400">{displayedTitle}</span>
        <span className="animate-pulse">_</span>
      </div>
      <div className="text-green-400 text-sm mt-2">{subtitle}</div>
    </div>
  );
};

interface ThemeToggleProps {
  currentTheme: 'green';
  onThemeChange: (theme: 'green') => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  return (
    <div className="flex gap-2 items-center mb-6">
      <span className="text-green-600 text-sm">$ theme:</span>
      <button
        onClick={() => onThemeChange('green')}
        className={`px-3 py-1 text-xs border border-green-400 bg-green-950 text-green-300`}
      >
        green
      </button>
    </div>
  );
};
