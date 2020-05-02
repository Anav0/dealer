import axiosInstance from "./axios";
import {PaymentSessionResponse} from "./responses/PaymentSessionResponse";

export default {
    createPaymentSession: (productIds: string[], cancelUrl: string | undefined = undefined) => axiosInstance.post<PaymentSessionResponse>('/payment/create-session', {
        productIds,
        cancelUrl
    })
}