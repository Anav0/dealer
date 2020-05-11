import React, {ReactNode} from "react";
import {NotificationConfigBuilder} from "misc/Notification/NotificationConfigBuilder";
import {ArgsProps,} from "antd/lib/notification";
import {Button, notification} from "antd";
import {NotificationConfigFactory} from "misc/Notification/NotificationConfigFactory";

/* WZORZEC FABRYKA */
/*
* Pozwala na tworzenie konkretnych "modeli" instancji danej klasy
* W poniższym przypadku możemy tworzyć powtarzalne wzory konfiguracji powiadomień przez co późniejsza zmiana jest łatwa
* do przeprowadzenia.
* */
export class DefaultNotificationConfigFactory extends NotificationConfigFactory{

    private static generateKey() {
        return `open${Date.now()}`;
    }

    getErrorConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps {
        return this.builder
            .buildRequiredProperties(DefaultNotificationConfigFactory.generateKey(), 'bottomRight', 4, msg, desc)
            .build();
    }

    getInfoConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps {
        const key = DefaultNotificationConfigFactory.generateKey()
        return this.builder
            .buildRequiredProperties(key, 'topRight', 2.5, msg, desc)
            .buildBtn(<Button type={'default'} onClick={() => notification.close(key)}>Zamknij</Button>)
            .build();
    }

    getWarningConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps {
        return this.builder
            .buildRequiredProperties(DefaultNotificationConfigFactory.generateKey(), 'bottomRight', 3, msg, desc)
            .build();
    }
}