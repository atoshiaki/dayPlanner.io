$(document).ready(function(){
    $("#currentDay").text(moment().format("MMM Do YY"));
})
function myFunction1() {
    /* Get the text field */
    var copyText = document.getElementById("myInput1");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
 
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}  