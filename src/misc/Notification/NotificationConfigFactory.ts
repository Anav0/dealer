import {ReactNode} from "react";
import {ArgsProps} from "antd/lib/notification";
import {NotificationConfigBuilder} from "./NotificationConfigBuilder";

export abstract class NotificationConfigFactory {

    builder: NotificationConfigBuilder

    constructor(builder: NotificationConfigBuilder) {
        this.builder = builder;
    }

    abstract getInfoConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps

    abstract getWarningConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps

    abstract getErrorConfig(msg: string | ReactNode, desc: string | ReactNode): ArgsProps

}