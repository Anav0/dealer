import {CSSProperties, ReactNode} from "react";
import {ArgsProps} from "antd/lib/notification";

/* WZORZEC BUILDER */

/*
* Budowniczy konfiguracji pozwala na czytelniejsze instancjonowanie skomplikowanego obiektu typu ArgsProps.
* Rozbija on stworzenie instancji na kroki które są czytelne i spójne.
*/
export class NotificationConfigBuilder {
    /* ArgsProps jest to interfejs opisujący obiekt konfiguracyjny określający powiadomiania w frameworku UI nazwie antd */
    private readonly config: ArgsProps;

    constructor() {
        this.config = {} as ArgsProps;
    }

    buildRequiredProperties(key: string, placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | undefined, duration: number, message: string | ReactNode, description: string | ReactNode) {
        this.config.key = key;
        this.config.placement = placement;
        this.config.message = message;
        this.config.description = description;

        if (duration < 0)
            throw new Error('Notification duration is below zero')
        if (duration > 100)
            throw new Error('Notification duration is tooooo long for my liking')

        this.config.duration = duration;
        return this;
    }

    buildActions(onClose: () => void, onClick: () => void) {
        this.config.onClose = onClose;
        this.config.onClick = onClick;
        return this;
    }

    buildOffset(bottom: number, top: number) {
        this.config.bottom = bottom
        this.config.top = top
        return this;
    }

    buildStyle(style: CSSProperties, className: string) {
        this.config.style = style
        this.config.className = className
        return this;
    }

    buildIcons(icon: ReactNode, closeIcon: ReactNode) {
        this.config.icon = icon;
        this.config.closeIcon = closeIcon;
        return this;
    }

    buildBtn(btn: ReactNode) {
        this.config.btn = btn;
        return this;
    }

    build() {
        return this.config;
    }
}