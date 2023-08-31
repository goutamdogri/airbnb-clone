var leftArrowNav = document.querySelector(".left-arrow-nav");
var toLeftHide = document.querySelector(".toLeftHide");
var rightArrowNav = document.querySelector(".right-arrow-nav");
var toRightHide = document.querySelector(".toRightHide");
var scrollingAllElmnt = document.querySelectorAll(".forScroll");
var scrolling = scrollingAllElmnt[0];
var scrElmntAllCSS = getComputedStyle(scrolling);

toLeftHide.classList.add("hide");

/* =====================================================
    multiple destination site scroll
======================================================*/

leftArrowNav.addEventListener("click", () => {
    // get the value which is a string with unit, etc.
    var scrElmntPropertyValueStr = scrElmntAllCSS.getPropertyValue("transform");
    // to get the required number and convert that from str -> number
    var scrElmntPropertyValueStrNum = "";
    for (var i = 18; scrElmntPropertyValueStr.charAt(i) != ","; i++) {
        scrElmntPropertyValueStrNum += scrElmntPropertyValueStr.charAt(i);
    }
    var scrElmntPropertyValueNum = Number(scrElmntPropertyValueStrNum);

    var scrElmntPropertyValueNum_afterScroll = scrElmntPropertyValueNum + 800;
    if (scrElmntPropertyValueNum_afterScroll >= -259) {
        scrElmntPropertyValueNum_afterScroll = 0;
    }

    // console.log(scrElmntPropertyValueNum_afterScroll);

    if (scrElmntPropertyValueNum_afterScroll == 0) {
        toLeftHide.classList.add("hide");
    } else {
        toLeftHide.classList.remove("hide");
    }

    if (scrElmntPropertyValueNum_afterScroll <= -2401) {
        toRightHide.classList.add("hide");
    } else {
        toRightHide.classList.remove("hide");
    }
    // to set the property and its value
    scrollingAllElmnt.forEach((element) => {
        element.style.transform = `translateX(${scrElmntPropertyValueNum_afterScroll}px)`;
    });
});

rightArrowNav.addEventListener("click", () => {
    // get the value which is a string with unit, etc. (it's required prev. two number)
    var scrElmntPropertyValueStr = scrElmntAllCSS.getPropertyValue("transform");
    // to get the required number and convert that from str -> number
    var scrElmntPropertyValueStrNum = "";
    for (var i = 18; scrElmntPropertyValueStr.charAt(i) != ","; i++) {
        scrElmntPropertyValueStrNum += scrElmntPropertyValueStr.charAt(i);
    }
    var scrElmntPropertyValueNum = Number(scrElmntPropertyValueStrNum);

    var scrElmntPropertyValueNum_afterScroll = scrElmntPropertyValueNum - 800;
    if (scrElmntPropertyValueNum_afterScroll <= -2401) {
        scrElmntPropertyValueNum_afterScroll = -2660;
    }

    // console.log(scrElmntPropertyValueNum_afterScroll);
    if (scrElmntPropertyValueNum_afterScroll == 0) {
        toLeftHide.classList.add("hide");
    } else {
        toLeftHide.classList.remove("hide");
    }

    if (scrElmntPropertyValueNum_afterScroll <= -2401) {
        toRightHide.classList.add("hide");
    } else {
        toRightHide.classList.remove("hide");
    }
    // to set the property and its value

    scrollingAllElmnt.forEach((element) => {
        element.style.transform = `translateX(${scrElmntPropertyValueNum_afterScroll}px)`;
    });
});

/* =====================================================
    image slider
======================================================*/

let travel_dest_opts = document.querySelectorAll(".travel-destination-option");

travel_dest_opts.forEach((travel_dest_opt) => {
    let left_arrow_nav_btn = travel_dest_opt.querySelector(".left-arrow-nav-btn");
    let right_arrow_nav_btn = travel_dest_opt.querySelector(".right-arrow-nav-btn");
    let dots = travel_dest_opt.querySelectorAll(".dot li");

    let dest_pics = travel_dest_opt.querySelector(".destination-pics");
    let dest_pics_imgs = travel_dest_opt.querySelectorAll(".destination-pics img");
    // debugger;
    let active = 0;
    let dest_pics_imgs_max_idx = dest_pics_imgs.length - 1;

    

    left_arrow_nav_btn.addEventListener("click", () => {
        // this line is for making infinite loop
        active = active - 1 >= 0 ? active - 1 : dest_pics_imgs_max_idx;

        if (active == 0) {
            left_arrow_nav_btn.style.visibility = "hidden";
            right_arrow_nav_btn.style.visibility = "visible";
        } else if (active == 4) {
            left_arrow_nav_btn.style.visibility = "visible";
            right_arrow_nav_btn.style.visibility = "hidden";
        } else if (active > 0 && active < 4) { 
            left_arrow_nav_btn.style.visibility = "visible";
            right_arrow_nav_btn.style.visibility = "visible";
        }
        reloader();
        
    })

    right_arrow_nav_btn.addEventListener("click", () => {
        // this line is for making infinite loop
        active = active + 1 <= dest_pics_imgs_max_idx ? active + 1 : 0;

        if (active == 0) {
            left_arrow_nav_btn.style.visibility = "hidden";
            right_arrow_nav_btn.style.visibility = "visible";
        } else if (active == 4) {
            left_arrow_nav_btn.style.visibility = "visible";
            right_arrow_nav_btn.style.visibility = "hidden";
        } else if (active > 0 && active < 4) {
            left_arrow_nav_btn.style.visibility = "visible";
            right_arrow_nav_btn.style.visibility = "visible";
        }

        reloader();
    })

    function reloader() {
        dest_pics.style.left = -dest_pics_imgs[active].offsetLeft + 'px';

        let last_active_dot = travel_dest_opt.querySelector('.dot li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');

    }

    travel_dest_opt.addEventListener("mouseover", () => {
        if (active == 0) {
            left_arrow_nav_btn.style.visibility = "hidden";
            right_arrow_nav_btn.style.visibility = "visible";
        } else if (active == 4) {
            left_arrow_nav_btn.style.visibility = "visible";
            right_arrow_nav_btn.style.visibility = "hidden";
        } else if (active > 0 && active < 4) {
            left_arrow_nav_btn.style.visibility = "visible";
            right_arrow_nav_btn.style.visibility = "visible";
        }
    });

    travel_dest_opt.addEventListener("mouseout", () => {
        left_arrow_nav_btn.style.visibility = "hidden";
        right_arrow_nav_btn.style.visibility = "hidden";
    });
});
