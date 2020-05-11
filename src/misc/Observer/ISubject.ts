import IObserver from "misc/Observer/IObserver";
import {Product} from "common/models/product";
import notificationManager from "misc/Notification/ActiveNotificationManager";

// WZORZEC OBSERVATOR - Subject definition
export abstract class ISubject {

    protected observers: IObserver[] = [];

    abstract addObserver(observer: IObserver): void;

    abstract removeObserver(observer: IObserver): void;

    abstract updateObservers(): void;
}
