import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { priceIds } = req.body;
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
      }
    
      if (!Array.isArray(priceIds) || priceIds.length === 0) {
        return res.status(400).json({ error: 'Invalid priceIds' });
      }
    

    const successURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelURL = `${process.env.NEXT_URL}/`;

    const lineItems = priceIds.map((priceId) => ({
        price: priceId,
        quantity: 1,
      }));
    
    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successURL,
        cancel_url: cancelURL,
        mode: 'payment',
        line_items:lineItems,
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}