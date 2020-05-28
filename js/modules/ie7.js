/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ha-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ha-comment': '&#xe900;',
		'ha-insert_chart': '&#xe901;',
		'ha-poll': '&#xe901;',
		'ha-assessment': '&#xe901;',
		'ha-envelope': '&#xe902;',
		'ha-feed': '&#xe903;',
		'ha-rss': '&#xe903;',
		'ha-instagram': '&#xe904;',
		'ha-youtube-play': '&#xe905;',
		'ha-twitter': '&#xe906;',
		'ha-book': '&#xe907;',
		'ha-film': '&#xe908;',
		'ha-home': '&#xe909;',
		'ha-facebook-square': '&#xe90a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ha-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
