javascript:!function(){const e=["https://disqus.com",document.origin];window.setInterval(function(){for(var n in document.getElementsByTagName("iframe"))!function(n){try{var o=new URL(n.src||"http://unknown-src").origin;e.includes(o)||(n.parentElement.removeChild(n),console.log("REMOVE IFRAME",o))}catch(n){console.log("REMOVE ERROR",n)}}(n)},0)}();