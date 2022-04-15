import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from "./PaymentForm"
const PUBLIC_KEY="pk_test_51KnIY0I0hpTP9L6LMWlsBJMbF4rEfjw1NVXQvItL4TcQfUzY7KEYOCMPjSek7fBUeM4qPrFbn6KoD6PbBQQNi8yE00BLFsIwK6"

const stripeTestPromise=loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
    </Elements>



  )
}
