/**
 * buildNavBar - builds the nav bar in all windows given an empty div with 
 * id=navbarlocation  Contents of the nav bar will be defined by the labels[]
 * array, targets will be defined by the corresponding entry in refs[]
 * 
 * Active location will be determined from the pathname - this could lead to 
 * issues if link strings are non-unique (e.g. index.html and new-index.html)
 */
function buildNavBar() 
{
    $navtab = $("#navbarlocation");
    $menuSpace = $("<nav>", { "class": "navbar navbar-default"});
    $navtab.append($menuSpace);
    $menuList = $("<div>", {"class":"nav navbar-nav navbar-default"}); // , "id": "addnavhere"});
    $menuSpace.append($menuList);
    // <a class="navbar-brand href="#">CS@SLHS</a>
    $menuHeader = $("<div>", { "class": "navbar-header"});
    $menuBrand = $("<a>", { "class": "navbar-brand"});
    $menuBrand.html(" CS@SLHS");
    $menuHeader.append($menuBrand);
    $menuList.append($menuHeader);

    var refs = [
        "/index.html",
        "/APCSA/apcsa.html",
        "/APCSP/apcsp.html",
        "/WebDev/webdev.html"
    ];
    var labels = [
        "CS Home",
        "AP CS A",
        "AP CS Principles",
        "Web Development"
    ];
    
    var url = window.location.pathname;

    for( var i=0; i<refs.length; i++ )
    {
        $listthing = $("<li>" , {"class": "nav-item pagenav ms-5", "id": labels[i].replaceAll(" ", "") });
        $bizlink = "<a href='" + refs[i] + "'>" + labels[i] + "</a>";

        $menuList.append($listthing);
        $listthing.append($bizlink);
        if( url.includes(refs[i]))
        {
            $listthing.addClass("active bg-danger");
        }
    }
}

buildNavBar();