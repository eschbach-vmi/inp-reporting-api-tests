import { z } from "zod";

const environmentSchema = z.object({
  BASE_URL: z.string().url(),
  SERVICE_USER_NAME: z.string(),
  SERVICE_USER_PASSWORD: z.string(),
  MU_BATCH_STRUCTURE_ITEM_GUID: z.string().uuid(),
  MU_CAMPAIGN_STRUCTURE_ITEM_GUID: z.string().uuid(),
});

const environment = environmentSchema.parse(process.env);

export default environment;
