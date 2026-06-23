import { createCmsApiConfig, loadEnv } from '@crispy-lab/config';
import path from 'path';

loadEnv(path.join(process.cwd(), '.env.local'));
export const appConfig = createCmsApiConfig(process.env);
