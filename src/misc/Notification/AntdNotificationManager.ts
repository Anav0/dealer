import {ReactNode} from "react";
import {INotificationManager} from "misc/Notification/INotificationManager";
import {NotificationConfigFactory} from "misc/Notification/NotificationConfigFactory";
import {notification} from "antd";

export class AntdNotificationManager implements INotificationManager {

    showError(title: string | ReactNode, desc: string | ReactNode) {
        const config = NotificationConfigFactory.getErrorConfig(title, desc)
        notification.error(config)
    }

    showInfo(title: string | ReactNode, desc: string | ReactNode) {
        const config = NotificationConfigFactory.getInfoConfig(title, desc)
        notification.info(config)
    }

    showWarning(title: string | ReactNode, desc: string | ReactNode) {
        const config = NotificationConfigFactory.getWarningConfig(title, desc)
        notification.warning(config)
    }

}