!function(){var e={},t=function(t){var r,n,i=t.split("."),a=e;for(r="gi"===i[0]?1:0,n=i.length;n>r;r++)a=a[i[r]]=a[i[r]]||{};return a};!function(e){e.dom={postMessage:function(e){var t=Array.prototype.slice.call(arguments,1);e.contentWindow.postMessage.apply(e.contentWindow,t)},on:function(e,t,r){e.addEventListener?e.addEventListener(t,r):e.attachEvent("on"+t,r)},appendToHead:function(e){document.getElementsByTagName("head")[0].appendChild(e)},redirect:function(e){window.location=e}}}(t("gi.utils")),function(e,t){e.GiError=function(e,r){"number"!=typeof e&&(r=e,e=0),this.code=e,this.message=t.errorMessages[e].replace("<error>",r),this.error=r}}(t("gi.utils.error"),t("gi.resources")),function(e,t){e.buildQuery=function(e,t){for(var r="",n="?",i=0;i<t.length;i++){var a=e[t[i].from];void 0!==a&&0!==a.length&&(r+=n+t[i].to+"="+encodeURIComponent(a),n="&")}return r}}(t("gi.utils.query"),t("gi.resources.constants")),function(e,t){e.combine=function(){var t=function(t,r){var n=JSON.parse(JSON.stringify(t));for(var i in r)"object"==typeof r[i]?(t[i]=t[i]||{},n[i]=e.combine(t[i],r[i])):n[i]=r[i];return n};return function(){for(var e,r=arguments[0],n=1;n<arguments.length;n++)e=arguments[n],r=t(r,e);return r}}();var r=function(){return window.XMLHttpRequest?new XMLHttpRequest:window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null};e.getJson=function(e,t,n){var i;window.XDomainRequest?(i=new window.XDomainRequest,i.contentType="text/plain",i.onload=function(){t(JSON.parse(i.responseText))},i.onerror=n,i.ontimeout=n,i.open("GET",e),i.send()):(i=r(),i.open("GET",e,!0),i.onreadystatechange=function(){4===i.readyState&&(200===i.status?t(JSON.parse(i.responseText)):n(i))},i.send())},e.resize=function(e,t,r,n,i){var a,o,s=/^(\d*)(.*)$/,l=s.exec(r),c=s.exec(n),u=s.exec(e),d=s.exec(t),f=l[2]||"px",m=parseInt(u[1]),h=parseInt(d[1]),g=parseInt(l[1]),p=parseInt(c[1]),v={};return i?(a=m/h,o=h/m,m===h?(g>p?(v.width=p,v.height=p):(v.width=g,v.height=g),v.width=g,v.height=g*o):p>=g*o?(v.width=g,v.height=g*o):(v.height=p,v.width=p*a)):(v.width=g,v.height=p),v.width=Math.round(v.width)+f,v.height=Math.round(v.height)+f,v},e.capitalize=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},e.callEveryWithArguments=function(e,t){if(void 0!==e)for(var r=0;r<e.length;r++)e[r].apply(null,t)},e.flatten=function(t,r){var n={};for(var i in t)if(t.hasOwnProperty(i))if("object"==typeof t[i]){var a=e.flatten(t[i],r);for(var o in a)a.hasOwnProperty(o)&&(n[r?i+"."+o:o]=a[o])}else n[i]=t[i];return n},e.contains=function(e,t){return e.indexOf?e.indexOf(t)>-1:"object"==typeof e?e.hasOwnProperty(t):void 0},e.removeMissingProperties=function(e){for(var t in e)(null===e[t]||void 0===e[t])&&delete e[t]},e.map=function(e,t){for(var r in e)e.hasOwnProperty(r)&&(e[r]=t(e[r]));return e},e.encodeAll=function(t){return e.map(t,function(e){return"string"==typeof e?encodeURIComponent(e):e})}}(t("gi.utils.tools"),t("gi.utils.error")),function(e){e.isObject=function(e){return"object"==typeof e&&null!==e},e.isVerifiedString=function(e){return/^[a-zA-Z0-9-,._&=]+$/.test(e)&&"string"==typeof e},e.isString=function(e){return"string"==typeof e},e.isVerifiedUrl=function(e){return/^https?:\/\/([a-zA-Z0-9-_.:~]*(\.cydmodule\.com|\.necorp\.dom|\.casinomodule\.com|\.netentertainment\.com)|localhost:[0-9]*)/.test(e)},e.isAbsoluteUrl=function(e){return/^[a-zA-Z]+:\/\/.*\..*$/.test(e)},e.isBoolean=function(e){return"boolean"==typeof e},e.isCorrectSize=function(e){var t=/^\d*\.?\d+[px|em|%|pt|in|cm|mm|ex|pc|rem|vw|vh]*$/.test(e),r=parseFloat(e)<=1e4;return r&&t},e.isLanguage=function(t){return e.isString(t)&&2===t.length},e.isAnyOf=function(e,t){return e.indexOf(t)>=0},e.isFunction=function(e){return"function"==typeof e},e.isNumber=function(e){return"number"==typeof e},e.isExistingId=function(e){return null!==document.getElementById(e)},e.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},e.isDefined=function(e){return"undefined"!=typeof e},e.and=function(){var e=arguments;return function(t){for(var r=!0,n=0;n<e.length;n++)r=r&&e[n](t);return r}},e.or=function(){var e=arguments;return function(t){for(var r=!0,n=0;n<e.length;n++)r=r||e[n](t);return r}},e.not=function(e){return function(t){return!e(t)}},e.isCallback=e.or(e.not(e.isDefined),e.and(e.isDefined,e.isFunction))}(t("gi.utils.validators")),function(e){e.extendTimeout=3e4,e.directoryFilePath="gameinclusion/directory/directory.json",e.swfObjectPath="gameinclusion/library/swfobject.js",e.expressInstallPath="gameinclusion/library/expressInstall.swf",e.gameRulesPath="game/gamerules.jsp",e.gameHostPath="live_casino/",e.liveCasinoGameFamily="livecasino-games"}(t("gi.resources.constants")),function(e){e.defaultParameters={flashParams:{menu:!1,base:".",quality:"high",scale:"exactfit",allowscriptaccess:"always",ignoreminimumtime:!1,provisionSwfObject:!0,bgcolor:"#000000",allowFullScreen:!0,allowFullScreenInteractive:!0},targetElement:"neGameClient",language:"en",fullScreen:!1,enforceRatio:!0,casinoBrand:"default",debugMode:!1,defaultAudio:!0,walletMode:"basic",mobileParams:{},staticSharedUrl:"http://static-shared.casinomodule.com/gameclient_html/devicedetection/current"}}(t("gi.resources")),function(e){e.errorMessages={0:"Unknown error: <error>",1:'Value for "<error>" is invalid',2:'Launch parameter "<error>" does not exist',3:"Launch configuration is not an object",4:"Could not retrieve game configuration",5:"Could not retrieve game path",6:"Presentation type <error> is not supported by Game Inclusion",7:"Events are not available in this game",8:"Callback function was not provided",9:"This functionality is not supported by this game",10:"Wrong number of arguments",11:"No answer from game",12:"Functionality is not available in current game state",13:"SWFObject could not launch game",14:"Could not load SWFObject",15:"Failed to create game url",16:"Target element does not exist",17:'No value provided for mandatory parameter "<error>"',18:"Unable to launch HTML game",20:"Could not retrieve game path directory"}}(t("gi.resources")),function(e,t){e.parameterValidation={casinoBrand:t.isVerifiedString,customParameters:t.isString,debugMode:t.isBoolean,defaultAudio:t.isBoolean,enforceRatio:t.isBoolean,fullScreen:t.isBoolean,gameId:t.isVerifiedString,gameName:t.isVerifiedString,gameServer:t.isVerifiedUrl,height:t.isCorrectSize,helpUrl:t.isAbsoluteUrl,lang:t.isLanguage,language:t.isLanguage,operatorId:t.isVerifiedString,sessionId:t.isVerifiedString,staticServer:t.isVerifiedUrl,targetElement:t.isVerifiedString,walletMode:t.isAnyOf.bind(null,["basic","seamlesswallet","mixed"]),width:t.isCorrectSize,flashParams:t.isObject,"flashParams.accountType":t.isAnyOf.bind(null,["CASINOMODULE_WALLET","SEAMLESS_WALLET"]),"flashParams.allowFullScreen":t.isBoolean,"flashParams.allowFullScreenInteractive":t.isBoolean,"flashParams.allowscriptaccess":t.isAnyOf.bind(null,["always","samedomain","never"]),"flashParams.base":t.isString,"flashParams.bgcolor":t.isString,"flashParams.brandingLocale":t.isLanguage,"flashParams.casinoId":t.isVerifiedString,"flashParams.customLeaveTable":t.isBoolean,"flashParams.disableSendChat":t.isBoolean,"flashParams.gameHostURL":t.isVerifiedUrl,"flashParams.ignoreminimumtime":t.isBoolean,"flashParams.integrationTest":t.isBoolean,"flashParams.lobbyURL":t.isAbsoluteUrl,"flashParams.menu":t.isBoolean,"flashParams.provisionSwfObject":t.isBoolean,"flashParams.quality":t.isAnyOf.bind(null,["low","autolow","medium","high","autohigh","best"]),"flashParams.scale":t.isAnyOf.bind(null,["default","exactfit","noborder","noscale"]),"flashParams.showMiniLobby":t.isBoolean,"flashParams.tableId":t.isVerifiedString,"flashParams.wmode":t.isAnyOf.bind(null,["opaque","direct","window","transparent","gpu"]),mobileParams:t.isObject,"mobileParams.depositAvailable":t.isBoolean,"mobileParams.keepAliveInterval":t.isNumber,"mobileParams.keepAliveURL":t.isAbsoluteUrl,"mobileParams.lobbyUrl":t.isString}}(t("gi.resources"),t("gi.utils.validators")),function(e,t,r,n,i){var a=function(e,t){for(var r in t)if(t.hasOwnProperty(r)&&!e[r](t[r]))throw new i.GiError(1,r)};e.Base=function(e,o,s){var l=this;o=o||{},l.hide=function(){e.style.visibility="hidden"},l.show=function(){e.style.visibility="visible"},l.resize=function(r,n){var i=t.resize(o.width,o.height,r,n,o.enforceRatio);e.style.width=i.width,e.style.height=i.height},l.addEventListener=function(e,t,r){try{a({eventName:n.isString,callback:n.isFunction,error:n.isCallback},{eventName:e,callback:t,error:r}),o.netentExtendSupported?(void 0===s[e]&&(s[e]=[]),s[e].push(t)):n.isFunction(r)&&r(new i.GiError(7))}catch(l){n.isDefined(r)&&r(l instanceof i.GiError?l:new i.GiError(l))}},l.removeEventListener=function(e,t){var r,n=s[e];void 0!==n&&(r=n.indexOf(t),r>=0&&n.splice(r,1))},o.fullScreen&&r.on(window,"resize",function(){var e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;l.resize(e,t)})},e.Base.prototype.get=function(e,t){a({property:n.isString,success:n.isFunction},{property:e,success:t})},e.Base.prototype.set=function(e,t,r){a({property:n.isString,value:n.and(n.isDefined,n.not(n.isFunction)),success:n.isCallback},{property:e,value:t,success:r})},e.Base.prototype.call=function(e,t,r){a({action:n.isString,args:n.isArray,success:n.isCallback},{action:e,args:t,success:r})}}(t("gi.extend"),t("gi.utils.tools"),t("gi.utils.dom"),t("gi.utils.validators"),t("gi.utils.error")),function(e,t,r,n){e.Flash=function(i,a){var o={},s={},l=this;e.Base.call(this,i,a,o);var c=function(e,t){var r,a=i[e];if("function"!=typeof a)throw 9;return r=a.apply(i,t),n.isArray(r)?r[1]:void 0};l.get=function(i,a,o){try{e.Base.prototype.get.call(this,i,a,o);var s=c("get"+t.capitalize(i),[]);a(s)}catch(l){n.isDefined(o)&&o(l instanceof r.GiError?l:new r.GiError(l))}},l.set=function(i,a,o,s){try{e.Base.prototype.set.call(this,i,a,o,s),c("set"+t.capitalize(i),[a]),o()}catch(l){n.isDefined(s)&&s(l instanceof r.GiError?l:new r.GiError(l))}},l.call=function(i,a,o,l){try{if(e.Base.prototype.call.call(this,i,a,o,l),t.contains(s,i))s[i](i,a,o,l);else{var u=c(i,a);if("success"===u)o();else{if("missingArgument"===u)throw 10;if(u)throw u}}}catch(d){n.isDefined(l)&&l(d instanceof r.GiError?d:new r.GiError(d))}},window.gameEventHandler=function(e){var r=o[e[0]],n=e.slice(1);t.callEveryWithArguments(r,n)},window.error=function(e){window.gameEventHandler(["gameError",0,e])},s.reloadBalance=function(e,t,r){c("reloadbalance",[]),r()},s.captureScreenshot=function(e,t,r){window.displayFlashScreenshot=function(e){r(e)},c("captureScreenshot",t)}}}(t("gi.extend"),t("gi.utils.tools"),t("gi.utils.error"),t("gi.utils.validators")),function(e,t,r,n,i,a){e.Html=function(o,s){var l,c,u,d,f,m,h=0,g={},p={},v=function(){};e.Base.call(this,o,s,p),u=function(e){var t=Array.prototype.slice.call(arguments,1),r=p[e];n.callEveryWithArguments(r,t)},d=function(e){var t=g[e];return t?(clearTimeout(t.timeout),delete g[e]):t={success:v,error:v},t},f=function(e){var t=d(e),r=t.success,n=Array.prototype.slice.call(arguments,1);r.apply(null,n)},m=function(e,t,r){var n=d(e),a=n.error;a(new i.GiError(t,r))},c=function(e){var t=e.data[0],r=e.data.slice(1);"success"===t?f.apply(null,r):"error"===t?m.apply(null,r):"event"===t&&u.apply(null,r)},l=function(e,n,a,s,l){try{h+=1,g[h]={success:s||v,error:l||v,timeout:setTimeout(function(e){return function(){m(e,11)}}(h),r.extendTimeout)},t.postMessage(o,[e,h,n].concat(a),"*")}catch(c){l(new i.GiError(c))}},this.get=function(t,r,n){try{e.Base.prototype.get.call(this,t,r,n),l("get",t,[],r,n)}catch(o){a.isDefined(n)&&n(o instanceof i.GiError?o:new i.GiError(o))}},this.set=function(t,r,n,o){try{e.Base.prototype.set.call(this,t,r,n,o),l("set",t,[r],n,o)}catch(s){a.isDefined(o)&&o(s instanceof i.GiError?s:new i.GiError(s))}},this.call=function(t,r,n,o){try{e.Base.prototype.call.call(this,t,r,n,o),l("call",t,r,n,o)}catch(s){a.isDefined(o)&&o(s instanceof i.GiError?s:new i.GiError(s))}},t.on(window,"message",c)}}(t("gi.extend"),t("gi.utils.dom"),t("gi.resources.constants"),t("gi.utils.tools"),t("gi.utils.error"),t("gi.utils.validators")),function(e,t,r,n,i){var a,o,s,l,c,u,d,f,m,h,g={};a=function(e,r){var n=t.parameterValidation[e];if(n&&!n(r))throw new i.GiError(1,e);try{Object.getOwnPropertyNames(r)}catch(a){return}},o=function(e){if(!n.isObject(e))throw 3;if(void 0===e.sessionId)throw new i.GiError(17,"sessionId");if(void 0===e.gameId&&void 0===e.gameName)throw new i.GiError(17,"gameName");if(void 0===e.staticServer)throw new i.GiError(17,"staticServer");if(void 0===e.gameServer)throw new i.GiError(17,"gameServer");var t=r.flatten(e,!0);for(var o in t)t.hasOwnProperty(o)&&a(o,t[o])},u=function(e){e.width=e.defaultWidth,e.height=e.defaultHeight,e.flashParams={quality:e.defaultResolution,wmode:e.defaultWmode},n.isString(e.netentExtendSupported)&&(e.netentExtendSupported="true"===e.netentExtendSupported),delete e.defaultWidth,delete e.defaultHeight,delete e.defaultResolution,delete e.defaultWmode},l=function(e,t,a,o){var s,l,d;if(t.gameId=e[t.gameName]||t.gameId,!t.gameId)throw 5;if("_sw"===t.gameId.slice(-3)&&(t.walletMode="seamlesswallet",t.gameId=t.gameId.slice(0,-3)),s=e[t.gameId],!s)throw 5;s=t.casinoBrand?s.replace("<casinobrand>",t.casinoBrand):s.replace("<casinobrand>/",""),s="/"===s[0]?s.slice(1):s,n.isAbsoluteUrl(s)||(s=t.staticServer+s),l=function(e){try{if(!n.isObject(e))throw 4;e.gamePath=s.replace(t.gameId+".json",""),u(e),c(e,t,a,o)}catch(r){o(r instanceof i.GiError?r:new i.GiError(r))}},d=function(e){o(e instanceof i.GiError?e:new i.GiError(4,e))},r.getJson(s,l,d)},s=function(e,a,o){var s,c;c=function(t){try{if(!n.isObject(t))throw 5;l(t,e,a,o)}catch(r){r instanceof i.GiError&&o(r),o(new i.GiError(r))}},s=e.staticServer+t.constants.directoryFilePath;var u=function(e){o(e instanceof i.GiError?e:new i.GiError(20,e))};r.getJson(s,c,u)},f=function(e,t){e.fullScreen&&(e.width=(window.innerWidth||document.documentElement.clientWidth)+"px",e.height=(window.innerHeight||document.documentElement.clientHeight)+"px");var n=r.resize(t.width,t.height,e.width,e.height,e.enforceRatio);e.width=n.width,e.height=n.height},d=function(e,n){var i=r.combine(t.defaultParameters,e,n);return"direct"===e.flashParams.wmode&&(i.flashParams.wmode="direct"),"seamlesswallet"===i.walletMode&&(i.gameId=i.gameId+"_sw"),f(i,e,n),i},c=function(e,t,r,a){var o,s,l,c;if(o=d(e,t),"redirect"!==e.technologyPresentation&&!n.isExistingId(o.targetElement))throw 16;if(s=function(e){r(new c.extend(e,o))},l=g[o.technologyPresentation],!l||!(c=l[o.technologyType]))throw new i.GiError(6,o.technologyPresentation+" "+o.technologyType);c.launch(o,s,a)},m=function(e){var t=/^.*\.[a-zA-Z]*\/(.*)$/,r=t.exec(e);return null!==r&&(e=e.replace(r[1],"")),e},h=function(e){var t=["staticServer","gameServer"];e.staticServer=m(e.staticServer);for(var r=0;r<t.length;r++){var n=e[t[r]];"/"!==n[n.length-1]&&(e[t[r]]=n+"/")}},e.launch=function(e,t,r){t=t||function(){},r=r||function(){};try{o(e),h(e),s(e,t,r)}catch(n){r(n instanceof i.GiError?n:new i.GiError(n))}},e.addTechnologyType=function(e,t,r,n){void 0===g[e]&&(g[e]={}),g[e][t]={launch:r,extend:n}}}(t("gi.launch.launcher"),t("gi.resources"),t("gi.utils.tools"),t("gi.utils.validators"),t("gi.utils.error")),function(e,t,r,n,i){var a,o,s,l,c,u,d,f="gi-swfobject";a=function(e){var t=e.helpUrl,n="directories=no,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,width=440,height=420",i=e.gameServer+r.gameRulesPath,a="?game="+e.gameId+"&lang="+e.language,o="rules";return t=t||i+a,encodeURIComponent('javascript:(function() { var remote = window.open("'+t+'", "'+o+'", "'+n+'"); }());')},o=function(e){var t={server:e.gameServer,helpURL:a(e),closeURL:"javascript:window.close()",lang:e.language,gameId:e.gameId,gameurl:e.legacyGameMainFileName,sessid:e.sessionId,doDebug:e.debugMode,fullscreen:e.fullScreen,disableAudio:!e.defaultAudio,ignoreminimumtime:e.flashParams.ignoreminimumtime,customParameters:encodeURIComponent(e.customParameters)};return e.gameFamily===r.liveCasinoGameFamily&&d(t,e),i.removeMissingProperties(t),t},d=function(e,t){e.accountType=t.flashParams.accountType,e.brandingLocale=t.flashParams.brandingLocale,e.casinoId=t.flashParams.casinoId,e.customLeaveTable=t.flashParams.customLeaveTable,e.disableSendChat=t.flashParams.disableSendChat,e.gameHostURL=t.staticServer+r.gameHostPath,e.integrationTest=t.flashParams.integrationTest,e.jsonRequestURL=t.gameServer,e.lobbyURL=t.flashParams.lobbyURL,e.tableId=t.flashParams.tableId,e.sessionid=t.sessionId,e.showMiniLobby=t.flashParams.showMiniLobby,e.wmode=t.flashParams.wmode},s=function(e){var t={menu:e.flashParams.menu,base:e.flashParams.base,quality:e.flashParams.quality,scale:e.flashParams.scale,allowscriptaccess:e.flashParams.allowscriptaccess,wmode:e.flashParams.wmode,bgcolor:e.flashParams.bgcolor,allowFullScreen:e.flashParams.allowFullScreen,allowFullScreenInteractive:e.flashParams.allowFullScreenInteractive};return i.removeMissingProperties(t),i.encodeAll(t),t},l=function(e,t,i){var a=e.gamePath+e.relativeLoaderUrl.replace("<language>",e.language),l=e.targetElement,c=e.width,u=e.height,d=e.technologyVersion,f=e.staticServer+r.expressInstallPath,m=o(e),h=s(e),g={},p=function(e){e.success?t():i(new n.GiError(13))};window.swfobject.embedSWF(a,l,c,u,d,f,m,h,g,p)},c=function(e,i,a){var o=document.createElement("script");o.setAttribute("src",e.staticServer+r.swfObjectPath),o.setAttribute("id",f),o.onload=function(){l(e,i,a)},o.onerror=function(){a(new n.GiError(14))},t.appendToHead(o)},u=function(){return null!==document.getElementById(f)},e.launch=function(e,t,r){try{var i=function(){var r=document.getElementById(e.targetElement);t(r)};e.flashParams.provisionSwfObject&&!u()?c(e,i,r):l(e,i,r)}catch(a){r(new n.GiError(a))}}}(t("gi.launch.methods.embed.flash"),t("gi.utils.dom"),t("gi.resources.constants"),t("gi.utils.error"),t("gi.utils.tools")),function(e,t,r,n){var i=[{to:"server",from:"gameServer"},{to:"lang",from:"language"},{to:"sessId",from:"sessionId"},{to:"gameId",from:"gameId"},{to:"operatorId",from:"casinoBrand"},{to:"historyURL",from:"historyUrl"},{to:"staticsharedurl",from:"staticSharedUrl"},{to:"customParameters",from:"customParameters"}],a=function(e){var n=e.gamePath+e.relativeLoaderUrl+t.buildQuery(e,i);if(!r.isAbsoluteUrl(n))throw 15;return n},o=function(e,t,r,i,a,o){var s=document.createElement("iframe");return s.setAttribute("id",e),s.setAttribute("src",t),s.setAttribute("frameBorder","0"),s.style.width="number"==typeof r?r+"px":r,s.style.height="number"==typeof i?i+"px":i,s.onload=function(){a(s)},s.onerror=function(){o(new n.GiError(18))},s},s=function(e,t){var r=document.getElementById(e);return r.parentNode.replaceChild(t,r),t};e.launch=function(e,t,r){try{var i=a(e),l=o(e.targetElement,i,e.width,e.height,t,r);s(e.targetElement,l)}catch(c){r(new n.GiError(c))}}}(t("gi.launch.methods.embed.html"),t("gi.utils.query"),t("gi.utils.validators"),t("gi.utils.error")),function(e,t,r,n,i,a){var o=[{to:"server",from:"gameServer"},{to:"lang",from:"language"},{to:"sessId",from:"sessionId"},{to:"gameId",from:"gameId"},{to:"operatorId",from:"casinoBrand"},{to:"lobbyURL",from:"lobbyUrl"},{to:"disableAudio",from:"disableAudio"},{to:"keepAliveURL",from:"keepAliveURL"},{to:"keepAliveInterval",from:"keepAliveInterval"},{to:"depositAvailable",from:"depositAvailable"},{to:"customParameters",from:"customParameters"}],s=function(e){var n=e.gamePath+e.relativeLoaderUrl+t.buildQuery(i.flatten(e),o);if(!r.isAbsoluteUrl(n))throw 15;return n};e.launch=function(e,t,r){try{n.redirect(s(e))}catch(i){r(new a.GiError(i))}}}(t("gi.launch.methods.redirect.html"),t("gi.utils.query"),t("gi.utils.validators"),t("gi.utils.dom"),t("gi.utils.tools"),t("gi.utils.error")),function(e,t,r){e.addTechnologyType("embed","html",t.embed.html.launch,r.Html),e.addTechnologyType("embed","flash",t.embed.flash.launch,r.Flash),e.addTechnologyType("redirect","html",t.redirect.html.launch),window.netent={launch:e.launch}}(t("gi.launch.launcher"),t("gi.launch.methods"),t("gi.extend"))}();