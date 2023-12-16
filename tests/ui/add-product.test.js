const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://localhost:8080/add-Product');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  