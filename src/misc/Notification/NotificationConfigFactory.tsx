import React, {ReactNode} from "react";
import {NotificationConfigBuilder} from "misc/Notification/NotificationConfigBuilder";
import {ArgsProps,} from "antd/lib/notification";
import {Button, notification} from "antd";

/* WZORZEC FABRYKA */

/*
* Pozwala na tworzenie konkretnych "modeli" instancji danej klasy
* W poniższym przypadku możemy tworzyć powtarzalne wzory konfiguracji powiadomień przez co późniejsza zmiana jest łatwa
* do przeprowadzenia.
* */
export abstract class NotificationConfigFactory {

    private static generateKey() {
        return `open${Date.now()}`;
    }

    static getErrorConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps {
        return new NotificationConfigBuilder()
            .buildRequiredProperties(this.generateKey(), 'bottomRight', 4, msg, desc)
            .build();
    }

    static getInfoConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps {
        const key = this.generateKey()
        return new NotificationConfigBuilder()
            .buildRequiredProperties(key, 'topRight', 2.5, msg, desc)
            .buildBtn(<Button type={'default'} onClick={() => notification.close(key)}>Zamknij</Button>)
            .build();
    }

    static getWarningConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps {
        return new NotificationConfigBuilder()
            .buildRequiredProperties(this.generateKey(), 'bottomRight', 3, msg, desc)
            .build();
    }
}