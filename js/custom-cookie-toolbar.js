head.js("js/jquery-1.7.1.js", "js/helper-functions.js", "js/iphone-style-checkboxes.js" , "js/CookieToolbar.js", function() {
	
	var language_settings = {
		"en" : {
			intro: { 
			    text: "<span style='font-size: 16px; line-height:25px;'>campagnerotterdam uses cookies to track how our site is used</span>",
			    read_privacy: "<br /><span style='font-size:12px;'>Please allow these cookies. Read our <a href='privacy.php' style='color:#FFF; text-decoration:underline;'>Privacy Statement</a> for more information</span>"
			},
			mobile_dialog: {
			  optin_text : "campagnerotterdam uses cookies to track how our site is used. Please allow these cookies." ,
			  optout_text: "Do you want to turn off cookies for this site?"
			},
			popup_content_html: "<div style='font-family: Arial; font-size: 11px; color: #000; margin-bottom: 10px;'><strong>Cookies configuration</strong> <br /> Please indicate your preference:</div>",
			popup_on_text: "on",
			popup_off_text: "off"
		},
		"nl" : {
			intro: { 
			    text: "<span style='font-size: 16px; line-height:25px;'>campagnerotterdam maakt gebruik van Google Analytics en Social Media.</span>",
			    read_privacy: "<br /><span style='font-size:12px;'>Wij vragen u de nodige cookies eenmalig toe te staan. Meer informatie is beschikbaar in onze <a href='privacy.php' style='color:#FFF; text-decoration:underline;'>Privacy Statement</a></span>"
			},
			mobile_dialog: {
			  optin_text : "campagnerotterdam maakt gebruik van Google Analytics en Social Media. Wij vragen u de nodige cookies eenmalig toe te staan." ,
			  optout_text: "Wilt u cookies uitzetten voor deze website?"
			},
			popup_content_html: "<div style='font-family: Arial; font-size: 11px; color: #000; margin-bottom: 10px;'><strong>Cookies in en uitschakelen</strong> <br /> Geef u voorkeur aan:</div>",
			popup_on_text: "aan",
			popup_off_text: "uit"
		}
	}
	var defaults = {
		google_track_code: "",
		fixed: false,
		desktop_check: true,
		mobile_check: false,
		social_media: {
			"facebook-jssdk": {
				getScript: function() {
					(function(d, s, id) {
					  var js, fjs = d.getElementsByTagName(s)[0];
					  if (d.getElementById(id)) return;
					  js = d.createElement(s); js.id = id;
					  js.src = "//connect.facebook.net/nl_NL/all.js#xfbml=1&appId=143564152409922";
					  fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));
				},
				plugin_container: "#facebook",
				plugin_html: '<div class="fb-like" data-send="true" data-width="450" data-show-faces="true"></div>'	
			}
		}
	}

	var setup_options = jQuery.extend({}, defaults, (Helper.getURLSegment(1) == "en")   ?  language_settings["en"]: language_settings["nl"] );
	
	CookieToolbar.setUp(setup_options);
});








