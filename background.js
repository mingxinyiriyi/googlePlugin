'use strict';
//主入口文件

  console.log(chrome);
  chrome.runtime.onInstalled.addListener(function() {
      chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
      });
    });
    

  