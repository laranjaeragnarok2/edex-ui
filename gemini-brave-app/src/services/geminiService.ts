import { GeminiClient } from 'gemini-client'; // Importa o cliente Gemini
import { File } from '../types'; // Importa os tipos de arquivo

// Classe para interagir com o Gemini
export class GeminiService {
    private client: GeminiClient;

    constructor() {
        this.client = new GeminiClient(); // Inicializa o cliente Gemini
    }

    // Método para abrir um arquivo no Gemini
    public async openFile(uri: string): Promise<File> {
        try {
            const file = await this.client.getFile(uri); // Obtém o arquivo do Gemini
            return file;
        } catch (error) {
            throw new Error(`Erro ao abrir o arquivo: ${error.message}`);
        }
    }

    // Método para editar um arquivo no Gemini
    public async editFile(uri: string, content: string): Promise<void> {
        try {
            await this.client.editFile(uri, content); // Edita o arquivo no Gemini
        } catch (error) {
            throw new Error(`Erro ao editar o arquivo: ${error.message}`);
        }
    }

    // Método para salvar um arquivo no Gemini
    public async saveFile(uri: string, content: string): Promise<void> {
        try {
            await this.client.saveFile(uri, content); // Salva o arquivo no Gemini
        } catch (error) {
            throw new Error(`Erro ao salvar o arquivo: ${error.message}`);
        }
    }
}