javascript:var num=prompt("History flood amount: ", "1000"); done = false; x = window.location.href; for (var i=1; i<=num; i++) {history.pushState(0, 0, i==num?x:i.toString()); if(i==num){done=true}}if(done===true){alert("History flooded!)}
