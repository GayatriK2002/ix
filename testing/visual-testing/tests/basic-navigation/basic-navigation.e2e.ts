/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest.describe('basic navigation large', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    await page.setViewportSize(viewPorts.lg);
    await page.waitForTimeout(500);

    await page.locator('ix-menu ix-menu-expand-icon').click();
    await page.waitForSelector('ix-menu ix-menu-expand-icon.expanded');

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('content width', async ({ page }) => {
    await page.goto('basic-navigation/content-width');
    await page.setViewportSize(viewPorts.lg);
    await page.waitForTimeout(500);

    await page.locator('ix-menu ix-menu-expand-icon').click();
    await page.waitForSelector('ix-menu ix-menu-expand-icon.expanded');

    await expect(page.getByText('Example content')).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});

regressionTest.describe('basic navigation', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    await page.setViewportSize(viewPorts.md);

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('content width', async ({ page }) => {
    await page.goto('basic-navigation/content-width');
    await page.setViewportSize(viewPorts.md);
    await page.waitForTimeout(500);

    await expect(page.getByText('Example content')).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('expanded', async ({ page }) => {
    await page.goto('basic-navigation/basic');
    await page.setViewportSize(viewPorts.md);
    await page.waitForTimeout(500);

    await page.locator('ix-menu ix-menu-expand-icon').click();
    await page.waitForSelector('ix-menu ix-menu-expand-icon.expanded');

    await expect(
      page.locator('ix-menu').locator('.menu.expanded')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});

regressionTest.describe('basic navigation mobile', () => {
  regressionTest('mobile', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize(viewPorts.sm);

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('mobile expanded', async ({ page }) => {
    regressionTest.skip(
      !!process.env['CI'],
      'TODO: Fix flaky behavior on github runner'
    );

    await page.goto('basic-navigation/mobile');
    await page.setViewportSize(viewPorts.sm);

    await page.waitForTimeout(500);
    const menuElement = await page.waitForSelector(
      'ix-application-header ix-menu-expand-icon'
    );
    await menuElement.click();

    await expect(
      page.locator('ix-menu').locator('.menu.expanded')
    ).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('mobile overlay', async ({ page }) => {
    await page.goto('basic-navigation/mobile');
    await page.setViewportSize(viewPorts.sm);

    await page.waitForTimeout(500);
    const menuElement = await page.waitForSelector(
      'ix-application-header ix-menu-expand-icon'
    );
    await menuElement.click();
    await expect(
      page.locator('ix-menu').locator('.menu.expanded')
    ).toBeVisible();

    const settingsButton = await page.waitForSelector('ix-menu-item#settings');
    await settingsButton.click();

    const settings = page.locator('ix-menu-settings');
    const settingsTitle = settings.locator('h2');

    await expect(settings).toBeVisible();
    await expect(settingsTitle).toBeVisible();

    await page.waitForTimeout(1000);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });

  regressionTest('mobile expanded overlay', async ({ page, mount }) => {
    await mount(
      `
      <ix-basic-navigation application-name="Test">
        <div slot="logo">LOGO</div>
        <ix-menu>
          <ix-menu-item>Test 1</ix-menu-item>
          <ix-menu-item>Test 1</ix-menu-item>
          <ix-menu-item>Test 1</ix-menu-item>
          <ix-menu-settings>
            <ix-menu-settings-item>Item 1</ix-menu-settings-item>
            <ix-menu-settings-item>Item 1</ix-menu-settings-item>
            <ix-menu-settings-item>Item 1</ix-menu-settings-item>
          </ix-menu-settings>
        </ix-menu>
        <div class="debug-element"></div>
      </ix-basic-navigation>
      `
    );

    await page.setViewportSize(viewPorts.sm);

    // Animation
    await page.waitForTimeout(500);

    const toggleMenuButton = page.locator('ix-menu-expand-icon').nth(0);
    await expect(toggleMenuButton).toBeVisible();
    await toggleMenuButton.click();

    const menu = page.locator('ix-menu');
    await expect(menu).toHaveClass(/expanded/);

    // Animation
    await page.waitForTimeout(500);

    const settings = page.locator('ix-menu-item#settings');
    await settings.click({
      force: true,
    });
    // Animation
    await page.waitForTimeout(500);
    await expect(menu).not.toHaveClass(/expanded/);

    const settingsOverlay = page.locator('ix-menu-settings');
    await expect(settingsOverlay).toBeVisible();

    await toggleMenuButton.click();
    await expect(menu).toHaveClass(/expanded/);

    // Animation
    await page.waitForTimeout(500);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  });
});
