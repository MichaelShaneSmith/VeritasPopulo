

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.active) {
		chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
			function(tabs){
				var url = new URL(tabs[0].url);
				var domain = url.hostname

				var rating_zero = {
					type: "basic",
					title: "Source: " + domain,
					message: "This Source is Neutral",
					iconUrl: "http://www.psdgraphics.com/file/red-number-0.jpg"
				}
				var rating_one = {
					type: "basic",
					title: "Source: " + domain,
					message: "This Source has a Slight Bias",
					iconUrl: "http://www.psdgraphics.com/file/red-number-1.jpg"
				}
				var rating_two = {
					type: "basic",
					title: "Source: " + domain,
					message: "This Source is Hyper-Partisan",
					iconUrl: "http://www.psdgraphics.com/file/red-number-2.jpg"
				}
				var rating_three = {
					type: "basic",
					title: "Source: " + domain,
					message: "This Source is Literal Garbage",
					iconUrl: "http://www.psdgraphics.com/file/red-number-3.jpg"
				}

				var rating_dict = {
					'www.breitbart.com': rating_two,
					'www.infowars.com': rating_three,
					'www.apnews.com': rating_zero
				}
				chrome.notifications.create(rating_dict[domain]);
			});
	}
})