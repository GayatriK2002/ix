/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import path from 'path';
import defaultConfig from './playwright.config';

const __dirname = path.resolve();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config: PlaywrightTestConfig = {
  ...defaultConfig,
  testMatch: path.join(__dirname, 'src', '**', '*.ct.ts'),
  reporter: 'list',
  projects: [
    {
      name: `chromium`,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
  webServer: {
    command: 'pnpm run host-root',
    port: 8080,
  },
  retries: 3,
};

export default config;
