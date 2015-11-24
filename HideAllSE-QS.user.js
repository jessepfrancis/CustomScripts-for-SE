// ==UserScript==
// @name        HideItAllSE-Questions and Search
// @namespace   https://jessepfrancis.wordpress.com
// @description Several rules that hide nearly everything useful and many things useless.
// @match       *://math.stackexchange.com/questions/*
// @match       *://math.stackexchange.com/search*
// @grant       GM_addStyle
// @run-at      document-start
// @version     15.7.4
// ==/UserScript==

GM_addStyle('.vote .vote-down-off, #sidebar .community-bulletin, #chat-feature, .topbar .topbar-wrapper .topbar-links .profile-me, .topbar .topbar-wrapper .topbar-links .links-container .topbar-menu-links a,.topbar .topbar-wrapper .topbar-links .links-container .topbar-menu-links a:visited, #footer, #nav-badges, #community-bulletin, #feed-link, #explore-tags, #hot-network-questions, #newsletter-ad, #ignored-footer, .bottom-notice, .adzerk-vote  {display: none;} .icon-achievements, .icon-flag, .cite-link {  display: none !important; }  .downvoted-answer { opacity: 1 !important; } div.tagged-interesting {  background-color: #fff !important; }');

if (/^math\./.test(window.location.hostname)) {
  GM_addStyle('.result-link a:visited {color: #507070 !important;}');
}

if (/\/users\//.test(window.location.pathname)) {
  GM_addStyle('.text-muted, .placeholder {display: none !important;}');
}
