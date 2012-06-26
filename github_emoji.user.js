// ==UserScript==
// @name          github emoji cheatsheet
// @namespace     https://github.com/withgod/gm_github-emoji
// @description   github emoji cheatsheet
// @author        withgod
// @include       http://github.com/*
// @include       https://github.com/*
// @include       http://git.*
// @include       https://git.*
// ==/UserScript==

(function(){
    var help = document.getElementsByClassName('gfm-help');
    if (help.length) {
        for (var i = 0; i < help.length; i++) {
            var h = help[i];
            var e = document.createElement('a');
            e.href    = 'javascript:void(0)';
            e.title = 'show emoji cheatsheet';
            var f = 'window.open(\'http://www.emoji-cheat-sheet.com/\', \'_blank\', \'width=900,height=400, menubar=no, toolbar=no, scrollbars=yes\');';
            e.setAttribute('onclick', f);
            e.innerHTML = '[emoji]';
            e.setAttribute('style', 'margin-left: 5px;font-weight: bold');

            h.parentNode.insertBefore(e, h.nextSibling);
        }
    }
})();
