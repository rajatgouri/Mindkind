import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
    // get user by id from auth
    getById: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findUnique({
            where: {
                id: ctx.session.user.id,
            },
        });
    }),
});
