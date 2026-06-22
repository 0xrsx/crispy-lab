import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { z } from "zod";

export function loadEnv(path: string) {
  const env = dotenv.config({ path });
  dotenvExpand.expand(env);
  return process.env;
}

export const cmsApiEnvSchema = z.object({
  CMS_API_PORT: z.coerce.number(),
  CMS_DB_HOST: z.string(),
  CMS_DB_PORT: z.coerce.number(),
  CMS_DB_USERNAME: z.string(),
  CMS_DB_PASSWORD: z.string(),
  CMS_DB_NAME: z.string(),
});

export type CmsApiEnv = z.infer<typeof cmsApiEnvSchema>;

export function createCmsApiConfig(env: Record<string, string | undefined>) {
  return cmsApiEnvSchema.parse(env);
}
