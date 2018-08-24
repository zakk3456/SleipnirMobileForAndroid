// ==UserScript==
// @name            Ads Remover for Gamewith Monster Strike Wiki
// @name:ja         Gamewithモンスト攻略wikiの広告除去ツール
// @author          zakk3456_dev
// @description     Hide the ads in the footer in Gamewith Monster Strike Wiki.
// @description:ja  Gamewithモンスト攻略wikiのフッターにある邪魔な広告を非表示にします。
// @include         http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/*
// @include         https://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/*
// @version         0.2
// @history         0.2   Hide top banner and app link button.
// @history:ja      0.2   トップバナー非表示、アプリで見るボタン非表示。
// @history         0.1   Initial version.
// @history:ja      0.1   最初のバージョン。
// @require         jquery
// ==/UserScript==

//hide top banner
$('.js-promotion-app-banner.promotion-app-banner').hide();
//hide bottom banner
$(".c-sp-leaderboard-ad-overlay.js-target-hideonfocuskeyboard").hide();
//hide app link button
$('.to-btn--deep-link.js-deep-link-block.js-move-with-expand-network-ad').hide();
//move down footer buttons
$(".to-btn").css("bottom", "0px");