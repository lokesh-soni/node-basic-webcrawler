const request = require('request');
const cheerio = require('cheerio');

request('https://wb.gov.in/portal/web/guest/press-releases', (err, res, html) => {
	if(!err && res.statusCode == 200) {
		const $ = cheerio.load(html);
		const heading = $('.taglib-search-iterator tr');
		// console.log(heading.html());
		// console.log(heading.text());
		// console.log(heading.val());
		heading.each((i, el) => {
			const tdMap = $(el).find('td');
			// console.log(tdMap);
			if(tdMap[0] != undefined) {
				if($(tdMap[1]).text() == ' 2/22/19 ') {
					console.log($(tdMap[0]).text());
					// console.log($(tdMap[1]).text()[0]);
					// console.log($(tdMap[1]).text()[1]);
					// console.log($(tdMap[1]).text()[7]);
					// console.log($(tdMap[1]).text()[8]);
					console.log($(tdMap[1]).text());
					console.log('------------------');
				}

			}
			// console.log(item);

		});
	}
});