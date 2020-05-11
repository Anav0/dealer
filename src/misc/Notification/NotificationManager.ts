import {ReactNode} from "react";
import {NotificationConfigFactory} from "misc/Notification/NotificationConfigFactory";

export abstract class NotificationManager {

    factory: NotificationConfigFactory;

    constructor(factory: NotificationConfigFactory) {
        this.factory = factory;
    }

    abstract showError(title: string | ReactNode, desc: string | ReactNode): void

    abstract showInfo(title: string | ReactNode, desc: string | ReactNode): void

    abstract showWarning(title: string | ReactNode, desc: string | ReactNode): void
}