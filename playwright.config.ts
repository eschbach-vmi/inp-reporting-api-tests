import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Helper to encode basic auth
const getBasicAuthHeader = () => {
  const { SERVICE_USER_NAME, SERVICE_USER_PASSWORD } = process.env;
  if (!SERVICE_USER_NAME || !SERVICE_USER_PASSWORD) {
    throw new Error(
      "Missing SERVICE_USER_NAME or SERVICE_USER_PASSWORD in .env"
    );
  }

  return (
    "Basic " +
    Buffer.from(`${SERVICE_USER_NAME}:${SERVICE_USER_PASSWORD}`).toString(
      "base64"
    )
  );
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  timeout: 120000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { open: "never" }]], // Generates an HTML report
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */

    baseURL: process.env.BASE_URL ?? "https://722dev.sc.local:4433",
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      Authorization: getBasicAuthHeader(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
