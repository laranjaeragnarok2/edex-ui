import React, { useEffect, useState } from 'react';
import { openUrl, BraveSession } from '../services/braveService';

const BraveBrowserTab: React.FC = () => {
    const [url, setUrl] = useState<string>('https://www.example.com');
    const [session, setSession] = useState<BraveSession | null>(null);

    useEffect(() => {
        const initSession = async () => {
            const newSession = await BraveSession.create();
            setSession(newSession);
        };

        initSession();
    }, []);

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleNavigate = () => {
        if (session) {
            openUrl(session, url);
        }
    };

    return (
        <div className="brave-browser-tab">
            <input
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="Enter URL"
            />
            <button onClick={handleNavigate}>Go</button>
            <div className="browser-content">
                {/* Render browser content here */}
            </div>
        </div>
    );
};

export default BraveBrowserTab;