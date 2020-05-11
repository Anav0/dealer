import {Product} from "common/models/product";
import {ISubject} from "./ISubject";

// WZORZEC OBSERVATOR - Observer definition
export default interface IObserver{
    update(subject: ISubject): void
}