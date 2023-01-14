import { router, protectedProcedure } from "../trpc";

export const businessRouter = router({
    // get user by id from auth
    getByOwnerId: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.business.findFirst({
            where: {
                ownerId: ctx.session.user.id,
            },
        });
    }),
});
