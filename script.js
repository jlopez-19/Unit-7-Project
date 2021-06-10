$(".results").hide();

$("button").click(function() {
    let character = $(".user-chc").val();

    if (character === "Chico") {
        $(".chico-Maria").show();
    } 
    if (character === "Maria") {
        $(".chico-Maria").show();
    }
    if (character === "Saya") {
        $(".saya").show();
    }
    if (character === "Marcus") {
        $(".M-P-L-B").show();
    }
    if (character === "Petra") {
        $(".M-P-L-B").show();
    }
    if (character === "Lex") {
        $(".M-P-L-B").show();
    } 
    if (character === "Willie") {
        $(".fwo").show();
    }
    else {
        $(".results").hide();
    }
    
    let bdate = $(".user-bdate").val();

    $(".fullSentence").text("");
    $(".fullSentence").append("<br>" + "Your favorite character is: " + character);
    $(".fullSentence").append("<br>" + "Your birth date is the: " + bdate);
});
