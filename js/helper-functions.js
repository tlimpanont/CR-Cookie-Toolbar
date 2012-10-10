(function(window) {
	
	Helper = function() { 
		var self = this;
	}; 
	       
   Helper.prototype.isMobile = function() {
  	/** HELPER FUNCTION TO CHECK WHETER IS A MOBILE DEVICE **/
       (function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
	   /** END HELPER FUNCTION TO CHECK WHETER IS A MOBILE DEVICE **/

   		return jQuery.browser.mobile;
   }

   Helper.prototype.isTouchDevice = function() {
   		/** HELPER FUNCTION TO CHECK WHETER IS A TOUCH DEVICE **/
	 
          try {  
            document.createEvent("TouchEvent");  
            return true;  
          } catch (e) {  
            return false;  
          }  
      
		/** END HELPER FUNCTION TO CHECK WHETER IS A TOUCH DEVICE **/
   }

	Helper.prototype.getUrlVars = function()  {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
	}

	Helper.prototype.getURLSegment = function(num)  {
	   var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
	   var pathArray = window.location.pathname.split( '/' );
	   return pathArray[num];
	}

  Helper.prototype.getWindowPrompt = function(action_message) {
     return window.confirm(action_message)
  }

	
	window.Helper = new Helper();

})(window);


/**
 * Small Cookies JavaScript Helper
 *
 * Source code available at http://github.com/tdd/cookies-js-helper
 *
 * Copyright (c) 2010 Christophe Porteneuve <tdd@tddsworld.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

(function(scope) {

  var _toString = Object.prototype.toString;
  function isDate(o)   { return '[object Date]'   == _toString.call(o); }
  function isRegExp(o) { return '[object RegExp]' == _toString.call(o); }
  
  var Cookie = {
    
    /**
     * Cookie.get(name) -> String | null
     * - name (String): The name of the cookie you want to fetch.
     *
     * Returns the cookie’s value for the passed name, or +null+ if the cookie
     * does not exist.
     */
    get: function get(name) {
      return Cookie.has(name) ? Cookie.list()[name] : null;
    },
    
    /**
     * Cookie.has(name) -> Boolean
     * - name (String): The name of the cookie you want to test the presence of.
     *
     * Returns whether the cookie for that name exists or not.
     */
    has: function has(name) {
      return new RegExp("(?:;\\s*|^)" + encodeURIComponent(name) + '=').test(document.cookie);
    },
    
    /**
     * Cookie.list([nameRegExp]) -> { name: value[, name: value …]}
     * - nameRegExp (RegExp) an optional `RegExp` to filter cookie names.  If anything but
     *   an actual `RegExp` is passed, this argument is ignored.
     *
     * Returns a key-value dictionary of existing cookies for the current page.
     * Note the ordering of names is basically browser-dependent (as in, JS-engine-dependent).
     */
    list: function list(nameRegExp) {
      var pairs = document.cookie.split(';'), pair, result = {};
      for (var index = 0, len = pairs.length; index < len; ++index) {
        pair = pairs[index].split('=');
        pair[0] = pair[0].replace(/^\s+|\s+$/, '');
        if (!isRegExp(nameRegExp) || nameRegExp.test(pair[0]))
          result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
      return result;
    },
    
    /**
     * Cookie.remove(name[, options]) -> String
     * - name (String): The name of the cookie you want to remove.
     * - options (Object): An optional set of settings for cookie removal. See Cookie.set for details.
     *
     * Removes the cookie value for the name you passed, honoring potential filtering options.
     * Returns the actual cookie string written to the underlying `document.cookie` property.
     */
    remove: function remove(name, options) {
      var opt2 = {};
      for (var key in (options || {})) opt2[key] = options[key];
      opt2.expires = new Date(0);
      opt2.maxAge = -1;
      return Cookie.set(name, null, opt2);
    },
    
    /**
     * Cookie.set(name, value, [, options]) -> String
     * - name (String): The name of the cookie you want to set.
     * - value (Object): The value for the cookie you want to set.  It will undergo a basic `toString()`
     *     transform, so if it's a complex object you likely want to, say, use its JSON representation instead.
     * - options (Object): An optional set of settings for cookie setting. See below.
     *
     * Sets a cookie for the name and value you passed, honoring potential filtering options.
     * Returns the actual cookie string written to the underlying `document.cookie` property.
     *
     * Possible options are:
     *
     * * `path` sets the path within the current domain. Defaults to the current path. Minimum is '/'.
     *   Ignored if blank.
     * * `domain` sets the (sub)domain this cookie pertains to. At the shortest, the current root
     *   domain (e.g. 'example.com'), but can also be any depth of subdomain up to the current one
     *   (e.g. 'www.demo.example.com'). Ignored if blank.
     * * `maxAge` / `max_age` / `max-age` is one way to define when the cookie should expire; this
     *   is a time-to-live in _seconds_. Any of the three keys is accepted, in this order of
     *   decreasing priority (first found key short-circuits the latter ones).
     * * `expires` is the traditional way of setting a cookie expiry, using an absolute GMT date/time
     *   string with an RFC2822 format (e.g. 'Tue, 02 Feb 2010 22:04:47 GMT').  You can also pass
     *   a `Date` object set appropriately, in which case its `toUTCString()` method will be used.
     * * `secure` defines whether the cookie should only be passed through HTTPS connections.  It's
     *   used as `Boolean`-equivalent (so zero, `null`, `undefined` and the empty string are all false).
     */
    set: function set(name, value, options) {
      options = options || {};
      var def = [encodeURIComponent(name) + '=' + encodeURIComponent(value)];
      if (options.path) def.push('path=' + options.path);
      if (options.domain) def.push('domain=' + options.domain);
      var maxAge = 'maxAge' in options ? options.maxAge :
        ('max_age' in options ? options.max_age : options['max-age']), maxAgeNbr;
      if ('undefined' != typeof maxAge && 'null' != typeof maxAge && (!isNaN(maxAgeNbr = parseFloat(maxAge))))
        def.push('max-age=' + maxAgeNbr);
      var expires = isDate(options.expires) ? options.expires.toUTCString() : options.expires;
      if (expires) def.push('expires=' + expires);
      if (options.secure) def.push('secure');
      def = def.join(';');
      document.cookie = def;
      return def;
    },
	
	deleteAll: function deleteAll(protected_cookies) {
		
		var domain      = document.domain;
		var domain2     = document.domain.replace (/^www\./, "");
		var domain3     = document.domain.replace (/^(\w+\.)+?(\w+\.\w+)$/, "$2");;
		var cookieList  = document.cookie.split (';');

		//--- Loop through cookies and delete them.
		for (var J = cookieList.length - 1;   J >= 0;  --J) {
			
			
			var cookieName = cookieList[J].replace (/\s*(\w+)=.+$/, "$1");
			
      if(protected_cookies.length > 0)
      {
        if(protected_cookies.indexOf(cookieName) == -1)
        {
          //--- To delete a cookie, set its expiration date to a past value.
          document.cookie = cookieName + "=;expires=expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=;path=/;expires=expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=; path=/; domain=" + domain  + "; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=; path=/; domain=" + domain2 + "; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=; path=/; domain=" + domain3 + "; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
        }   
      }
      else
      {
         //--- To delete a cookie, set its expiration date to a past value.
          document.cookie = cookieName + "=;expires=expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=;path=/;expires=expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=; path=/; domain=" + domain  + "; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=; path=/; domain=" + domain2 + "; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          document.cookie = cookieName + "=; path=/; domain=" + domain3 + "; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
      }
			
		}
	},
  eraseCookieFromAllPaths: function eraseCookieFromAllPaths(name) {
      // This function will attempt to remove a cookie from all paths.
      var pathBits = location.pathname.split('/');
      var pathCurrent = ' path=';

      // do a simple pathless delete first.
      document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';

      for (var i = 0; i < pathBits.length; i++) {
          pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
          document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;' + pathCurrent + ';';
      }
  },
    /**
     * Cookie.test() -> Boolean
     * 
     * Tests whether cookies are enabled or not.
     */
    test: function test() {
      var key = '70ab3d396b85e670f25b93be05e027e4eb655b71', value = 'Élodie Jaubert';
      Cookie.remove(key);
      Cookie.set(key, value);
      var result = value == Cookie.get(key);
      Cookie.remove(key);
      return result;
    }
  };
  scope.Cookie = Cookie;
})(window);

