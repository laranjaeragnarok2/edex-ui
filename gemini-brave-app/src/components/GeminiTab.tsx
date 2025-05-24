import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const GeminiTab: React.FC = () => {
    const [fileContent, setFileContent] = useState<string>('');
    const [fileName, setFileName] = useState<string>('');

    const openFile = async (name: string) => {
        const content = await geminiService.openFile(name);
        setFileContent(content);
        setFileName(name);
    };

    const saveFile = async () => {
        if (fileName) {
            await geminiService.saveFile(fileName, fileContent);
        }
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFileContent(event.target.value);
    };

    return (
        <div>
            <h2>Gemini Tab</h2>
            <input
                type="text"
                placeholder="Enter file name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
            />
            <button onClick={() => openFile(fileName)}>Open File</button>
            <button onClick={saveFile}>Save File</button>
            <textarea
                value={fileContent}
                onChange={handleContentChange}
                rows={10}
                cols={50}
            />
        </div>
    );
};

export default GeminiTab;