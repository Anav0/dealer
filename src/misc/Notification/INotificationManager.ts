import {ReactNode} from "react";

export interface INotificationManager {
    showError(title: string | ReactNode, desc: string | ReactNode): void

    showInfo(title: string | ReactNode, desc: string | ReactNode): void

    showWarning(title: string | ReactNode, desc: string | ReactNode): void
}