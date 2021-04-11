require('dotenv').config();

(async () => {
  const browser = await require('puppeteer').launch()
  const page = await browser.newPage()
  await page.goto(process.env.URL)

  try{

	await page.focus('input')

	let data = process.env.APPLICATION_NUMBER.split("/");
	data.push(process.env.BIRTHDATE)

	for await (const value of data) {
	    await page.keyboard.type(value)
  		await page.keyboard.press("Tab");
	}

	await page.keyboard.press("Enter")
	await page.waitForTimeout(1000)

	let elementHandle = await page.$('iframe')
	let frame = await elementHandle.contentFrame()
	let content = await frame.$('.fnstatus')
	let value = await frame.evaluate(el => el.innerText, content);

	console.log('\n'+value+'\n');
  }
  catch(e) {
  	console.log('An error occured', e)
  }

  await browser.close();
})();