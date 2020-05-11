import {ReactNode} from "react";
import {NotificationManager} from "misc/Notification/NotificationManager";
import {notification} from "antd";

export class AntdNotificationManager extends NotificationManager {

    showError(title: string | ReactNode, desc: string | ReactNode) {
        const config = this.factory.getErrorConfig(title, desc)
        notification.error(config)
    }

    showInfo(title: string | ReactNode, desc: string | ReactNode) {
        const config = this.factory.getInfoConfig(title, desc)
        notification.info(config)
    }

    showWarning(title: string | ReactNode, desc: string | ReactNode) {
        const config = this.factory.getWarningConfig(title, desc)
        notification.warning(config)
    }

}