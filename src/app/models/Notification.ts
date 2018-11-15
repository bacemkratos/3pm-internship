export interface Notification {
    title: string;
    message: string;
    projectId: number;
    recipients: string[];
    groups: string[];
}