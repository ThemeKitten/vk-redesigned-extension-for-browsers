var vkredesigned = function () {
	
	return {
		init: function() {
			if(gBrowser) {
				var container = gBrowser.tabContainer;  
				container.addEventListener("TabAttrModified", vkredesigned.check,false);   
			}
		},
		check: function() {
			if(content.document.location.href.search('vk.com') > -1) {
				content.document.addEventListener("DOMNodeInserted", vkredesigned.run, false);

				var mainCss=content.document.createElement("link");
				mainCss.setAttribute("type","text/css");
				mainCss.setAttribute("rel","stylesheet");
				mainCss.setAttribute("href","chrome://vkredesigned/content/main.css");
				content.document.getElementsByTagName("head")[0].appendChild(mainCss);
				
				var imagesCss=content.document.createElement("link");
				imagesCss.setAttribute("type","text/css");
				imagesCss.setAttribute("rel","stylesheet");
				imagesCss.setAttribute("href","chrome://vkredesigned/content/images.css");
				content.document.getElementsByTagName("head")[0].appendChild(imagesCss);

				var pagesCss=content.document.createElement("link");
				pagesCss.setAttribute("type","text/css");
				pagesCss.setAttribute("rel","stylesheet");
				pagesCss.setAttribute("href","chrome://vkredesigned/content/pages.css");
				content.document.getElementsByTagName("head")[0].appendChild(pagesCss);
			}
		}
	};
}();
window.addEventListener("load", vkredesigned.init, false);