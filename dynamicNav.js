/*window.onscroll = function() {scrollFunction()};*/

var nav_parent = document.getElementsByClassName("navigation");

var nav_item = document.getElementsByClassName("nav-item");
var nav_item_2 = document.getElementsByClassName("nav-item-x");

var selected = document.getElementsByClassName("nav-item-selected");

var menu_icon = document.getElementsByClassName("menu");
var menu_icon_2 = document.getElementsByClassName("menu2");

var links = document.getElementsByClassName("links");

function scrollFunction() {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		nav_parent[0].style.backgroundColor = "var(--bg-navbar2)";
		nav_parent[0].style.color = "var(--fg-navbar2)";
		nav_parent[0].style.boxShadow = "0px 0px 10px 0px var(--box-shadow-color)";
		if (menu_icon.length > 0) {
			menu_icon[0].className = "menu2";
		}
		links[0].style.borderColor = "transparent";
		if (window.innerWidth > 1025 && selected.length > 0) {
			selected[0].style.backgroundColor = "var(--nav-item-selected2)";
			selected[0].style.color = "var(--nav-item-selected-color2)";
		}
		for (var i = nav_item.length - 1; i >= 0; i--) {
			nav_item[i].className = nav_item[i].className.replace("nav-item", "nav-item-x");
		}
		/*document.getElementById("menu").style.filter = "invert(100%)";*/
	} else {
		nav_parent[0].style.backgroundColor = "transparent";
		nav_parent[0].style.color = "var(--fg-navbar)";
		nav_parent[0].style.boxShadow = "0px 0px 0px 0px var(--box-shadow-color)";
		if (menu_icon_2.length > 0) {
			menu_icon_2[0].className = "menu";
		}
		links[0].style.borderColor = "var(--white)";
		if (window.innerWidth > 1025 && selected.length > 0) {
			selected[0].style.backgroundColor = "var(--nav-item-selected)";
			selected[0].style.color = "var(--nav-item-selected-color)";
		}
		for (var i = nav_item_2.length - 1; i >= 0; i--) {
			nav_item_2[i].className = nav_item_2[i].className.replace("nav-item-x", "nav-item");
		}
		/*document.getElementById("menu").style.filter = "invert(0%)";*/
 	}
}