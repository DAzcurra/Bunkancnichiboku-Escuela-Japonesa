(function(g){var window=this;var xGa=function(a,b){a.va("onAutonavCoundownStarted",b)},Z4=function(a,b,c){var d=b.Ka();
g.I(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Rd(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.mF&&(b.lengthText?(f=b.lengthText||null,h=b.Ms||null):b.lengthSeconds&&(f=g.WO(b.lengthSeconds),h=g.WO(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.rG(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.mF?b.isLivePlayback:null,n=b instanceof g.mF?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.ro||g.qK("Ver $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.jk(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.wo};b instanceof g.sG&&(d.playlist_length=b.getLength());a.update(d)},$4=function(a){var b=a.T(),c=b.B;
g.V.call(this,{I:"a",L:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.F:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{I:"div",ha:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{I:"div",U:{"aria-label":"{{timestamp}}"},ha:["ytp-autonav-timestamp"],Z:"{{duration}}"},{I:"div",ha:["ytp-autonav-live-stamp"],Z:"En vivo"},{I:"div",
ha:["ytp-autonav-upcoming-stamp"],Z:"Pr\u00f3ximamente"},{I:"div",L:"ytp-autonav-list-overlay",S:[{I:"div",L:"ytp-autonav-list-text",Z:"Mix"},{I:"div",L:"ytp-autonav-list-icon"}]}]},{I:"div",ha:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],Z:"{{title}}"},{I:"div",ha:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],Z:"{{author}}"},{I:"div",ha:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],Z:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.u=c;this.wa("click",this.onClick);this.wa("keypress",this.B)},b5=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{I:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.F=b;this.B=0;var d=a.T(),e=d.B;this.J=a;g.rX(this.J,this.element,this,18788);this.suggestion=null;this.C=new g.V({I:"div",L:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{I:"div",L:"ytp-autonav-endscreen-upnext-header"},{I:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",
Z:"{{autoplayAlternativeHeader}}"},{I:"a",L:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:e?d.F:""},S:[{I:"div",L:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{I:"div",U:{"aria-label":"{{timestamp}}"},ha:["ytp-autonav-timestamp"],Z:"{{duration}}"},{I:"div",ha:["ytp-autonav-live-stamp"],Z:"En vivo"},{I:"div",ha:["ytp-autonav-upcoming-stamp"],Z:"Pr\u00f3ximamente"}]},{I:"div",L:"ytp-autonav-endscreen-video-info",S:[{I:"div",L:"ytp-autonav-endscreen-premium-badge"},
{I:"div",L:"ytp-autonav-endscreen-upnext-title",Z:"{{title}}"},{I:"div",L:"ytp-autonav-endscreen-upnext-author",Z:"{{author}}"},{I:"div",L:"ytp-autonav-view-and-date",Z:"{{views_and_publish_time}}"},{I:"div",L:"ytp-autonav-author-and-view",Z:"{{author_and_views}}"}]}]}]});g.C(this,this.C);this.C.fa(this.element);e||this.R(this.C.ga("ytp-autonav-endscreen-link-container"),"click",this.eD);d=new g.V({I:"div",L:"ytp-autonav-overlay"});g.C(this,d);d.fa(this.element);this.u=new g.V({I:"div",L:"ytp-autonav-endscreen-button-container"});
g.C(this,this.u);this.u.fa(this.element);this.cancelButton=new g.V({I:"button",ha:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},Z:"Cancelar"});g.C(this,this.cancelButton);this.cancelButton.fa(this.u.element);this.cancelButton.wa("click",this.OK,this);this.playButton=new g.V({I:"a",ha:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button",
"aria-label":"Reproducir siguiente video"},Z:"Reproducir ahora"});g.C(this,this.playButton);this.playButton.fa(this.u.element);this.playButton.wa("click",this.eD,this);this.D=new g.F(function(){a5(c)},500);
g.C(this,this.D);this.dD();this.R(a,"autonavvisibility",this.dD)},a5=function(a){var b=c5(a),c=Math.min(a.B?Date.now()-a.B:0,b);
d5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.cg()?a.select(!0):a.cg()&&a.D.start()},c5=function(a){var b=a.J.app.getVideoData().Zq;
return 0<=b?b:g.P(a.J.T().experiments,"autoplay_time")||1E4},d5=function(a,b){b=void 0===b?-1:b;
var c=a.C.ga("ytp-autonav-endscreen-upnext-header");g.Ge(c);if(0<=b){var d=String(b),e="A continuaci\u00f3n, en $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],f="A continuaci\u00f3n, en $SECONDS".indexOf(e);if(0<f){c.appendChild(g.Fe("A continuaci\u00f3n, en $SECONDS".slice(0,f)));var h=g.Ee("span");g.vn(h,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Me(h,d);c.appendChild(h);c.appendChild(g.Fe("A continuaci\u00f3n, en $SECONDS".slice(f+e.length)));return}}g.Me(c,"A continuaci\u00f3n")},
e5=function(a,b){g.V.call(this,{I:"div",
ha:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},g5=function(a){g.V.call(this,{I:"div",
ha:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{I:"div",L:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{I:"span",L:"ytp-upnext-top",S:[{I:"span",L:"ytp-upnext-header",Z:"A continuaci\u00f3n"},{I:"span",L:"ytp-upnext-title",Z:"{{title}}"},{I:"span",L:"ytp-upnext-author",Z:"{{author}}"}]},{I:"a",L:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente video"},S:[{I:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},S:[{I:"circle",L:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",L:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",L:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",L:"ytp-upnext-bottom",S:[{I:"span",L:"ytp-upnext-cancel"},{I:"span",L:"ytp-upnext-paused",
Z:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});this.api=a;this.cancelButton=null;this.F=this.ga("ytp-svg-autoplay-ring");this.C=this.notification=this.u=this.suggestion=null;this.D=new g.F(this.sr,5E3,this);this.B=0;var b=this.ga("ytp-upnext-cancel");this.cancelButton=new g.V({I:"button",ha:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},Z:"Cancelar"});g.C(this,this.cancelButton);this.cancelButton.wa("click",this.NL,
this);this.cancelButton.fa(b);g.C(this,this.D);g.rX(this.api,this.element,this,18788);b=this.ga("ytp-upnext-autoplay-icon");this.R(b,"click",this.OL);this.qD();this.R(a,"autonavvisibility",this.qD);this.R(a,"mdxnowautoplaying",this.WN);this.R(a,"mdxautoplaycanceled",this.XN);this.R(a,"mdxautoplayupnext",this.vG);f5(this)&&(a=(a=g.cX(g.ZW(this.api)))?a.eJ():null)&&this.vG(a);g.I(this.element,"ytp-upnext-mobile",this.api.T().u)},f5=function(a){return 3===a.api.getPresentingPlayerType()},yGa=function(a,
b){return b?b:0<=a.api.app.getVideoData().Zq?a.api.app.getVideoData().Zq:g.P(a.api.T().experiments,"autoplay_time")||1E4},h5=function(a,b){var c=yGa(a,b),d=Math.min(zGa(a),c);
c=0===c?1:Math.min(d/c,1);a.F.setAttribute("stroke-dashoffset",""+-211*(c+1));1<=c&&a.cg()&&!f5(a)?a.select(!0):a.cg()&&a.u.start()},zGa=function(a){return(0,g.N)()-a.B},i5=function(a){e5.call(this,a,"autonav-endscreen");
this.videoData=this.suggestions=null;this.table=new g.V({I:"div",L:"ytp-suggestion-panel",S:[{I:"div",ha:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],Z:"M\u00e1s videos"}]});this.K=new g.V({I:"div",L:"ytp-suggestions-container"});this.videos=[];this.C=null;this.F=this.G=!1;this.B=new b5(this.player);g.C(this,this.B);this.B.fa(this.element);a.getVideoData().Pk?this.u=this.B:(this.u=new g5(a),g.vP(this.player,this.u.element,4),g.C(this,this.u));this.D=new g.nR(this);g.C(this,
this.D);g.C(this,this.table);this.table.fa(this.element);this.table.show();g.C(this,this.K);this.K.fa(this.table.element);this.hide()},AGa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.EZ(a.player.T(),c);
g.C(a,c);return c})},j5=function(a){var b=a.tn();
b!==a.F&&(a.F=b,a.player.V("autonavvisibility"),a.F?(a.B!==a.u&&a.B.hide(),a.table.hide()):(a.B!==a.u&&a.B.show(),a.table.show()))},BGa=function(a){e5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.u=new g.V({I:"div",L:"ytp-subscribe-card",S:[{I:"img",L:"ytp-author-image",U:{src:b.gf}},{I:"div",L:"ytp-subscribe-card-right",S:[{I:"div",L:"ytp-author-name",Z:b.author},{I:"div",L:"html5-subscribe-button-container"}]}]});g.C(this,this.u);this.u.fa(this.element);this.subscribeButton=new g.sY("Suscribirse",null,"Anular suscripci\u00f3n",null,!0,!1,b.pg,b.subscribed,"trailer-endscreen",null,null,a);g.C(this,this.subscribeButton);this.subscribeButton.fa(this.u.ga("html5-subscribe-button-container"));
this.hide()},k5=function(a){var b=a.T(),c=g.rB||g.og?{style:"will-change: opacity"}:void 0,d=b.B,e=["ytp-videowall-still"];
b.u&&e.push("ytp-videowall-show-text");g.V.call(this,{I:"a",ha:e,U:{href:"{{url}}",target:d?b.F:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{I:"div",L:"ytp-videowall-still-image",U:{style:"{{background}}"}},{I:"span",L:"ytp-videowall-still-info",S:[{I:"span",L:"ytp-videowall-still-info-bg",S:[{I:"span",L:"ytp-videowall-still-info-content",U:c,S:[{I:"span",L:"ytp-videowall-still-info-title",Z:"{{title}}"},{I:"span",L:"ytp-videowall-still-info-author",
Z:"{{author_and_views}}"},{I:"span",L:"ytp-videowall-still-info-live",Z:"En vivo"},{I:"span",L:"ytp-videowall-still-info-duration",Z:"{{duration}}"}]}]}]},{I:"span",ha:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{I:"span",L:"ytp-videowall-still-listlabel-icon"},"Lista de reproducci\u00f3n",{I:"span",L:"ytp-videowall-still-listlabel-length",S:[" (",{I:"span",Z:"{{playlist_length}}"},")"]}]},{I:"span",ha:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
S:[{I:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",L:"ytp-videowall-still-listlabel-length",Z:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.u=new g.nR(this);g.C(this,this.u);this.wa("click",this.onClick);this.wa("keypress",this.C);this.u.R(a,"videodatachange",this.Na);g.xN(a,this.element,this);this.Na()},l5=function(a){e5.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=this.suggestions=null;this.F=this.N=!1;this.K=null;this.B=new g.nR(this);g.C(this,this.B);this.G=new g.F(function(){g.G(b.element,"ytp-show-tiles")},0);
g.C(this,this.G);var c=new g.V({I:"button",ha:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Anterior"},S:[g.HN()]});g.C(this,c);c.fa(this.element);c.wa("click",this.RK,this);this.table=new g.qN({I:"div",L:"ytp-endscreen-content"});g.C(this,this.table);this.table.fa(this.element);c=new g.V({I:"button",ha:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"Siguiente"},S:[g.IN()]});g.C(this,c);c.fa(this.element);c.wa("click",this.QK,this);a.getVideoData().Pk?this.u=new b5(a,!0):this.u=new g5(a);
g.C(this,this.u);g.vP(this.player,this.u.element,4);this.hide()},m5=function(a){return g.qX(a.player)&&a.vo()&&!a.D},CGa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.EZ(a.J.T(),c);
g.C(a,c);return c})},n5=function(a){var b=a.tn();
b!==a.N&&(a.N=b,a.player.V("autonavvisibility"))},o5=function(a){g.AS.call(this,a);
var b=this;this.endScreen=null;this.u=this.B=this.C=!1;this.listeners=new g.nR(this);g.C(this,this.listeners);this.D=a.T();DGa(a)?(this.C=!0,EGa(this),this.u?this.endScreen=new i5(a):this.endScreen=new l5(this.player)):this.D.Xc?this.endScreen=new BGa(this.player):this.endScreen=new e5(this.player);g.C(this,this.endScreen);g.vP(this.player,this.endScreen.element,4);FGa(this);this.listeners.R(a,"videodatachange",this.Na,this);this.listeners.R(a,g.QD("endscreen"),function(c){b.TC()&&(b.endScreen.created||
b.endScreen.create(),"load"===c.getId()&&b.load())});
this.listeners.R(a,g.RD("endscreen"),function(c){"load"===c.getId()&&b.loaded&&b.unload()})},EGa=function(a){var b=a.player.getVideoData();
if(!b||a.u===b.Sn&&a.B===b.Pk)return!1;a.u=b.Sn;a.B=b.Pk;return!0},DGa=function(a){a=a.T();
return a.qb&&!a.Xc},FGa=function(a){g.oX(a.player,"endscreen");
var b=a.player.getVideoData();b=new g.ND(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.ND(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.dN(a.player,[b,c])};
g.u($4,g.V);$4.prototype.select=function(){(g.YW(this.J,this.suggestion.Ka().videoId,this.suggestion.Zc,this.suggestion.getPlaylistId(),void 0,this.suggestion.Sv||void 0)||this.J.ca("web_player_endscreen_double_log_fix_killswitch"))&&g.sX(this.J,this.element)};
$4.prototype.onClick=function(a){g.MX(a,this.J,this.u,this.suggestion.Zc||void 0)&&this.select()};
$4.prototype.B=function(a){switch(a.keyCode){case 13:case 32:g.hp(a)||(this.select(),g.gp(a))}};
$4.prototype.xd=function(a){g.I(this.element,"ytp-suggestion-card-with-margin",a)};g.u(b5,g.V);g.k=b5.prototype;g.k.Cp=function(a){this.suggestion!==a&&(this.suggestion=a,Z4(this.C,a),this.playButton.xa("url",this.suggestion.jk()),this.xd())};
g.k.xd=function(){var a=this.J.fi(!0,this.J.isFullscreen());g.I(this.element,"ytp-autonav-endscreen-small-mode",this.oe(a));g.I(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.ku);g.I(this.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!g.$W(this.J));g.I(this.J.getRootNode(),"countdown-running",this.cg());g.I(this.element,"ytp-player-content",g.$W(this.J));if(!this.cg()){g.$W(this.J)?d5(this,Math.round(c5(this)/1E3)):d5(this);a=!!this.suggestion&&!!this.suggestion.wo;
var b=g.$W(this.J)||!a;g.I(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.I(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.tN(this.u,g.$W(this.J))}};
g.k.cg=function(){return 0<this.B};
g.k.Un=function(){this.cg()||(this.B=Date.now(),a5(this),xGa(this.J,c5(this)),g.I(this.J.getRootNode(),"countdown-running",this.cg()))};
g.k.fm=function(){this.Ij();a5(this)};
g.k.Ij=function(){this.cg()&&(this.D.stop(),this.B=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Ij()};
g.k.eD=function(a){g.MX(a,this.J)&&this.select()};
g.k.OK=function(){g.bX(this.J,!0)};
g.k.dD=function(){var a=g.$W(this.J);this.F&&this.Xa!==a&&g.tN(this,a);this.xd();g.BN(this.J,this.element,a)};
g.k.oe=function(a){return 440>a.width||459>a.height};g.u(e5,g.V);g.k=e5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.vo=function(){return!1};
g.k.tn=function(){return!1};
g.k.qC=function(){return!1};g.u(g5,g.V);g.k=g5.prototype;g.k.sr=function(){this.notification&&(this.D.stop(),this.Db(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.Cp=function(a){this.suggestion=a;Z4(this,a,"hqdefault.jpg")};
g.k.qD=function(){g.tN(this,g.$W(this.api));g.BN(this.api,this.element,g.$W(this.api))};
g.k.pO=function(){window.focus();this.sr()};
g.k.Un=function(a){var b=this;this.cg()||(g.Mo("a11y-announce","A continuaci\u00f3n "+this.suggestion.title),this.B=(0,g.N)(),this.u=new g.F(function(){h5(b,a)},25),h5(this,a),xGa(this.api,yGa(this,a)));
g.yn(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.cg=function(){return!!this.u};
g.k.fm=function(){this.Ij();this.B=(0,g.N)();h5(this);g.G(this.element,"ytp-upnext-autoplay-paused")};
g.k.Ij=function(){this.cg()&&(this.u.dispose(),this.u=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.Q(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.Ka(),this.sr(),this.notification=new Notification("A continuaci\u00f3n",{body:b.title,icon:b.Rd()}),this.C=this.R(this.notification,"click",this.pO),this.D.start())}this.Ij();this.api.nextVideo(!1,a)};
g.k.OL=function(a){!g.Le(this.cancelButton.element,g.cp(a))&&g.MX(a,this.api)&&this.select()};
g.k.NL=function(){g.bX(this.api,!0)};
g.k.WN=function(a){f5(this);this.show();this.Un(a)};
g.k.vG=function(a){f5(this);this.suggestion&&this.suggestion.Ka().videoId===a.Ka().videoId||this.Cp(a)};
g.k.XN=function(){f5(this);this.Ij();this.hide()};
g.k.aa=function(){this.Ij();this.sr();g.V.prototype.aa.call(this)};g.u(i5,e5);g.k=i5.prototype;g.k.create=function(){e5.prototype.create.call(this);this.D.R(this.player,"appresize",this.xd);this.D.R(this.player,"onVideoAreaChange",this.xd);this.D.R(this.player,"videodatachange",this.Na);this.D.R(this.player,"autonavchange",this.cD);this.D.R(this.player,"autonavcancel",this.NK);this.Na()};
g.k.show=function(){e5.prototype.show.call(this);(this.G||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.bX(this.player,!1);g.qX(this.player)&&this.vo()&&!this.C?(j5(this),2===this.videoData.autonavState?this.player.T().ca("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.u.select(!0):this.u.Un():3===this.videoData.autonavState&&this.u.fm()):(g.bX(this.player,!0),j5(this));this.xd()};
g.k.hide=function(){e5.prototype.hide.call(this);this.u.fm();j5(this)};
g.k.xd=function(){var a=this.player.fi(!0,this.player.isFullscreen());j5(this);this.B.xd();g.I(this.element,"ytp-autonav-cancelled-small-mode",this.oe(a));g.I(this.element,"ytp-autonav-cancelled-tiny-mode",this.Fs(a));if(!this.F){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.xd(1===c%2)}}};
g.k.Na=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=AGa(this,a))&&this.suggestions.length)for(this.u.Cp(this.suggestions[0]),this.u!==this.B&&this.B.Cp(this.suggestions[0]),a=0;a<GGa.length;++a){var b=GGa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new $4(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,Z4(c,b));g.C(this,this.videos[a]);this.videos[a].fa(this.K.element)}}this.xd()}};
g.k.cD=function(a){1===a?(this.G=!1,this.C=this.videoData.clientPlaybackNonce,this.u.Ij(),this.Xa&&this.xd()):(this.G=!0,this.tn()&&(2===a?this.u.Un():3===a&&this.u.fm()))};
g.k.NK=function(a){a?this.cD(1):(this.C=null,this.G=!1)};
g.k.vo=function(){return 1!==this.videoData.autonavState};
g.k.oe=function(a){return(910>a.width||459>a.height)&&!this.Fs(a)};
g.k.Fs=function(a){return 800>a.width};
g.k.tn=function(){return this.Xa&&g.qX(this.player)&&this.vo()&&!this.C};
var GGa=[1,3,2,4];g.u(BGa,e5);g.u(k5,g.V);k5.prototype.select=function(){(g.YW(this.api,this.suggestion.Ka().videoId,this.suggestion.Zc,this.suggestion.getPlaylistId(),void 0,this.suggestion.Sv||void 0)||this.api.ca("web_player_endscreen_double_log_fix_killswitch"))&&g.sX(this.api,this.element)};
k5.prototype.onClick=function(a){g.MX(a,this.api,this.B,this.suggestion.Zc||void 0)&&this.select()};
k5.prototype.C=function(a){switch(a.keyCode){case 13:case 32:g.hp(a)||(this.select(),g.gp(a))}};
k5.prototype.Na=function(){var a=this.api.getVideoData(),b=this.api.T();this.B=a.Lc?!1:b.B};g.u(l5,e5);g.k=l5.prototype;g.k.create=function(){e5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=CGa(this,a),this.videoData=a);this.xd();this.B.R(this.player,"appresize",this.xd);this.B.R(this.player,"onVideoAreaChange",this.xd);this.B.R(this.player,"videodatachange",this.Na);this.B.R(this.player,"autonavchange",this.yx);this.B.R(this.player,"autonavcancel",this.PK);a=this.videoData.autonavState;a!==this.K&&this.yx(a);this.B.R(this.element,"transitionend",this.CP)};
g.k.destroy=function(){g.qs(this.B);g.bg(this.stills);this.stills=[];this.suggestions=null;e5.prototype.destroy.call(this);g.yn(this.element,"ytp-show-tiles");this.G.stop();this.K=this.videoData.autonavState};
g.k.vo=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){e5.prototype.show.call(this);g.yn(this.element,"ytp-show-tiles");this.player.T().u?g.qn(this.G):this.G.start();(this.F||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.bX(this.player,!1);m5(this)?(n5(this),2===this.videoData.autonavState?this.player.T().ca("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.u.select(!0):this.u.Un():3===this.videoData.autonavState&&this.u.fm()):(g.bX(this.player,!0),n5(this))};
g.k.hide=function(){e5.prototype.hide.call(this);this.u.fm();n5(this)};
g.k.CP=function(a){g.cp(a)===this.element&&this.xd()};
g.k.xd=function(){if(this.suggestions&&this.suggestions.length){g.G(this.element,"ytp-endscreen-paginate");var a=this.J.fi(!0,this.J.isFullscreen()),b=g.TW(this.J);b&&(b=b.Id()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,w=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&w)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Ag(a,m,n);g.lg(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.u.Cp(this.suggestions[0]);this.u instanceof b5&&this.u.xd();g.I(this.element,"ytp-endscreen-takeover",m5(this));n5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.ae(p+this.C,l),0!==r){t=this.stills[c];t||(t=new k5(this.player),this.stills[c]=t,a.appendChild(t.element));w=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-w-4,D=Math.floor(m*(f+r)/b)-x-4;g.tg(t.element,x,w);g.Ag(t.element,D,y);g.lg(t.element,"transitionDelay",(h+f)/20+"s");g.I(t.element,"ytp-videowall-still-mini",1===r);g.I(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),w=g.wn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",Z4(r,p,w),g.cC(t)&&(t=p.jk(),t=g.Id(t,g.PT({},"emb_rel_end")),r.xa("url",t)),(p=(p=p.Zc)&&p.itct)&&g.yN(r.api,r.element,p));c++}g.I(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Ie(e.element),g.ag(e);this.stills.length=c}};
g.k.Na=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.C=0,this.suggestions=CGa(this,a),this.videoData=a,this.xd())};
g.k.QK=function(){this.C+=this.stills.length;this.xd()};
g.k.RK=function(){this.C-=this.stills.length;this.xd()};
g.k.qC=function(){return this.u.cg()};
g.k.yx=function(a){1===a?(this.F=!1,this.D=this.videoData.clientPlaybackNonce,this.u.Ij(),this.Xa&&this.xd()):(this.F=!0,this.Xa&&m5(this)&&(2===a?this.u.Un():3===a&&this.u.fm()))};
g.k.PK=function(a){if(a){for(a=0;a<this.stills.length;a++)g.BN(this.J,this.stills[a].element,!0);this.yx(1)}else this.D=null,this.F=!1;this.xd()};
g.k.tn=function(){return this.Xa&&m5(this)};g.u(o5,g.AS);g.k=o5.prototype;g.k.TC=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!DGa(this.player)||b;var c=a.wm||g.lC(a.Oa),d=g.c1(this.player.app);a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.SC=function(){return this.endScreen.tn()};
g.k.SJ=function(){return this.SC()?this.endScreen.qC():!1};
g.k.aa=function(){g.oX(this.player,"endscreen");g.AS.prototype.aa.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.hG;if(b&&b.videoId){var c=g.ZW(this.player).Bc.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.YE?a=!1:(g.YW(this.player,b.videoId,void 0,void 0,!0,b),c&&c.Ss("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.AS.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.AS.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.Na=function(){FGa(this);this.C&&EGa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.u?this.endScreen=new i5(this.player):this.endScreen=new l5(this.player),g.C(this,this.endScreen),g.vP(this.player,this.endScreen.element,4))};g.CX.endscreen=o5;})(_yt_player);