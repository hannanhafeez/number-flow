import { test, expect } from '@playwright/test'

test('performs correctly', async ({ page, javaScriptEnabled, contextOptions }) => {
	// Check for hydration errors:
	const logs: string[] = []
	page.on('console', (msg) => logs.push(msg.text()))

	await page.goto('/can-animate')

	const def = page.getByTestId('default')
	const disrespect = page.getByTestId('disrespect-motion-preference')

	if (!javaScriptEnabled) {
		await expect(def).toHaveText('false')
		await expect(disrespect).toHaveText('false')
		return
	}

	await expect(def).toHaveText(String(contextOptions.reducedMotion !== 'reduce'))
	await expect(disrespect).toHaveText('true')

	expect(logs).toEqual([])
})