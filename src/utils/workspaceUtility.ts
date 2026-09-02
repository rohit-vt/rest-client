import * as path from 'path';
import { TextDocument, window, workspace } from 'vscode';

export function getWorkspaceRootPath(document: TextDocument | undefined = getCurrentTextDocument()): string | undefined {
    if (document) {
        const fileUri = document.uri;
        const workspaceFolder = workspace.getWorkspaceFolder(fileUri);
        if (workspaceFolder) {
            return workspaceFolder.uri.toString();
        }
    }
}

export function getHttpFileName(document: TextDocument): string {
    return path.basename(document.fileName, path.extname(document.fileName));
}

export function getCurrentHttpFileName(): string | undefined {
    const document = getCurrentTextDocument();
    return document && getHttpFileName(document);
}

export function getCurrentTextDocument(): TextDocument | undefined {
    return window.activeTextEditor?.document;
}