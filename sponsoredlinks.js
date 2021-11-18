var root= document.documentElement;
var anchors = root.getElementsByTagName('strike');
var total=anchors.length;
for(var i=0; i<total; i++){
var a = anchors[i].getElementsByTagName('a')[0];
if(a.localName=='a'){
a.setAttribute('rel','sponsored');
}
}