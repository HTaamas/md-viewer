// src/components/MarkdownViewer.jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownViewer() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  const handleSave = () => {
    setPreview(markdown);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <textarea
        style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}
        placeholder="Write Markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={handleSave} style={{ padding: '10px', fontSize: '16px' }}>Save</button>
      </div>
      <div
        style={{ width: '50%', padding: '10px', boxSizing: 'border-box', overflowY: 'auto' }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {preview}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownViewer;
