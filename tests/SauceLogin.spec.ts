import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

});

test("Check Products label", { tag: "@smoke" }, async ({ page }) => {

    await expect(page.getByText("Products")).toBeVisible();

});

test("Check shopping cart", { tag: "@smoke" }, async ({ page }) => {

    await expect(page.locator(".shopping_cart_link")).toBeVisible();

});

test("Check Sauce Labs Backpack label", { tag: "@sanity" }, async ({ page }) => {

    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();

});

test("Check Sauce Labs Bike Light label", { tag: "@sanity" }, async ({ page }) => {

    await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();

});

test("Check Sauce Labs Fleece Jacket label", { tag: "@regression" }, async ({ page }) => {

    await expect(page.getByText("Sauce Labs Fleece Jacket")).toBeVisible();

});