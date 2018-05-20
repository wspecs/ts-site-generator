export declare const TEMPLATE_FOLDER: string;
export interface TsmConfig {
    name: string;
    destination: string;
    author: {
        name: string;
        email: string;
        url: string;
    };
    repository: string;
    help?: boolean;
}
export declare function generate(name: string, folder?: string, config?: TsmConfig): void;
