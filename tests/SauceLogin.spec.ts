import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

});

test("Check Products label", async ({ page }) => {

    await expect(page.getByText("Products")).toBeVisible();

});

test("Check Sauce Labs Backpack label", async ({ page }) => {

    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();

});

test("Check Sauce Labs Bike Light label", async ({ page }) => {

    await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();

});

test("Check Sauce Labs Bolt T-Shirt label", async ({ page }) => {

    await expect(page.getByText("Sauce Labs Bolt T-Shirt")).toBeVisible();

});

test("Check Sauce Labs Fleece Jacket label", async ({ page }) => {

    await expect(page.getByText("Sauce Labs Fleece Jacket")).toBeVisible();

});

test("Check shopping cart", async ({ page }) => {

    await expect(page.locator(".shopping_cart_link")).toBeVisible();

});