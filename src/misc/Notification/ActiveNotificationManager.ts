import {AntdNotificationManager} from "./AntdNotificationManager";
import {NotificationManager} from "./NotificationManager";
import {DefaultNotificationConfigFactory} from "./DefaultNotificationConfigFactory";
import {NotificationConfigBuilder} from "./NotificationConfigBuilder";

const active: NotificationManager = new AntdNotificationManager(new DefaultNotificationConfigFactory(new NotificationConfigBuilder()))

export default active;