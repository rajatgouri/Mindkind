import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { dealRouter } from "./deal";
import { userRouter } from "./user";
import { businessRouter } from "./business";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  deals: dealRouter,
  users: userRouter,
  businesses: businessRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
