document.getElementById("next").onclick=function(){
    document.getElementById("characters").style.display="block";
    document.getElementById("char-p").style.display="block";
    document.getElementById("intro-p").style.display="none";
    document.getElementById("intro").style.display="none";
    
}

document.getElementById("before").onclick=function(){
    document.getElementById("characters").style.display="none";
    document.getElementById("char-p").style.display="none";
    document.getElementById("intro").style.display="block";
    document.getElementById("intro-p").style.display="block";
    
}

document.getElementById("seemore").onclick=function(){
    document.getElementById("moreagents").style.display="block";
}
document.getElementById("m-b1").onclick=function(){
    document.getElementById("moreagents").style.display="none";
}
document.getElementById("seemore").ondblclick=function(){
    document.getElementById("moreagents").style.display="none";
}
 
    
// document.getElementById("post").onclick=function(){
//     document.getElementById("music-id").style.display="none";
//     document.getElementById("weapons-id").style.display="block";
//     document.getElementById("weapons-id").style.top="420px";
//     document.getElementById("armory").style.display="block";
  
// }

// document.getElementById("pre").onclick=function(){
//     document.getElementById("music-id").style.display="block";
//     document.getElementById("weapons-id").style.display="none";
   
  
//
var x = document.getElementById("ph-a");
var a = document.getElementById("ph-b");
var b = document.getElementById("ph-c");
var c = document.getElementById("ph-d");
var d = document.getElementById("ph-e");
var e = document.getElementById("ma-a");
var f = document.getElementById("ma-b");
var g = document.getElementById("ma-c");
var h = document.getElementById("ma-d");
var i = document.getElementById("ma-e");

function playaudio() {
  x.play();
}
function playaudio1() {
  a.play();
}
function playaudio2() {
  b.play();
}

function playaudio3() {
  c.play();
}

function playaudio4() {
  d.play();
}
function playaudio5() {
  e.play();
}
function playaudio6() {
  f.play();
}
function playaudio7() {
  g.play();
}

function playaudio8() {
  h.play();
}

function playaudio9() {
  i.play();
}




document.getElementById("se").onclick=function(){

  document.getElementById("searchbar").style.width="200px";
  document.getElementById("search").style.display="block";

}
document.getElementById("se").ondblclick=function(){

  document.getElementById("searchbar").style.width="0px";
  document.getElementById("search").style.display="none";

}

  

  

