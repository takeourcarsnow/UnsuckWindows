'use client';

import React, { useState } from 'react';

interface TreeNodeProps {
  label: string;
  children?: React.ReactNode;
  icon?: string;
  href?: string;
  description?: string;
  isCollapsible?: boolean;
  tags?: string[];
  onTagClick?: (tag: string) => void;
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  label,
  children,
  icon = '📄',
  href,
  description,
  isCollapsible = !!children,
  tags = [],
  onTagClick,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-300 hover:underline transition-colors"
    >
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  return (
    <div className="ml-4">
      <div className="flex items-start gap-2">
        <span className="text-green-500 w-4 text-center">
          {isCollapsible ? (isOpen ? '─' : '+') : '├'}
        </span>
        {isCollapsible && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-500 hover:text-green-300 cursor-pointer w-3 text-center"
            title={isOpen ? 'Collapse' : 'Expand'}
          >
            {isOpen ? '▼' : '▶'}
          </button>
        )}
        {!isCollapsible && <span className="text-green-500">─</span>}
        <span className="text-green-400 text-lg">{icon}</span>
        <span className="text-green-300 font-semibold">{content}</span>
      </div>
      {description && (
        <div className="ml-6 text-green-300 text-xs mt-1">
          │ {description}
        </div>
      )}
      {tags.length > 0 && (
        <div className="ml-6 text-green-600 text-xs mt-1 space-x-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick?.(tag)}
              className="inline-block hover:text-green-400 hover:underline cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
      {children && isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

interface TreeNodeLeafProps {
  label: string;
  icon?: string;
  href?: string;
  description?: string;
  tags?: string[];
  onTagClick?: (tag: string) => void;
}

export const TreeNodeLeaf: React.FC<TreeNodeLeafProps> = ({
  label,
  icon = '📄',
  href,
  description,
  tags = [],
  onTagClick,
}) => {
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-300 hover:underline transition-colors"
    >
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  return (
    <div className="ml-4 hover:bg-green-950 hover:bg-opacity-20 p-1 rounded transition-colors">
      <div className="flex items-start gap-2">
        <span className="text-green-500 w-4 text-center">└</span>
        <span className="text-green-400 text-lg">{icon}</span>
        <span className="flex-1 text-green-300">{content}</span>
      </div>
      {description && (
        <div className="ml-6 text-green-300 text-xs mt-1">
          │ {description}
        </div>
      )}
      {tags.length > 0 && (
        <div className="ml-6 text-green-600 text-xs mt-1 space-x-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick?.(tag)}
              className="inline-block hover:text-green-400 hover:underline cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface TreeContainerProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
}

export const TreeContainer: React.FC<TreeContainerProps> = ({
  title,
  children,
  icon = '📦',
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="my-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-green-500 font-bold text-lg hover:text-green-300 transition-colors cursor-pointer"
      >
        <span>{isOpen ? '▼' : '▶'}</span>
        <span>{title}</span>
      </button>
      <div className="border-l-2 border-green-500 pl-0 mt-2">
        {isOpen && children}
      </div>
    </div>
  );
};
