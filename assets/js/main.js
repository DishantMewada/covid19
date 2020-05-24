/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population1 = data.locations[225].country_population;
		let update1 = data.locations[225].last_updated;
		let confirmedCases1 = data.locations[225].latest.confirmed;
		let deaths1 = data.locations[225].latest.deaths;

		document.getElementById('population1').innerHTML = population1.toLocaleString('en');
		document.getElementById('update1').innerHTML = update1.substr(0, 10);
		document.getElementById('cases1').innerHTML = confirmedCases1.toLocaleString('en');
		document.getElementById('deaths1').innerHTML = deaths1.toLocaleString('en');
		document.getElementById('percent1').innerHTML = ((Number(deaths1)/Number(confirmedCases1))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

        let population2 = data.locations[28].country_population;
		let update2 = data.locations[28].last_updated;
		let confirmedCases2 = data.locations[28].latest.confirmed;
		let deaths2 = data.locations[28].latest.deaths;

		document.getElementById('population2').innerHTML = population2.toLocaleString('en');
		document.getElementById('update2').innerHTML = update2.substr(0, 10);
		document.getElementById('cases2').innerHTML = confirmedCases2.toLocaleString('en');
		document.getElementById('deaths2').innerHTML = deaths2.toLocaleString('en');
		document.getElementById('percent2').innerHTML = ((Number(deaths2)/Number(confirmedCases2))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
        
        let population3 = data.locations[187].country_population;
		let update3 = data.locations[187].last_updated;
		let confirmedCases3 = data.locations[187].latest.confirmed;
		let deaths3 = data.locations[187].latest.deaths;

		document.getElementById('population3').innerHTML = population3.toLocaleString('en');
		document.getElementById('update3').innerHTML = update3.substr(0, 10);
		document.getElementById('cases3').innerHTML = confirmedCases3.toLocaleString('en');
		document.getElementById('deaths3').innerHTML = deaths3.toLocaleString('en');
		document.getElementById('percent3').innerHTML = ((Number(deaths3)/Number(confirmedCases3))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
        
        let population4 = data.locations[201].country_population;
		let update4 = data.locations[201].last_updated;
		let confirmedCases4 = data.locations[201].latest.confirmed;
		let deaths4 = data.locations[201].latest.deaths;

		document.getElementById('population4').innerHTML = population4.toLocaleString('en');
		document.getElementById('update4').innerHTML = update4.substr(0, 10);
		document.getElementById('cases4').innerHTML = confirmedCases4.toLocaleString('en');
		document.getElementById('deaths4').innerHTML = deaths4.toLocaleString('en');
		document.getElementById('percent4').innerHTML = ((Number(deaths4)/Number(confirmedCases4))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
        
        let population5 = data.locations[217].country_population;
		let update5 = data.locations[217].last_updated;
		let confirmedCases5 = data.locations[217].latest.confirmed;
		let deaths5 = data.locations[217].latest.deaths;

		document.getElementById('population5').innerHTML = population5.toLocaleString('en');
		document.getElementById('update5').innerHTML = update5.substr(0, 10);
		document.getElementById('cases5').innerHTML = confirmedCases5.toLocaleString('en');
		document.getElementById('deaths5').innerHTML = deaths5.toLocaleString('en');
		document.getElementById('percent5').innerHTML = ((Number(deaths5)/Number(confirmedCases5))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
        
        let population6 = data.locations[137].country_population;
		let update6 = data.locations[137].last_updated;
		let confirmedCases6 = data.locations[137].latest.confirmed;
		let deaths6 = data.locations[137].latest.deaths;

		document.getElementById('population6').innerHTML = population6.toLocaleString('en');
		document.getElementById('update6').innerHTML = update6.substr(0, 10);
		document.getElementById('cases6').innerHTML = confirmedCases6.toLocaleString('en');
		document.getElementById('deaths6').innerHTML = deaths6.toLocaleString('en');
		document.getElementById('percent6').innerHTML = ((Number(deaths6)/Number(confirmedCases6))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
        
        let population7 = data.locations[258].country_population;
		let update7 = data.locations[258].last_updated;
		let confirmedCases7 = data.locations[258].latest.confirmed;
		let deaths7 = data.locations[258].latest.deaths;

		document.getElementById('population7').innerHTML = population7.toLocaleString('en');
		document.getElementById('update7').innerHTML = update7.substr(0, 10);
		document.getElementById('cases7').innerHTML = confirmedCases7.toLocaleString('en');
		document.getElementById('deaths7').innerHTML = deaths7.toLocaleString('en');
		document.getElementById('percent7').innerHTML = ((Number(deaths6)/Number(confirmedCases6))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
        
        let population8 = data.locations[120].country_population;
		let update8 = data.locations[120].last_updated;
		let confirmedCases8 = data.locations[120].latest.confirmed;
		let deaths8 = data.locations[120].latest.deaths;

		document.getElementById('population8').innerHTML = population8.toLocaleString('en');
		document.getElementById('update8').innerHTML = update8.substr(0, 10);
		document.getElementById('cases8').innerHTML = confirmedCases8.toLocaleString('en');
		document.getElementById('deaths8').innerHTML = deaths8.toLocaleString('en');
		document.getElementById('percent8').innerHTML = ((Number(deaths6)/Number(confirmedCases6))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";
	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);
