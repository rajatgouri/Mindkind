import { type NextApiRequest, type NextApiResponse } from "next";

import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51KEGCmHVCDLnl35agP65uv18Tvxh6I7D5RuZZ343L8Axmg8fQY4HYVZAoCmCkKJZD3L5dFj9luySP8CAafChUqi10009JsWDsl",
  {
    apiVersion: "2022-11-15",
  }
);

const onboard = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const account = await stripe.accounts.create({
      type: "standard",
    });

    // Store the ID of the new Standard connected account.
    const accountID = account.id;

    const origin = `${req.headers.origin}`;

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "http://localhost:3000/stripe/refresh",
      return_url: "http://localhost:3000/stripe/return",
      type: "account_onboarding",
    });

    res.redirect(303, accountLink.url)
  }
   catch (error) {
    console.log(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};

export default onboard;
