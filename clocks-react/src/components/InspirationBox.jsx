import React, { useState, useEffect, useCallback } from 'react';
import { inspirationalContent } from '../data/content';

const InspirationBox = () => {
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('');

  const updateInspiration = useCallback(() => {
    const types = Object.keys(inspirationalContent);
    const selectedType = types[Math.floor(Math.random() * types.length)];
    const items = inspirationalContent[selectedType];
    const selectedContent = items[Math.floor(Math.random() * items.length)];
    
    setContentType(selectedType);
    setContent(selectedContent);
  }, []);

  useEffect(() => {
    updateInspiration();
    const interval = setInterval(updateInspiration, 60000);
    return () => clearInterval(interval);
  }, [updateInspiration]);

  return (
    <div className="inspiration-box">
      <div className="inspiration-content">
        {content}
      </div>
    </div>
  );
};

export default InspirationBox;
