import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DIRECT_URL: z.url().startsWith("postgres://"),
  },
  runtimeEnv: process.env,
});
