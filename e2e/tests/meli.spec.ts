import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3001/';

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl);
});

test('has home page', async ({ page }) => {
  await expect(page).toHaveTitle(/Bienvenido a Mercado Libre/);
});

test('search return products', async ({ page }) => {
  await page.getByTestId('search-input').fill('camisetas');
  await page.getByTestId('search-button').click();
  await expect(page.getByTestId('loading-element')).toBeVisible();
  await expect(page.getByLabel('Breadcrumb')).toBeVisible();
  await expect(page.getByTestId('item-list')).toBeVisible();
});

test('search product and navigate to product detail', async ({ page }) => {
  await page.getByTestId('search-input').fill('camisetas');
  await page.getByTestId('search-button').click();
  await expect(page.getByTestId('loading-element')).toBeVisible();
  await expect(page.getByLabel('Breadcrumb')).toBeVisible();
  await page.getByTestId('item-list').click();
  await expect(page.getByTestId('loading-element')).toBeVisible();
  await expect(page.getByTestId('item-detail')).toBeVisible();
  await expect(page.getByTestId('item-img-detail')).toBeVisible();
  await expect(page.getByTestId('item-sold-detail')).toBeVisible();
  await expect(page.getByTestId('item-title-detail')).toBeVisible();
  await expect(page.getByTestId('item-price-detail')).toBeVisible();
  await expect(page.getByTestId('item-button-detail')).toBeVisible();
  await expect(page.getByTestId('item-description-detail')).toBeVisible();
});
