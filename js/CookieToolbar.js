	CookieToolbar = function() {
		var self = this;
		self.options = new Object();
		self.popupCheckBox = new Object();
	}

	CookieToolbar.init = function() {
		var options = CookieToolbar.options;

		var optin_bar = '<div id="optin_bar" style="'+options.toolbar_css+'"><div style="'+options.toolbar_content_css+'"><div style="'+options.toolbar_content_text_css+'">'+options.intro.text+options.intro.read_privacy+'</div><div style="'+options.toolbar_content_image_css+'"><img id="optin_button_normal" src="'+options.optin_button_normal.src+'" style="'+options.optin_button_normal.style+'" /><img id="optin_button_hover" src="'+options.optin_button_hover.src+'" style="'+options.optin_button_hover.style+'" /></div></div></div>';
		
		CookieToolbar.drawToolBars(optin_bar);
		CookieToolbar.initPopUp();

		if(Cookie.get("CRCookies") == "true") {
			CookieToolbar.addAnalytics();
			CookieToolbar.addSocialMedia();
		}
		else {
			CookieToolbar.removeSocialMedia();
		}

	}

	CookieToolbar.initMobile = function () {
		
		var options = CookieToolbar.options;

		jQuery.each(jQuery("."+options.control_cookie_link_class), function(index, control_element) {
			$(control_element).click(CookieToolbar.getMobileDialog);
		});

		if(Cookie.get("CRCookies") == null)
		{
			CookieToolbar.getMobileDialog();
		}
	}

	CookieToolbar.getMobileDialog = function(e) {
		if(e != undefined)
		{
			e.preventDefault();
		}

		var options = CookieToolbar.options;
		
		var action_message = (Cookie.get("CRCookies") == null || Cookie.get("CRCookies") == "false"  ) ? 
												options.mobile_dialog.optin_text : options.mobile_dialog.optout_text;
		
		
		if(Cookie.get("CRCookies") == null || Cookie.get("CRCookies") == "false")
		{
			if(Helper.getWindowPrompt(action_message)) {
				//alert("acceptCookies");
				CookieToolbar.acceptCookies() ;
			}
			else
			{
				//alert("denyCookies");
				CookieToolbar.denyCookies();
			}
		}
		else
		{
			if(Helper.getWindowPrompt(action_message)) {
				//alert("denyCookies when true");
				CookieToolbar.denyCookies();
			}

		}	


	}

	CookieToolbar.initPopUp = function() {
		
		var options = CookieToolbar.options;

		if(jQuery("#cookie_control_popup").size() <= 0)
		{
			jQuery("body").prepend("<div id='cookie_control_popup' style='z-index: 99999; display: none; text-align: center; padding-top: 20px; position: absolute; background: url(css/images/instelling-popup.png) no-repeat; width: 193px; height: 114px;'><div style=' float: right; margin-top: -15px; margin-right: 10px;'><a href='' id='close_popup' style='text-decoration: none; color: #000; font-size: 12px; font-family: Arial; font-weight: bold;'>x</a></div>"+options.popup_content_html+"<center><input type='checkbox' id='on_off' /></center></div>");
				
			jQuery("#close_popup").click(CookieToolbar.closePopUp);

		}

		jQuery.each(jQuery("."+options.control_cookie_link_class), function(index, control_element) {
				$(control_element).click(CookieToolbar.drawPopUp);
		});
	}

	
	CookieToolbar.drawPopUp = function(e) {
		if(e != undefined)
		{
			e.preventDefault();
		}
		
		var options = CookieToolbar.options;
		
		var control_element = jQuery(e.currentTarget);

		var $containerWidth = jQuery(control_element).width();
		var $containerHeight = jQuery(control_element).height();
      	var $offset = jQuery(control_element).offset();

  	  	var $tipWidth = jQuery("#cookie_control_popup").width();

      	var $tipHeight = jQuery("#cookie_control_popup").height();

					
		jQuery("#cookie_control_popup").css({
			"top":  $offset.top - $tipHeight ,
			"left": $offset.left - ($tipWidth - $containerWidth  ) /2 
		});

		jQuery("#cookie_control_popup").hide();
		jQuery("#cookie_control_popup").fadeIn();


		(Cookie.get("CRCookies")  ==  "true") ?  
			jQuery(":checkbox[id='on_off']").attr("checked", "checked") :  
			jQuery(":checkbox[id='on_off']").removeAttr("checked") ;


		CookieToolbar.popupCheckBox = (jQuery(":checkbox[id='on_off']")).iphoneStyle({
			checkedLabel: options.popup_on_text,
 			uncheckedLabel:  options.popup_off_text,
       		onChange: CookieToolbar.controlChanged
      	});
	}

	CookieToolbar.controlChanged = function(elem, value) {
		(value.toString() == "true") ?  CookieToolbar.acceptCookies() :  CookieToolbar.denyCookies() ;

		jQuery("#cookie_control_popup").fadeOut("slow", function() {
			jQuery("#optin_bar").hide();
			jQuery("#close_button").hide();
		});
	}

	CookieToolbar.closePopUp = function(e) {
		if(e != undefined)
		{
			e.preventDefault();
		}
		
		
		var popup = jQuery(e.currentTarget).parent().parent();
		jQuery(popup).stop().fadeOut("fast");
	}
	
	CookieToolbar.drawToolBars = function(optin_bar) {
		var options = CookieToolbar.options;
		
		jQuery("body").prepend(optin_bar);
		
		jQuery("body").prepend('<a id="close_button" href="" style="'+options.close_button.style+'"><img src="'+options.close_button.src+'" style="border: none;"  /></a>');
		
		jQuery("img#optin_button_hover, img#optin_button_normal").click(CookieToolbar.acceptCookies);
        jQuery("img#optout_button_hover,  img#optout_button_normal").click(CookieToolbar.denyCookies);
		jQuery("#close_button").click(CookieToolbar.denyCookies);
		
		if(options.fixed)
	    {
	      jQuery("#optin_bar").css("position", "fixed");
	      jQuery("#close_button").css("position", "fixed");
	    }
		
		if(Cookie.get("CRCookies") == "false" || Cookie.get("CRCookies") == "true" )
		{
			jQuery("#optin_bar, #close_button").hide();
		}
		
	    if(!Helper.isTouchDevice())
        {
			CookieToolbar.initMouseOver();
        }
	}

	CookieToolbar.acceptCookies = function() {
		
		var options = CookieToolbar.options;
		
		Cookie.set("CRCookies", "true", { expires: 'Thu, 31 Dec 2030 00:00:00 UTC' } );
		CookieToolbar.addAnalytics();
		CookieToolbar.addSocialMedia();
		
		if(options.desktop_check)
		{
			jQuery("#optin_bar").fadeOut();
			jQuery("#close_button").fadeOut();	
	
			CookieToolbar.initPopUp();
		}
		
	}
	
	CookieToolbar.denyCookies = function() {
		
		var options = CookieToolbar.options;

		Cookie.deleteAll(options.protectedCookies);
		Cookie.eraseCookieFromAllPaths("CRCookies");
		Cookie.set("CRCookies", "false", { expires: 'Thu, 31 Dec 2030 00:00:00 UTC' });
		CookieToolbar.removeSocialMedia();

		if(options.desktop_check)
		{
			jQuery("#optin_bar").fadeOut();
			jQuery("#close_button").fadeOut();

			CookieToolbar.initPopUp();
		}
	
	}

	CookieToolbar.initMouseOver = function() {
		
		jQuery("img#optin_button_normal").hover(function() { 
			 jQuery("img#optin_button_hover").show();
			 jQuery(this).hide();
			 jQuery("img#optin_button_hover").hover(function(e){}, function(e){
				 jQuery(this).hide();
				 jQuery("img#optin_button_normal").show();
			  });
		});
	}

	CookieToolbar.addAnalytics = function() {
		var options = CookieToolbar.options;
		jQuery.getScript("http://www.google-analytics.com/ga.js", function() {

	  		var GATracker = _gat._createTracker(options.google_tracker_code);

	  		GATracker._trackPageview();

		});
	}

	CookieToolbar.addSocialMedia = function() {
		var options = CookieToolbar.options;
		
		jQuery.each(options.social_media, function(index, social) {
            social.getScript();
            jQuery(social.plugin_container).html(social.plugin_html);
        });
	}
	
	CookieToolbar.removeSocialMedia = function() {
		var options = CookieToolbar.options;
		for(script_id in options.social_media)
		  {
			  jQuery("script#"+script_id).remove();
		  }
		  
		 jQuery.each(options.social_media, function(index, social) {
			  jQuery(social.plugin_container).html("");
		  });
	}

	CookieToolbar.setUp = function(options) {
		var self = this;
		// some global variables for this toolbar
		var _options = options; // the overriding options

		// defaults values for toolbar
		var _defaults = {
		google_track_code: "xxx-xxx-xx",
			fixed: false,
			desktop_check: true,
			mobile_check: false,
			countries: ["Netherlands"],
			toolbar_css: "background:url(css/images/cookieback.png) top left repeat; overflow: hidden; color:#FFFFFF; font-weight:bold; font-family:Arial, Helvetica, sans-serif; font-size:11px; top: 0; left: 0;  width: 100%; padding: 0; margin: 0; ",
			toolbar_content_css: "width:965px; margin:0 auto; padding:13px; overflow: hidden;",
			toolbar_content_text_css: "float:left; overflow:hidden; margin:0 30px 0 0;",
			toolbar_content_image_css: "width:92px; height:46px; float:left; overflow:hidden;",
			use_corner_button: false,
			corner_button: {
			  src_optout: "css/images/cookieuit.png",
			  src_optin: "css/images/cookieaan.png" ,
			  style: "position: fixed; top: 0; right: 0; z-index: 100; margin: 0; padding: 0; outline:none; border: none;" 
			},
			control_cookie_link_class: "cookie_control",
			use_popup: false,
			popup_on_text: "on",
			popup_off_text: "off",
			popup_content_html: "<div style='font-family: Arial; font-size: 11px; color: #000; margin-bottom: 10px;'><strong>Cookies in en uitschakelen</strong> <br /> Geef u voorkeur aan:</div>",
			close_button: {
			  src: "css/images/cookiesluiten.png",
			  style: "position: absolute; top: 0; right: 0; z-index: 100; margin: 3px 5px; outline:none; border: none;" 
			},
			intro: { 
			    text: "<span style='font-size: 16px; line-height: 25px;'>Wij maken gebruik van Google Analytics en Social Media.</span>",
			    read_privacy: '<br /><span style="font-size:12px;">Wij vragen u de nodige cookies eenmalig toe te staan. Meer informatie is beschikbaar in onze <a href="http://www.campagne.nl" style="color:#FFF; text-decoration:underline;">Privacy Statement.</a></span>'
			},
			mobile_dialog: {
			  optin_text : "Deze site gebruikt cookies om te zien hoe de site wordt gebruikt." ,
			  optout_text: "De cookies voor deze site uitzetten."
			},
			optin_button_normal: {
			  src: "css/images/cookiebutton.png",
			  style: "cursor: pointer;  border: none; float: right;"
			},
			optin_button_hover: {
			  src: "css/images/cookiebutton2.png",
			  style: "display:none; cursor: pointer; border: none; float: right;"
			},
			protectedCookies : [],
			load_social_media: true,
			social_media: {}
		};
		self.options = jQuery.extend({}, _defaults, _options);
		
	
		if(self.options.desktop_check)
		{
			CookieToolbar.init();	
		}

		if(self.options.mobile_check)
		{
			CookieToolbar.initMobile();	
		}
 	};

