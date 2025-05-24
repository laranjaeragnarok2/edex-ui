import React, { useState } from 'react';

const TerminalTab: React.FC = () => {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState<string[]>([]);

    const handleCommandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(event.target.value);
    };

    const executeCommand = () => {
        // Simulate command execution and output
        setOutput(prevOutput => [...prevOutput, `Executed: ${command}`]);
        setCommand('');
    };

    return (
        <div className="terminal-tab">
            <h2>Terminal</h2>
            <div className="terminal-output">
                {output.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
            <input
                type="text"
                value={command}
                onChange={handleCommandChange}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        executeCommand();
                    }
                }}
                placeholder="Type a command..."
            />
            <button onClick={executeCommand}>Execute</button>
        </div>
    );
};

export default TerminalTab;