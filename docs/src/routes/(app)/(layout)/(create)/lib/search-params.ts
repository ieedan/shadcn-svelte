import { z } from "zod/v4";

export const CreateSearchParamsSchema = z.object({
	item: z.string().default("Home"),
});
