import { z } from 'zod'

export const serviceSchema = z.array(z.object({
	title: z.string().optional(),
	description: z.string().optional(),
})).optional()

export type ServiceSchema = z.infer<typeof serviceSchema>
