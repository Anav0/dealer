import CartObserver from "misc/CartObserver";
import {Product} from "common/models/product";

class CartSubject {

    private observers: CartObserver[] = [];
    private cartItems: Product[] = [];

    addItemToCart(item: Product) {
        if(!this.cartItems.some(existingItem => existingItem._id === item._id))
        {
            this.cartItems.push(item)
            this.updateObservers()
        }
    }

    removeItemFromCart(item: Product) {
        this.cartItems = this.cartItems.filter(existingItem => existingItem._id !== item._id)
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

    isInCart(productId: string){
        return this.cartItems.some((item)=>item._id===productId)
    }
}

const instance = new CartSubject()
export default instance;