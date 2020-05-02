import CartObserver from "misc/CartObserver";
import {Product} from "common/models/product";

// WZORZEC OBSERVATOR - Subject definition
class CartSubject {

    private observers: CartObserver[] = [];
    private cartItems: Product[] = [];
    private LOCAL_STORAGE_NAME = 'cart'

    constructor() {
        try {
            const savedCart = localStorage.getItem(this.LOCAL_STORAGE_NAME)
            if (savedCart)
                this.cartItems = JSON.parse(savedCart);
        } catch (error) {
            console.error(error)
        }
    }

    saveCartToLocalStorage() {
        try {
            localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(this.cartItems))
        } catch (error) {
            console.error(error)
        }
    }

    addItemToCart(item: Product) {
        if (!this.cartItems.some(existingItem => existingItem._id === item._id)) {
            this.cartItems.push(item)
            this.saveCartToLocalStorage()
            this.updateObservers()
        }
    }

    removeItemFromCart(item: Product) {
        this.cartItems = this.cartItems.filter(existingItem => existingItem._id !== item._id)
        this.saveCartToLocalStorage()
        this.updateObservers()
    }

    clearCart() {
        this.cartItems = []
        this.saveCartToLocalStorage()
        this.updateObservers()
    }

    addObserver(observer: CartObserver) {
        this.observers.push(observer);
        observer.update(this.cartItems);
    }

    removeObserver(observer: CartObserver) {
        this.observers = this.observers.filter(existingObserver => existingObserver !== observer)
    }

    updateObservers() {
        for (const observer of this.observers) {
            observer.update(this.cartItems)
        }
    }
}

// During app lifespan probably only one cart is necessary so only instance is exported
const instance = new CartSubject()
export default instance;