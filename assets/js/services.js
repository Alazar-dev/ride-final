$(document).ready(()=>{
    $("#corporateCarImage").click(function(){
        $('#corporateCarImages, #corporate').removeClass('hiddenCorporateCarImages');
    });
    $("#midSizeCarImage").click(function() {
        $("#midSizeCarImages, #mid-size").removeClass('hiddenMidSizeCarImages');
    });
    $("#englishSpeakerCarImage").click(function(){
        $("#englishSpeakerCarImages, #english-speaker").removeClass('hiddenEnglishSpeakerCarImages');
    });
})