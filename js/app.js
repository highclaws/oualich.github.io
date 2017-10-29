jQuery(document).ready(function() {
    $('.navmenu').velocity({
        translateY: [0, -30],
        opacity: [1, 0],
    }, {
        duration: 8000,
        display: 'block',
        easing: [10, 10]

    });
    $('.menu-list2').velocity({
        translateX: [0, 110],
        opacity: [1, 0],

    }, {
        duration: 8000,
        easing: [10, 10]

    });
    $('h2').velocity({
        translateX: [0, -1200],
        opacity: [1, 0]
    }, {
        duration: 8000,
        display: 'block',
        easing: [10, 10]

    });
    $('.flex a').velocity({
        translateX: [0, 1200],
        opacity: [1, 0]
    }, {
        duration: 8000,
        display: 'block',
        easing: [15, 15]

    });
    $('.center2').velocity({
        opacity: [1, 0]
    }, {
        duration: 12000,
        display: 'block',
        easing: [15, 15]

    });
    $('.responsive').velocity({
        translateX: [0, -1200],
        opacity: [1, 0]
    }, {
        duration: 12000,
        stagger: 1000,
        display: 'block',
        easing: [15, 15]

    });
    $divs = $('.projet');
    $('a').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
    })
    $divs.velocity("transition.slideDownBigIn", { drag: true })
        .delay(750)
        .velocity({ opacity: 0 }, 750)
});

var $down = $("a");
var $up = $("a");

$down.on("click", function() {
    $up.velocity("scroll", {
        duration: 2000,
        easing: "easeInBack"
    });
});

$up.on("click", function() {
    $("body").velocity("scroll", {
        duration: 2000,
        easing: "easeInBack"
    });
});
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector(".wrapper");

// the activeLink provides a pointer to the currently displayed item
var activeLink = 0;

// setup the event listeners
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // identify the item for the activeLink
    link.itemID = i;
}

// set first item as active
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}

var transforms = ["transform",
    "msTransform",
    "webkitTransform",
    "mozTransform",
    "oTransform"
];

var transformProperty = getSupportedPropertyName(transforms);

// vendor prefix management
function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}
//
// The code for sliding the content automatically
//
var timeoutID;

function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setInterval(goToNextItem, 3000);
}
startTimer();

function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}

function goToNextItem() {
    removeActiveLinks();

    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }

    var newLink = links[activeLink];
    changePosition(newLink);
}
jQuery('.skillbar').each(function() {
    jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
    }, 2000);

});