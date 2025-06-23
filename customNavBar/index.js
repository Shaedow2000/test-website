const Sidebar= document.getElementById("mobile-nav");

function openSidebar() {
    Sidebar.style.top = "0";
}

function closeSidebar() {
    Sidebar.style.top = "-10000px";
}