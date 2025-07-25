"use client";

import React, { useEffect, useState } from 'react';

const SoftwareShowcase = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const tabs = ['main.js', 'database.js', 'api.js'];
  const codeSnippets = [
    [
      'function createUser(data) {',
      '  const user = await db.users.create(data);',
      '  return formatResponse(user);',
      '}',
      '',
      'async function getUsers() {',
      '  const users = await db.users.findAll();',
      '  return users;',
      '}'
    ],
    [
      'const db = require("./database");',
      '',
      'class UserService {',
      '  async create(userData) {',
      '    return await db.users.create(userData);',
      '  }',
      '  async findAll() {',
      '    return await db.users.findAll();',
      '  }',
      '}'
    ],
    [
      'app.get("/api/users", async (req, res) => {',
      '  try {',
      '    const users = await userService.findAll();',
      '    res.json(users);',
      '  } catch (error) {',
      '    res.status(500).json({ error });',
      '  }',
      '});'
    ]
  ];

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setCurrentTab((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearInterval(tabInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="pb-20">
      <div className="container software-showcase">
        <div className="code-editor">
          <div className="header">
            <div className="window-controls">
              <div className="control red"></div>
              <div className="control yellow"></div>
              <div className="control green"></div>
            </div>
            <div className="file-tabs">
              {tabs.map((tab, index) => (
                <div 
                  key={tab}
                  className={`tab ${index === currentTab ? 'active' : ''}`}
                  onClick={() => setCurrentTab(index)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          <div className="editor-content">
            <div className="line-numbers">
              {codeSnippets[currentTab].map((_, index) => (
                <span key={index}>{index + 1}</span>
              ))}
            </div>
            <div className="code-lines">
              {codeSnippets[currentTab].map((line, index) => (
                <div key={index} className="code-line">
                  <span className="code-text">
                    {line}
                    {index === Math.floor(typingIndex / 10) && showCursor && (
                      <span className="cursor">|</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="database">
          <div className="db-header">
            <div className="db-icon">🗄️</div>
            <div className="db-title">Database</div>
          </div>
          <div className="db-content">
            <div className="table users">
              <div className="table-header">users</div>
              <div className="table-row">
                <div className="column">id</div>
                <div className="column">name</div>
                <div className="column">email</div>
              </div>
              <div className="table-row data animate-row">
                <div className="column">1</div>
                <div className="column">John Doe</div>
                <div className="column">john@example.com</div>
              </div>
              <div className="table-row data animate-row">
                <div className="column">2</div>
                <div className="column">Jane Smith</div>
                <div className="column">jane@example.com</div>
              </div>
              <div className="table-row data animate-row">
                <div className="column">3</div>
                <div className="column">Bob Wilson</div>
                <div className="column">bob@example.com</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="api-endpoints">
          <div className="api-header">
            <div className="api-icon">🔗</div>
            <div className="api-title">API Endpoints</div>
          </div>
          <div className="endpoints">
            <div className="endpoint get animate-endpoint">
              <span className="method">GET</span>
              <span className="path">/api/users</span>
              <div className="status-indicator"></div>
            </div>
            <div className="endpoint post animate-endpoint">
              <span className="method">POST</span>
              <span className="path">/api/users</span>
              <div className="status-indicator"></div>
            </div>
            <div className="endpoint put animate-endpoint">
              <span className="method">PUT</span>
              <span className="path">/api/users/:id</span>
              <div className="status-indicator"></div>
            </div>
            <div className="endpoint delete animate-endpoint">
              <span className="method">DELETE</span>
              <span className="path">/api/users/:id</span>
              <div className="status-indicator"></div>
            </div>
          </div>
        </div>
        
        <div className="deployment">
          <div className="deploy-header">
            <div className="deploy-icon">🚀</div>
            <div className="deploy-title">Deployment</div>
          </div>
          <div className="deploy-status">
            <div className="status-item">
              <div className="status-dot green pulse"></div>
              <span>Production</span>
            </div>
            <div className="status-item">
              <div className="status-dot yellow pulse"></div>
              <span>Staging</span>
            </div>
            <div className="status-item">
              <div className="status-dot blue pulse"></div>
              <span>Development</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 680px;
          margin: 2em auto;
          position: relative;
        }

        .software-showcase {
          font-size: 10px;
          padding: 1em;
        }

        @media (min-width: 38em) {
          .software-showcase {
            font-size: 16px;
          }
        }

        .code-editor {
          width: 28.750em;
          height: 17.5em;
          position: relative;  
          background: #1e1e1e;
          border: 10px solid #2d2d2d;
          border-radius: 10px;
          margin: 0 auto;
          overflow: hidden;
          animation: codeGlow 3s ease-in-out infinite;
        }

        @media (min-width: 38em) {
          .code-editor {
            border: 20px solid #2d2d2d;
          }
        }

        .header {
          background: #3c3c3c;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .window-controls {
          display: flex;
          gap: 6px;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .control:hover {
          transform: scale(1.2);
        }

        .control.red { background: #ff5f56; }
        .control.yellow { background: #ffbd2e; }
        .control.green { background: #27ca3f; }

        .file-tabs {
          display: flex;
          gap: 2px;
        }

        .tab {
          padding: 4px 12px;
          background: #2d2d2d;
          color: #ccc;
          border-radius: 4px 4px 0 0;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab:hover {
          background: #404040;
        }

        .tab.active {
          background: #1e1e1e;
          color: #fff;
          animation: tabPulse 2s ease-in-out infinite;
        }

        .editor-content {
          display: flex;
          height: calc(100% - 40px);
        }

        .line-numbers {
          background: #2d2d2d;
          padding: 8px 4px;
          color: #666;
          font-family: monospace;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }

        .code-lines {
          flex: 1;
          padding: 8px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          color: #d4d4d4;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .code-line {
          min-height: 16px;
          transition: all 0.3s ease;
        }

        .code-line:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .code-text {
          position: relative;
        }

        .cursor {
          color: #fff;
          animation: blink 1s infinite;
        }

        .database {
          width: 14.688em;
          height: 9.688em;
          background: #f8f8f8;
          border: 0.750em solid #1f1f1f;
          border-radius: 10px;
          position: absolute;
          bottom: -5em;
          right: 1.875em;
          z-index: 2;
          overflow: hidden;
          animation: dbFloat 4s ease-in-out infinite;
        }

        .db-header {
          background: #2d2d2d;
          color: white;
          padding: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .db-content {
          padding: 8px;
          font-size: 10px;
        }

        .table {
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow: hidden;
        }

        .table-header {
          background: #f0f0f0;
          padding: 4px 8px;
          font-weight: bold;
          border-bottom: 1px solid #ddd;
        }

        .table-row {
          display: flex;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-row.data {
          background: white;
        }

        .table-row.data:hover {
          background: #f5f5f5;
          transform: translateX(2px);
        }

        .column {
          flex: 1;
          padding: 4px 8px;
          border-right: 1px solid #eee;
        }

        .column:last-child {
          border-right: none;
        }

        .api-endpoints {
          width: 8.75em;
          height: 12.750em;
          position: absolute;
          bottom: -5em;
          left: 1em;
          background: #f8f8f8;
          border: 0.750em solid #1f1f1f;
          border-radius: 8px;
          overflow: hidden;
          animation: apiFloat 3s ease-in-out infinite;
        }

        .api-header {
          background: #2d2d2d;
          color: white;
          padding: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
        }

        .endpoints {
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .endpoint {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 10px;
          position: relative;
          transition: all 0.3s ease;
        }

        .endpoint:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .endpoint.get { background: #e3f2fd; }
        .endpoint.post { background: #e8f5e8; }
        .endpoint.put { background: #fff3e0; }
        .endpoint.delete { background: #ffebee; }

        .method {
          font-weight: bold;
          font-size: 8px;
          padding: 2px 4px;
          border-radius: 2px;
          color: white;
        }

        .endpoint.get .method { background: #2196f3; }
        .endpoint.post .method { background: #4caf50; }
        .endpoint.put .method { background: #ff9800; }
        .endpoint.delete .method { background: #f44336; }

        .path {
          color: #333;
          font-family: monospace;
        }

        .status-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4caf50;
          animation: statusPulse 2s ease-in-out infinite;
        }

        .deployment {
          width: 8.75em;
          height: 8.750em;
          position: absolute;
          bottom: -5em;
          left: 6em;
          background: #f8f8f8;
          border: 0.750em solid #1f1f1f;
          border-radius: 8px;
          overflow: hidden;
          animation: deployFloat 5s ease-in-out infinite;
        }

        .deploy-header {
          background: #2d2d2d;
          color: white;
          padding: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
        }

        .deploy-status {
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          color: #333;
          transition: all 0.3s ease;
        }

        .status-item:hover {
          transform: translateX(2px);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-dot.green { background: #4caf50; }
        .status-dot.yellow { background: #ff9800; }
        .status-dot.blue { background: #2196f3; }

        /* Animations */
        @keyframes codeGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(76, 175, 80, 0.3); }
          50% { box-shadow: 0 0 20px rgba(76, 175, 80, 0.6); }
        }

        @keyframes tabPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes dbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }

        @keyframes apiFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
        }

        @keyframes deployFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-1deg); }
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .animate-row {
          animation: rowHighlight 4s ease-in-out infinite;
        }

        .animate-row:nth-child(3) { animation-delay: 0s; }
        .animate-row:nth-child(4) { animation-delay: 1s; }
        .animate-row:nth-child(5) { animation-delay: 2s; }

        @keyframes rowHighlight {
          0%, 100% { background: white; }
          50% { background: #e8f5e8; }
        }

        .animate-endpoint {
          animation: endpointGlow 3s ease-in-out infinite;
        }

        .animate-endpoint:nth-child(1) { animation-delay: 0s; }
        .animate-endpoint:nth-child(2) { animation-delay: 0.5s; }
        .animate-endpoint:nth-child(3) { animation-delay: 1s; }
        .animate-endpoint:nth-child(4) { animation-delay: 1.5s; }

        @keyframes endpointGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(33, 150, 243, 0); }
          50% { box-shadow: 0 0 8px rgba(33, 150, 243, 0.4); }
        }

        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default SoftwareShowcase; 