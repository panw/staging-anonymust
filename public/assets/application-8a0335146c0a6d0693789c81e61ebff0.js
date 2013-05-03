/**
 * jQuery Masonry v2.1.08
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
/*jshint browser: true, curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, strict: true, undef: true */
/*global jQuery: false */
(function(e,t,n){"use strict";var r=t.event,i;r.special.smartresize={setup:function(){t(this).bind("resize",r.special.smartresize.handler)},teardown:function(){t(this).unbind("resize",r.special.smartresize.handler)},handler:function(e,t){var n=this,s=arguments;e.type="smartresize",i&&clearTimeout(i),i=setTimeout(function(){r.dispatch.apply(n,s)},t==="execAsap"?0:100)}},t.fn.smartresize=function(e){return e?this.bind("smartresize",e):this.trigger("smartresize",["execAsap"])},t.Mason=function(e,n){this.element=t(n),this._create(e),this._init()},t.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},t.Mason.prototype={_filterFindBricks:function(e){var t=this.options.itemSelector;return t?e.filter(t).add(e.find(t)):e},_getBricks:function(e){var t=this._filterFindBricks(e).css({position:"absolute"}).addClass("masonry-brick");return t},_create:function(n){this.options=t.extend(!0,{},t.Mason.settings,n),this.styleQueue=[];var r=this.element[0].style;this.originalStyle={height:r.height||""};var i=this.options.containerStyle;for(var s in i)this.originalStyle[s]=r[s]||"";this.element.css(i),this.horizontalDirection=this.options.isRTL?"right":"left";var o=this.element.css("padding-"+this.horizontalDirection),u=this.element.css("padding-top");this.offset={x:o?parseInt(o,10):0,y:u?parseInt(u,10):0},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var a=this;setTimeout(function(){a.element.addClass("masonry")},0),this.options.isResizable&&t(e).bind("smartresize.masonry",function(){a.resize()}),this.reloadItems()},_init:function(e){this._getColumns(),this._reLayout(e)},option:function(e,n){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))},layout:function(e,t){for(var n=0,r=e.length;n<r;n++)this._placeBrick(e[n]);var i={};i.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var s=0;n=this.cols;while(--n){if(this.colYs[n]!==0)break;s++}i.width=(this.cols-s)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:i});var o=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",u=this.options.animationOptions,a;for(n=0,r=this.styleQueue.length;n<r;n++)a=this.styleQueue[n],a.$el[o](a.style,u);this.styleQueue=[],t&&t.call(e),this.isLaidOut=!0},_getColumns:function(){var e=this.options.isFitWidth?this.element.parent():this.element,t=e.width();this.columnWidth=this.isFluid?this.options.columnWidth(t):this.options.columnWidth||this.$bricks.outerWidth(!0)||t,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((t+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(e){var n=t(e),r,i,s,o,u;r=Math.ceil(n.outerWidth(!0)/this.columnWidth),r=Math.min(r,this.cols);if(r===1)s=this.colYs;else{i=this.cols+1-r,s=[];for(u=0;u<i;u++)o=this.colYs.slice(u,u+r),s[u]=Math.max.apply(Math,o)}var a=Math.min.apply(Math,s),f=0;for(var l=0,c=s.length;l<c;l++)if(s[l]===a){f=l;break}var h={top:a+this.offset.y};h[this.horizontalDirection]=this.columnWidth*f+this.offset.x,this.styleQueue.push({$el:n,style:h});var p=a+n.outerHeight(!0),d=this.cols+1-c;for(l=0;l<d;l++)this.colYs[f+l]=p},resize:function(){var e=this.cols;this._getColumns(),(this.isFluid||this.cols!==e)&&this._reLayout()},_reLayout:function(e){var t=this.cols;this.colYs=[];while(t--)this.colYs.push(0);this.layout(this.$bricks,e)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(e){this.reloadItems(),this._init(e)},appended:function(e,t,n){if(t){this._filterFindBricks(e).css({top:this.element.height()});var r=this;setTimeout(function(){r._appended(e,n)},1)}else this._appended(e,n)},_appended:function(e,t){var n=this._getBricks(e);this.$bricks=this.$bricks.add(n),this.layout(n,t)},remove:function(e){this.$bricks=this.$bricks.not(e),e.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var n=this.element[0].style;for(var r in this.originalStyle)n[r]=this.originalStyle[r];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),t(e).unbind(".masonry")}},t.fn.imagesLoaded=function(e){function u(){e.call(n,r)}function a(e){var n=e.target;n.src!==s&&t.inArray(n,o)===-1&&(o.push(n),--i<=0&&(setTimeout(u),r.unbind(".imagesLoaded",a)))}var n=this,r=n.find("img").add(n.filter("img")),i=r.length,s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",o=[];return i||u(),r.bind("load.imagesLoaded error.imagesLoaded",a).each(function(){var e=this.src;this.src=s,this.src=e}),n};var s=function(t){e.console&&e.console.error(t)};t.fn.masonry=function(e){if(typeof e=="string"){var n=Array.prototype.slice.call(arguments,1);this.each(function(){var r=t.data(this,"masonry");if(!r){s("cannot call methods on masonry prior to initialization; attempted to call method '"+e+"'");return}if(!t.isFunction(r[e])||e.charAt(0)==="_"){s("no such method '"+e+"' for masonry instance");return}r[e].apply(r,n)})}else this.each(function(){var n=t.data(this,"masonry");n?(n.option(e||{}),n._init()):t.data(this,"masonry",new t.Mason(e,this))});return this}})(window,jQuery),function(e){e.fn.drag=function(t,n,r){var i=typeof t=="string"?t:"",s=e.isFunction(t)?t:e.isFunction(n)?n:null;return i.indexOf("drag")!==0&&(i="drag"+i),r=(t==s?n:r)||{},s?this.bind(i,r,s):this.trigger(i)};var t=e.event,n=t.special,r=n.drag={defaults:{which:1,distance:0,not:":input",handle:null,relative:!1,drop:!0,click:!1},datakey:"dragdata",noBubble:!0,add:function(t){var n=e.data(this,r.datakey),i=t.data||{};n.related+=1,e.each(r.defaults,function(e,t){i[e]!==undefined&&(n[e]=i[e])})},remove:function(){e.data(this,r.datakey).related-=1},setup:function(){if(e.data(this,r.datakey))return;var n=e.extend({related:0},r.defaults);e.data(this,r.datakey,n),t.add(this,"touchstart mousedown",r.init,n),this.attachEvent&&this.attachEvent("ondragstart",r.dontstart)},teardown:function(){var n=e.data(this,r.datakey)||{};if(n.related)return;e.removeData(this,r.datakey),t.remove(this,"touchstart mousedown",r.init),r.textselect(!0),this.detachEvent&&this.detachEvent("ondragstart",r.dontstart)},init:function(i){if(r.touched)return;var s=i.data,o;if(i.which!=0&&s.which>0&&i.which!=s.which)return;if(e(i.target).is(s.not))return;if(s.handle&&!e(i.target).closest(s.handle,i.currentTarget).length)return;r.touched=i.type=="touchstart"?this:null,s.propagates=1,s.mousedown=this,s.interactions=[r.interaction(this,s)],s.target=i.target,s.pageX=i.pageX,s.pageY=i.pageY,s.dragging=null,o=r.hijack(i,"draginit",s);if(!s.propagates)return;o=r.flatten(o),o&&o.length&&(s.interactions=[],e.each(o,function(){s.interactions.push(r.interaction(this,s))})),s.propagates=s.interactions.length,s.drop!==!1&&n.drop&&n.drop.handler(i,s),r.textselect(!1),r.touched?t.add(r.touched,"touchmove touchend",r.handler,s):t.add(document,"mousemove mouseup",r.handler,s);if(!r.touched||s.live)return!1},interaction:function(t,n){var i=e(t)[n.relative?"position":"offset"]()||{top:0,left:0};return{drag:t,callback:new r.callback,droppable:[],offset:i}},handler:function(i){var s=i.data;switch(i.type){case!s.dragging&&"touchmove":i.preventDefault();case!s.dragging&&"mousemove":if(Math.pow(i.pageX-s.pageX,2)+Math.pow(i.pageY-s.pageY,2)<Math.pow(s.distance,2))break;i.target=s.target,r.hijack(i,"dragstart",s),s.propagates&&(s.dragging=!0);case"touchmove":i.preventDefault();case"mousemove":if(s.dragging){r.hijack(i,"drag",s);if(s.propagates){s.drop!==!1&&n.drop&&n.drop.handler(i,s);break}i.type="mouseup"};case"touchend":case"mouseup":default:r.touched?t.remove(r.touched,"touchmove touchend",r.handler):t.remove(document,"mousemove mouseup",r.handler),s.dragging&&(s.drop!==!1&&n.drop&&n.drop.handler(i,s),r.hijack(i,"dragend",s)),r.textselect(!0),s.click===!1&&s.dragging&&e.data(s.mousedown,"suppress.click",(new Date).getTime()+5),s.dragging=r.touched=!1}},hijack:function(n,i,s,o,u){if(!s)return;var a={event:n.originalEvent,type:n.type},f=i.indexOf("drop")?"drag":"drop",l,c=o||0,h,p,d,v=isNaN(o)?s.interactions.length:o;n.type=i,n.originalEvent=null,s.results=[];do if(h=s.interactions[c]){if(i!=="dragend"&&h.cancelled)continue;d=r.properties(n,s,h),h.results=[],e(u||h[f]||s.droppable).each(function(o,u){d.target=u,n.isPropagationStopped=function(){return!1},l=u?t.dispatch.call(u,n,d):null,l===!1?(f=="drag"&&(h.cancelled=!0,s.propagates-=1),i=="drop"&&(h[f][o]=null)):i=="dropinit"&&h.droppable.push(r.element(l)||u),i=="dragstart"&&(h.proxy=e(r.element(l)||h.drag)[0]),h.results.push(l),delete n.result;if(i!=="dropinit")return l}),s.results[c]=r.flatten(h.results),i=="dropinit"&&(h.droppable=r.flatten(h.droppable)),i=="dragstart"&&!h.cancelled&&d.update()}while(++c<v);return n.type=a.type,n.originalEvent=a.event,r.flatten(s.results)},properties:function(e,t,n){var i=n.callback;return i.drag=n.drag,i.proxy=n.proxy||n.drag,i.startX=t.pageX,i.startY=t.pageY,i.deltaX=e.pageX-t.pageX,i.deltaY=e.pageY-t.pageY,i.originalX=n.offset.left,i.originalY=n.offset.top,i.offsetX=i.originalX+i.deltaX,i.offsetY=i.originalY+i.deltaY,i.drop=r.flatten((n.drop||[]).slice()),i.available=r.flatten((n.droppable||[]).slice()),i},element:function(e){if(e&&(e.jquery||e.nodeType==1))return e},flatten:function(t){return e.map(t,function(t){return t&&t.jquery?e.makeArray(t):t&&t.length?r.flatten(t):t})},textselect:function(t){e(document)[t?"unbind":"bind"]("selectstart",r.dontstart).css("MozUserSelect",t?"":"none"),document.unselectable=t?"off":"on"},dontstart:function(){return!1},callback:function(){}};r.callback.prototype={update:function(){n.drop&&this.available.length&&e.each(this.available,function(e){n.drop.locate(this,e)})}};var i=t.dispatch;t.dispatch=function(t){if(e.data(this,"suppress."+t.type)-(new Date).getTime()>0){e.removeData(this,"suppress."+t.type);return}return i.apply(this,arguments)};var s=t.fixHooks.touchstart=t.fixHooks.touchmove=t.fixHooks.touchend=t.fixHooks.touchcancel={props:"clientX clientY pageX pageY screenX screenY".split(" "),filter:function(t,n){if(n){var r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0]||null;r&&e.each(s.props,function(e,n){t[n]=r[n]})}return t}};n.draginit=n.dragstart=n.dragend=r}(jQuery),function(e,t){var n="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(r){function i(){var t=e(h),n=e(p);u&&(p.length?u.reject(f,t,n):u.resolve(f)),e.isFunction(r)&&r.call(o,f,t,n)}function s(t,r){t.src===n||-1!==e.inArray(t,l)||(l.push(t),r?p.push(t):h.push(t),e.data(t,"imagesLoaded",{isBroken:r,src:t.src}),a&&u.notifyWith(e(t),[r,f,e(h),e(p)]),f.length===l.length&&(setTimeout(i),f.unbind(".imagesLoaded")))}var o=this,u=e.isFunction(e.Deferred)?e.Deferred():0,a=e.isFunction(u.notify),f=o.find("img").add(o.filter("img")),l=[],h=[],p=[];return f.length?f.bind("load.imagesLoaded error.imagesLoaded",function(e){s(e.target,"error"===e.type)}).each(function(r,i){var o=i.src,u=e.data(i,"imagesLoaded");if(u&&u.src===o)s(i,u.isBroken);else if(i.complete&&i.naturalWidth!==t)s(i,0===i.naturalWidth||0===i.naturalHeight);else if(i.readyState||i.complete)i.src=n,i.src=o}):i(),u?u.promise(o):o}}(jQuery),function(e,t,n){t.infinitescroll=function(n,r,i){this.element=t(i),this._create(n,r)||(this.failed=!0)},t.infinitescroll.defaults={loading:{finished:n,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:image/gif;base64,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",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:n},state:{isDuringAjax:!1,isInvalidPage:!1,isDestroyed:!1,isDone:!1,isPaused:!1,currPage:1},debug:!1,behavior:n,binder:t(e),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:!1,pathParse:n,dataType:"html",appendCallback:!0,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:n,path:n,prefill:!1},t.infinitescroll.prototype={_binding:function(t){var r=this,i=r.options;i.v="2.0b2.120520";if(!!i.behavior&&this["_binding_"+i.behavior]!==n){this["_binding_"+i.behavior].call(this);return}if(t!=="bind"&&t!=="unbind")return this._debug("Binding value  "+t+" not valid"),!1;t==="unbind"?this.options.binder.unbind("smartscroll.infscr."+r.options.infid):this.options.binder[t]("smartscroll.infscr."+r.options.infid,function(){r.scroll()}),this._debug("Binding",t)},_create:function(i,s){var u=t.extend(!0,{},t.infinitescroll.defaults,i);this.options=u;var a=t(e),f=this;if(!f._validate(i))return!1;var l=t(u.nextSelector).attr("href");if(!l)return this._debug("Navigation selector not found"),!1;u.path=u.path||this._determinepath(l),u.contentSelector=u.contentSelector||this.element,u.loading.selector=u.loading.selector||u.contentSelector,u.loading.msg=u.loading.msg||t('<div id="infscr-loading"><img alt="Loading..." src="'+u.loading.img+'" /><div>'+u.loading.msgText+"</div></div>"),(new Image).src=u.loading.img,u.pixelsFromNavToBottom===n&&(u.pixelsFromNavToBottom=t(document).height()-t(u.navSelector).offset().top);var c=this;return u.loading.start=u.loading.start||function(){t(u.navSelector).hide(),u.loading.msg.appendTo(u.loading.selector).show(u.loading.speed,t.proxy(function(){this.beginAjax(u)},c))},u.loading.finished=u.loading.finished||function(){u.loading.msg.fadeOut(u.loading.speed)},u.callback=function(e,r,i){!!u.behavior&&e["_callback_"+u.behavior]!==n&&e["_callback_"+u.behavior].call(t(u.contentSelector)[0],r,i),s&&s.call(t(u.contentSelector)[0],r,u,i),u.prefill&&a.bind("resize.infinite-scroll",e._prefill)},i.debug&&Function.prototype.bind&&(typeof console=="object"||typeof console=="function")&&typeof console.log=="object"&&["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind),this._setup(),u.prefill&&this._prefill(),!0},_prefill:function(){function u(){return i.height()<=s.height()}var r=this,i=t(document),s=t(e);this._prefill=function(){u()&&r.scroll(),s.bind("resize.infinite-scroll",function(){u()&&(s.unbind("resize.infinite-scroll"),r.scroll())})},this._prefill()},_debug:function(){if(!0!==this.options.debug)return;typeof console!="undefined"&&typeof console.log=="function"?Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]=="string"?console.log(Array.prototype.slice.call(arguments).toString()):console.log(Array.prototype.slice.call(arguments)):!Function.prototype.bind&&typeof console!="undefined"&&typeof console.log=="object"&&Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))},_determinepath:function(t){var r=this.options;if(!r.behavior||this["_determinepath_"+r.behavior]===n){if(!r.pathParse){if(t.match(/^(.*?)\b2\b(.*?$)/))t=t.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(t.match(/^(.*?)2(.*?$)/)){if(t.match(/^(.*?page=)2(\/.*|$)/))return t=t.match(/^(.*?page=)2(\/.*|$)/).slice(1),t;t=t.match(/^(.*?)2(.*?$)/).slice(1)}else{if(t.match(/^(.*?page=)1(\/.*|$)/))return t=t.match(/^(.*?page=)1(\/.*|$)/).slice(1),t;this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."),r.state.isInvalidPage=!0}return this._debug("determinePath",t),t}return this._debug("pathParse manual"),r.pathParse(t,this.options.state.currPage+1)}return this["_determinepath_"+r.behavior].call(this,t)},_error:function(t){var r=this.options;if(!!r.behavior&&this["_error_"+r.behavior]!==n){this["_error_"+r.behavior].call(this,t);return}t!=="destroy"&&t!=="end"&&(t="unknown"),this._debug("Error",t),t==="end"&&this._showdonemsg(),r.state.isDone=!0,r.state.currPage=1,r.state.isPaused=!1,this._binding("unbind")},_loadcallback:function(i,s,u){var a=this.options,f=this.options.callback,l=a.state.isDone?"done":a.appendCallback?"append":"no-append",c;if(!!a.behavior&&this["_loadcallback_"+a.behavior]!==n){this["_loadcallback_"+a.behavior].call(this,i,s);return}switch(l){case"done":return this._showdonemsg(),!1;case"no-append":a.dataType==="html"&&(s="<div>"+s+"</div>",s=t(s).find(a.itemSelector));break;case"append":var h=i.children();if(h.length===0)return this._error("end");c=document.createDocumentFragment();while(i[0].firstChild)c.appendChild(i[0].firstChild);this._debug("contentSelector",t(a.contentSelector)[0]),t(a.contentSelector)[0].appendChild(c),s=h.get()}a.loading.finished.call(t(a.contentSelector)[0],a);if(a.animate){var p=t(e).scrollTop()+t("#infscr-loading").height()+a.extraScrollPx+"px";t("html,body").animate({scrollTop:p},800,function(){a.state.isDuringAjax=!1})}a.animate||(a.state.isDuringAjax=!1),f(this,s,u),a.prefill&&this._prefill()},_nearbottom:function(){var i=this.options,s=0+t(document).height()-i.binder.scrollTop()-t(e).height();return!i.behavior||this["_nearbottom_"+i.behavior]===n?(this._debug("math:",s,i.pixelsFromNavToBottom),s-i.bufferPx<i.pixelsFromNavToBottom):this["_nearbottom_"+i.behavior].call(this)},_pausing:function(t){var r=this.options;if(!r.behavior||this["_pausing_"+r.behavior]===n){t!=="pause"&&t!=="resume"&&t!==null&&this._debug("Invalid argument. Toggling pause value instead"),t=!t||t!=="pause"&&t!=="resume"?"toggle":t;switch(t){case"pause":r.state.isPaused=!0;break;case"resume":r.state.isPaused=!1;break;case"toggle":r.state.isPaused=!r.state.isPaused}return this._debug("Paused",r.state.isPaused),!1}this["_pausing_"+r.behavior].call(this,t);return},_setup:function(){var t=this.options;if(!t.behavior||this["_setup_"+t.behavior]===n)return this._binding("bind"),!1;this["_setup_"+t.behavior].call(this);return},_showdonemsg:function(){var r=this.options;if(!!r.behavior&&this["_showdonemsg_"+r.behavior]!==n){this["_showdonemsg_"+r.behavior].call(this);return}r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity:1},2e3,function(){t(this).parent().fadeOut(r.loading.speed)}),r.errorCallback.call(t(r.contentSelector)[0],"done")},_validate:function(n){for(var r in n)if(r.indexOf&&r.indexOf("Selector")>-1&&t(n[r]).length===0)return this._debug("Your "+r+" found no elements."),!1;return!0},bind:function(){this._binding("bind")},destroy:function(){return this.options.state.isDestroyed=!0,this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},beginAjax:function(r){var i=this,s=r.path,o,u,a,f;r.state.currPage++,o=t(r.contentSelector).is("table")?t("<tbody/>"):t("<div/>"),u=typeof s=="function"?s(r.state.currPage):s.join(r.state.currPage),i._debug("heading into ajax",u),a=r.dataType==="html"||r.dataType==="json"?r.dataType:"html+callback",r.appendCallback&&r.dataType==="html"&&(a+="+callback");switch(a){case"html+callback":i._debug("Using HTML via .load() method"),o.load(u+" "+r.itemSelector,n,function(t){i._loadcallback(o,t,u)});break;case"html":i._debug("Using "+a.toUpperCase()+" via $.ajax() method"),t.ajax({url:u,dataType:r.dataType,complete:function(t,n){f=typeof t.isResolved!="undefined"?t.isResolved():n==="success"||n==="notmodified",f?i._loadcallback(o,t.responseText,u):i._error("end")}});break;case"json":i._debug("Using "+a.toUpperCase()+" via $.ajax() method"),t.ajax({dataType:"json",type:"GET",url:u,success:function(e,t,s){f=typeof s.isResolved!="undefined"?s.isResolved():t==="success"||t==="notmodified";if(r.appendCallback)if(r.template!==n){var a=r.template(e);o.append(a),f?i._loadcallback(o,a):i._error("end")}else i._debug("template must be defined."),i._error("end");else f?i._loadcallback(o,e,u):i._error("end")},error:function(){i._debug("JSON ajax request failed."),i._error("end")}})}},retrieve:function(r){r=r||null;var i=this,s=i.options;if(!!s.behavior&&this["retrieve_"+s.behavior]!==n){this["retrieve_"+s.behavior].call(this,r);return}if(s.state.isDestroyed)return this._debug("Instance is destroyed"),!1;s.state.isDuringAjax=!0,s.loading.start.call(t(s.contentSelector)[0],s)},scroll:function(){var t=this.options,r=t.state;if(!!t.behavior&&this["scroll_"+t.behavior]!==n){this["scroll_"+t.behavior].call(this);return}if(r.isDuringAjax||r.isInvalidPage||r.isDone||r.isDestroyed||r.isPaused)return;if(!this._nearbottom())return;this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(n){t.isPlainObject(n)&&(this.options=t.extend(!0,this.options,n))}},t.fn.infinitescroll=function(n,r){var i=typeof n;switch(i){case"string":var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=t.data(this,"infinitescroll");if(!e)return!1;if(!t.isFunction(e[n])||n.charAt(0)==="_")return!1;e[n].apply(e,s)});break;case"object":this.each(function(){var e=t.data(this,"infinitescroll");e?e.update(n):(e=new t.infinitescroll(n,r,this),e.failed||t.data(this,"infinitescroll",e))})}return this};var r=t.event,i;r.special.smartscroll={setup:function(){t(this).bind("scroll",r.special.smartscroll.handler)},teardown:function(){t(this).unbind("scroll",r.special.smartscroll.handler)},handler:function(e,n){var r=this,o=arguments;e.type="smartscroll",i&&clearTimeout(i),i=setTimeout(function(){t.event.handle.apply(r,o)},n==="execAsap"?0:100)}},t.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}}(window,jQuery),window.Modernizr=function(e,t,n){function r(){}function i(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),r=(e+" "+S.join(n+" ")+n).split(" ");return!!s(r,t)}function s(e,t){for(var r in e)if(g[e[r]]!==n&&(!t||t(e[r],m)))return!0}function o(e,t){return(""+e).indexOf(t)!==-1}function u(e,t){return typeof e===t}function a(e,t){return f(E.join(e+";")+(t||""))}function f(e){g.cssText=e}var l="1.7",c={},h=!0,p=t.documentElement,d=t.head||t.getElementsByTagName("head")[0],v="modernizr",m=t.createElement(v),g=m.style,y=
t.createElement("input"),b=":)",w=Object.prototype.toString,E=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),S="Webkit Moz O ms Khtml".split(" "),x={svg:"http://www.w3.org/2000/svg"},T={},N={},C={},k=[],L,A=function(e){var n=t.createElement("style"),r=t.createElement("div"),i;return n.textContent=e+"{#modernizr{height:3px}}",d.appendChild(n),r.id="modernizr",p.appendChild(r),i=r.offsetHeight===3,n.parentNode.removeChild(n),r.parentNode.removeChild(r),!!i},O=function(){function e(e,i){i=i||t.createElement(r[e]||"div");var s=(e="on"+e)in i;return s||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),s=u(i[e],"function"),u(i[e],n)||(i[e]=n),i.removeAttribute(e))),i=null,s}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),M={}.hasOwnProperty,_;u(M,n)||u(M.call,n)?_=function(e,t){return t in e&&u(e.constructor.prototype[t],n)}:_=function(e,t){return M.call(e,t)},T.csstransitions=function(){return i("transitionProperty")};for(var D in T)_(T,D)&&(L=D.toLowerCase(),c[L]=T[D](),k.push((c[L]?"":"no-")+L));return c.input||r(),c.crosswindowmessaging=c.postmessage,c.historymanagement=c.history,c.addTest=function(e,t){e=e.toLowerCase();if(!c[e])return t=!!t(),p.className+=" "+(t?"":"no-")+e,c[e]=t,c},f(""),m=y=null,c._enableHTML5=h,c._version=l,p.className=p.className.replace(/\bno-js\b/,"")+" js "+k.join(" "),c}(this,this.document),function(){jQuery(function(){return $("a[rel=popover]").popover(),$(".tooltip").tooltip(),$("a[rel=tooltip]").tooltip()})}.call(this);