$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
})

function updateTime(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}
function renderEvents(){
    $("textarea").each(function(){
        var eventTime = $(this).siblings("div.hour").text();
        $(this).text(window.localStorage.getItem(eventTime));
    })

    $(".row").each(function(){
        var eventTime = $(this).children("div.hour").text()
        var roundTime = moment().startOf('hour').format("hh a");

        if (roundTime<eventTime) {
            $(this).children("textarea").addClass("future")
            console.log()
        }

        else if (roundTime>eventTime) {
            $(this).children("textarea").addClass("past")
            console.log()
        }

        else if (roundTime===eventTime) {
            $(this).children("textarea").addClass("present")
            console.log()
        }     
    })
}
$(document).ready(function(){
    updateTime();
    setInterval(updateTime, 1000);
    renderEvents()

    $(".saveBtn").on("click",function(){
        var testing = $(this).siblings("div.hour").text()
        window.localStorage.setItem(testing,$(this).siblings("textarea").val());

    })
})