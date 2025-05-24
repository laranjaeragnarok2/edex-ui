import { BrowserWindow } from 'electron';

class BraveService {
    private browserWindow: BrowserWindow | null = null;

    public openUrl(url: string): void {
        if (this.browserWindow) {
            this.browserWindow.loadURL(url);
        } else {
            this.createBrowserWindow(url);
        }
    }

    private createBrowserWindow(url: string): void {
        this.browserWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            },
        });

        this.browserWindow.loadURL(url);

        this.browserWindow.on('closed', () => {
            this.browserWindow = null;
        });
    }

    public closeBrowser(): void {
        if (this.browserWindow) {
            this.browserWindow.close();
        }
    }

    public isBrowserOpen(): boolean {
        return this.browserWindow !== null;
    }
}

export default new BraveService();