import {ISubject} from "./ISubject";
import notificationManager from "../Notification/ActiveNotificationManager";
import {Product} from "../../common/models/product";
import IObserver from "./IObserver";

export class CartSubject extends ISubject {
    get cartItems(): Product[] {
        return this._cartItems;
    }
    private _cartItems: Product[] = [];
    private LOCAL_STORAGE_NAME = 'cart'

    constructor() {
        super()
        try {
            const savedCart = localStorage.getItem(this.LOCAL_STORAGE_NAME)
            if (savedCart)
                this._cartItems = JSON.parse(savedCart);
        } catch (error) {
            console.error(error)
            notificationManager.showError("Ups", "Nie udało się zapisać koszyka w zasobach przeglądarki")
        }
    }

    saveCartToLocalStorage() {
        try {
            localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(this._cartItems))
        } catch (error) {
            notificationManager.showError("Ups", "Nie udało się zapisać koszyka w zasobach przeglądarki")
        }
    }

    addItemToCart(item: Product) {
        if (!this._cartItems.some(existingItem => existingItem._id === item._id)) {
            this._cartItems.push(item)
            this.saveCartToLocalStorage()
            this.updateObservers()
        }
    }

    removeItemFromCart(item: Product) {
        this._cartItems = this._cartItems.filter(existingItem => existingItem._id !== item._id)
        this.saveCartToLocalStorage()
        this.updateObservers()
    }

    clearCart() {
        this._cartItems = []
        this.saveCartToLocalStorage()
        this.updateObservers()
    }

    addObserver(observer: IObserver) {
        this.observers.push(observer);
        observer.update(this);
    }

    removeObserver(observer: IObserver) {
        this.observers = this.observers.filter(existingObserver => existingObserver !== observer)
    }

    updateObservers() {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }
}

const instance = new CartSubject()
export default instance;