export interface Tab {
    id: string;
    title: string;
    content: JSX.Element;
}

export interface GeminiFile {
    path: string;
    content: string;
}

export interface BraveSession {
    url: string;
    title: string;
}

export type ServiceResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};