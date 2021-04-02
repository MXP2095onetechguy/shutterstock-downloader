// ==UserScript==
// @name         Shutterstock Downloader for tampermonke(or tapLmonke)
// @namespace    MXPServer 20953 Onetechguy
// @version      2.9
// @description  Shutterstock downloader script
// @author       MXPServer 20953 Onetechguy
// @include      https://www.shutterstock.com/image-photo/*
// @include      https://www.shutterstock.com/image-vector/*
// @require      https://code.jquery.com/jquery-3.6.0.js
// @grant        none
// ==/UserScript==

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

(function main() {
    'use strict';

    // Your code here...
    //links: href="https://downloader.la/Ext.php?url=' + window.location.href + '" target="_blank
    //tags: <a id="downloadBtnCodeCyan" href="https://downloader.la/Ext.php?url=' + window.location.href + '" target="_blank">hehe</a>
    //div: m_l_5f920
    /*
    var hehe = document.createElement('a');
    var div = document.getElementsByClassName("m_l_65b63");
    var link = document.createTextNode("Download!");
    hehe.appendChild(link);
    hehe.title = "Download!";
    hehe.href = "https://downloader.la/Ext.php?url=" + window.location.href;
    div.appendChild(hehe);*/
    var finalLink = "https://downloader.la/Ext.php?url=" + window.location.href;
    /* ---------------- Style  --------------- */
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "#LinkHAHAisCreatortheMXPServer20953Onetechguy{position:fixed;text-align:center;left:10px;bottom:140px;text-decoration: none;padding: 12px;border-radius: .3rem;color: #fff;background:#000;width: 220px;display: inline-block;}#LinkHAHAisCreatortheMXPServer20953Onetechguy svg{fill:#fff;width:24px;height:24px;vertical-align:middle;display:inline-flex;}#LinkUTILSisCreatortheMXPServer20953Onetechguy{position:fixed;text-align:center;left:10px;bottom:10px;text-decoration: none;padding: 12px;border-radius: .3rem;color: #fff;background:#000;width: 220px;display: inline-block;}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd} #LinkExpisCreatorIQuitTypingThis{position:fixed;text-align:center;left:10px;bottom:80px;text-decoration: none;padding: 12px;border-radius: .3rem;color: #fff;background:#000;width: 220px;display: inline-block;}";
    document.head.appendChild(style);
    /* ---------------- Button  --------------- */
    var gt_btn = document.createElement('p');
    var more_btn = document.createElement('p');
    var exp_btn = document.createElement ('p');
    gt_btn.id="LinkHAHAisCreatortheMXPServer20953Onetechguy";
    more_btn.id="LinkUTILSisCreatortheMXPServer20953Onetechguy";
    exp_btn.id="LinkExpisCreatorIQuitTypingThis";
    /*
    more_btn.href="https://downloader.la";
    more_btn.href="More Utils from downloader.la<button>haha</button>";
    more_btn.innerHTML="More utils from downloader.la";
    */
    gt_btn.innerHTML='<a target="_blank" href=' + finalLink + '> Download Image <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a><!--<button class="btn-primary" onclick="$( "#LinkHAHAisCreatortheMXPServer20953Onetechguy" ).remove()">remove</button>-->';
    more_btn.innerHTML='<a target="_blank" href='+ 'https://downloader.la'+'> More Utils at Downloader.la </a><!--<button class="btn-primary" onclick="$( "#LinkUTILSisCreatortheMXPServer20953Onetechguy" ).remove()">remove</button>-->';
    exp_btn.innerHTML = '<a target="_blank" href="https://downloader.la/Ext.php?url=https://www.shutterstock.com/image-vector/business-woman-slipping-falling-banana-peel-308325830">Example<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>';
    document.querySelector('body').appendChild(gt_btn);
    document.querySelector('body').appendChild(more_btn);



})();

addJQuery(main);