import { z } from "zod";

const environmentSchema = z.object({
  BASE_URL: z.string().url(),
  SERVICE_USER_NAME: z.string(),
  SERVICE_USER_PASSWORD: z.string(),
  REPORT_START_DATE_TIME: z.string(),
  MU_STRUCTURE_ITEM_GUID: z.string().uuid(),
});

const environment = environmentSchema.parse(process.env);

export default environment;
