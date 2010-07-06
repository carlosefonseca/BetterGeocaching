function wrapNode( el, wrapper ) { 
	var newNode = document.createElement(wrapper); 
	var parent = el.parentNode; 
	newNode.appendChild(el.cloneNode(true)); 
	newNode.id = el.id+"Wrapper";
	parent.replaceChild(newNode, el);  
	return newNode;
}

function toggleFullscreen() {
	var body = document.getElementsByTagName("body")[0];
	if (body.className.indexOf("fullscreen") != -1) {
		body.className = body.className.replace(/fullscreen/, "");
	} else {
		body.className += " fullscreen";
	}
}


var elm;

function doResize() {
	elm.style.height = window.innerHeight-155+"px";
}



if (document.getElementById("map-content") != null) {
	if (document.getElementById("uxPMUpgrade") != null) {
		document.getElementsByTagName("body")[0].className += " isMap fullscreen free";
	} else {
		document.getElementsByTagName("body")[0].className += " isMap fullscreen";
	}
	elm = document.getElementById("cacheListBounding");
	window.onresize = doResize;
	doResize();
	
	var toggle = document.createElement("div");
	toggle.id = "toggle";
	document.getElementsByTagName("body")[0].appendChild(toggle);
	
	toggle.onclick = toggleFullscreen;
	
	document.getElementById('uxSideBarCollapse').onclick();
	document.getElementById('uxSideBarCollapse').onclick();

} else {
	var name = document.getElementById('ctl00_ContentBody_CacheName').innerText;
	var code = document.getElementById('ctl00_uxWaypointName').innerHTML;
	code = code.trim();
	link = "http://coord.info/"+code;
	
	tw = document.createElement("a");
	tw.setAttribute("href", "http://twitter.com/home?source=geocaching.com&status="+name+" "+link);
	tw.setAttribute("class", "ceftweet");
	par = document.getElementById('ctl00_cacheCodeWidget').children[0];
	par.insertBefore(tw, par.children[0]);
}

