import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const dealRouter = router({
  // get all deals with no auth
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.deal.findMany();
  }),
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.deal.findUnique({
      where: {
        id: input,
      },
    });
  }),
  post: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        price: z.number(),
        value: z.number().optional(),
        image: z.string(),
        businessId: z.string(),
        businessName: z.string(),
        businessImage: z.string(),
        businessWebsite: z.string(),
        businessRating: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.deal.create({
        data: {
          title: input.title,
          description: input.description,
          price: input.price,
          value: input.value,
          image: input.image,
          businessId: input.businessId,
          businessName: input.businessName,
          businessImage: input.businessImage,
          businessWebsite: input.businessWebsite,
          businessRating: input.businessRating,
        },
      });
    }),
});
