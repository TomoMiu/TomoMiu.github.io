// REVEAL //
window.sr = ScrollReveal({opacity: 0, distance: '50px', duration: 500, scale: 1})
sr.reveal('.title', {origin: 'top'})
sr.reveal('.underline')
sr.reveal('.about_me', {distance: 0, scale: 0.5, duration: 1000})
sr.reveal('.text_skill', {distance: '100px', origin: 'left'}, 100)
sr.reveal('.bar', {distance: 0, rotate: {y: 90}, easing: 'linear'}, 50)
sr.reveal('.project_view', {distance: 0, scale: 2});
sr.reveal('.item_project', {origin: 'right', easing: 'linear', duration: 300}, 100)
sr.reveal('.text_gallery', {distance: 0, scale: 0.1, duration: 500})
sr.reveal('.image', {origin: 'right', easing: 'linear', duration: 300}, 100)
sr.reveal('.see_all', {distance: 0, scale: 0.1})
sr.reveal('.call', {distance: 0, scale: 0.1})
sr.reveal('.social')

// VARIATIONS //
var active1 = document.querySelector(".active1_off")
var active2 = document.querySelector(".active2_off")
var active3 = document.querySelector(".active3_off")
var text1 = document.querySelector(".text1_off")
var text2 = document.querySelector(".text2_off")
var text3 = document.querySelector(".text3_off")
var project_all = document.getElementById("project_all")
var project_team = document.getElementById("project_team")
var project_personal = document.getElementById("project_personal")
var project1 = document.getElementById("project1")
var project2 = document.getElementById("project2")
var project3 = document.getElementById("project3")
var project1_button = document.getElementById("project1_button")
var project2_button = document.getElementById("project2_button")
var project3_button = document.getElementById("project3_button")
var slide = document.querySelector(".slide")
var heading = document.querySelector(".heading")
var text_pr1 = document.querySelector(".text_pr1")
var text_pr2 = document.querySelector(".text_pr2")
var visit = document.querySelector(".visit")
var visit_link = document.querySelector(".visit_link")
var view = document.getElementById("view")
var fill_all = document.querySelector(".fill_all")
var main_cursor = document.querySelector(".main_cursor")
var block_left = document.querySelector(".block_left")
var block_right = document.querySelector(".block_right")

// NAVIGATION BAR //
window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
document.getElementById("home").addEventListener("click", function ()
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
document.getElementById("about").addEventListener("click", function ()
{
    window.scrollTo({
        top: 910,
        behavior: 'smooth'
    })
})
document.getElementById("web").addEventListener("click", function ()
{
    window.scrollTo({
        top: 1630,
        behavior: 'smooth'
    })
})
document.getElementById("graphic").addEventListener("click", function ()
{
    window.scrollTo({
        top: 2250,
        behavior: 'smooth'
    })
})
document.getElementById("contact_me").addEventListener("click", function ()
{
    window.scrollTo({
        top: 3000,
        behavior: 'smooth'
    })
})
// SCROLL //
main_cursor.addEventListener("click", function () {
    window.scrollTo({
        top: 910,
        behavior: 'smooth'
    });
});
block_left.addEventListener("click", function () {
    window.scrollTo({
        top: 1630,
        behavior: 'smooth'
    });
});
block_right.addEventListener("click", function () {
    window.scrollTo({
        top: 2250,
        behavior: 'smooth'
    });
});
// PROJECT VIEW //
project_all.addEventListener("click", function () {
    active1.classList.add("active1_on")
    text1.classList.add("text1_on")
    active2.classList.remove("active2_on")
    text2.classList.remove("text2_on")
    active3.classList.remove("active3_on")
    text3.classList.remove("text3_on")
    project1.classList.add("item_project_on")
    project2.classList.add("item_project_on")
    project3.classList.add("item_project_on")
    project1.classList.remove("item_project_off")
    project2.classList.remove("item_project_off")
    project3.classList.remove("item_project_off")    
})
project_team.addEventListener("click", function () {
    active2.classList.add("active2_on")
    text2.classList.add("text2_on")
    active1.classList.remove("active1_on")
    text1.classList.remove("text1_on")
    active3.classList.remove("active3_on")
    text3.classList.remove("text3_on")
    project1.classList.add("item_project_on")
    project1.classList.remove("item_project_off")
    project2.classList.add("item_project_on")
    project2.classList.remove("item_project_off")
    project3.classList.add("item_project_off")
    project3.classList.remove("item_project_on")
})
project_personal.addEventListener("click", function () {
    active3.classList.add("active3_on")
    text3.classList.add("text3_on")
    active2.classList.remove("active2_on")
    text2.classList.remove("text2_on")
    active1.classList.remove("active1_on")
    text1.classList.remove("text1_on")
    project3.classList.remove("item_project_off")
    project3.classList.add("item_project_on")
    project1.classList.remove("item_project_on")
    project1.classList.add("item_project_off")
    project2.classList.remove("item_project_on")
    project2.classList.add("item_project_off")
})

// VIEW DETAIL //
project1_button.addEventListener("click", function () {
    fill_all.style.opacity = "0.8"
    fill_all.style.visibility = "visible"
    view.style.opacity = "1"
    view.style.visibility = "visible"
    slide.style.backgroundImage = "url('Galleries/pr1_1.png')"
    slide.style.backgroundSize = "700px 430px"
    heading.innerHTML = "SAIGON CUP"
    text_pr1.innerHTML = "Trang Web cho giải đấu game đối kháng Saigon Cup năm 2018 tổ chức tại TP. Hồ Chí Minh"
    text_pr2.innerHTML = "Vị trí: Tình nguyện viên (thiết kế UI/UX)"
    visit.style.opacity = "1"
    visit.style.visibility = "visible"
    visit_link.href = "https://sgc18.saigonfgc.com"
})
project2_button.addEventListener("click", function () {
    fill_all.style.opacity = "0.8"
    fill_all.style.visibility = "visible"
    view.style.opacity = "1"
    view.style.visibility = "visible"
    slide.style.backgroundImage = "url('Galleries/pr2_1.png')"
    slide.style.backgroundSize = "700px 430px"
    heading.innerHTML = "SEA MAJOR"
    text_pr1.innerHTML = "Trang Web tổng hợp các giải đấu game đối kháng tại khu vực Đông Nam Á"
    text_pr2.innerHTML = "Vị trí: Tình nguyện viên (thiết kế UI/UX)"
    visit.style.opacity = "1"
    visit.style.visibility = "visible"
    visit_link.href = "https://www.beastapac.com/"
})
project3_button.addEventListener("click", function () {
    fill_all.style.opacity = "0.8"
    fill_all.style.visibility = "visible"
    view.style.opacity = "1"
    view.style.visibility = "visible"
    slide.style.backgroundImage = "url('Galleries/pr3_2.png')"
    slide.style.backgroundSize = "700px 430px"
    heading.innerHTML = "MOSAIC SUSHI"
    text_pr1.innerHTML = "Trang Web thử nghiệm cho một nhà hàng sushi"
    text_pr2.innerHTML = "Vị trí: Front-end development"
    visit.style.opacity = "0"
    visit.style.visibility = "hidden"
    visit_link.href = "#"
})
fill_all.addEventListener("click", function () {
    fill_all.style.opacity = "0"
    fill_all.style.visibility = "hidden"
    view.style.opacity = "0"
    view.style.visibility = "hidden"
})
// BACK TO TOP //
document.querySelector(".back_top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

