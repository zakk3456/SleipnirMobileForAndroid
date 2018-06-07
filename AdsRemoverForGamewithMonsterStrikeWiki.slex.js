// ==UserScript==
// @name            Ads Remover for Gamewith Monster Strike Wiki
// @name:ja         Gamewithモンスト攻略wikiの広告除去ツール
// @author          zakk3456_dev
// @description     Hide the ads in the footer in Gamewith Monster Strike Wiki.
// @description:ja  Gamewithモンスト攻略wikiのフッターにある邪魔な広告を非表示にします。
// @include         http://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/*
// @include         https://xn--eckwa2aa3a9c8j8bve9d.gamewith.jp/*
// @version         0.1
// @history         0.1   Initial version.
// @history:ja      0.1   最初のバージョン。
// @require         jquery
// ==/UserScript==

$(".c-sp-leaderboard-ad-overlay.js-target-hideonfocuskeyboard").hide();
$(".to-btn").css("bottom", "0px");