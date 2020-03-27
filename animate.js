$(function() {
	alert("lets strat")
	var video=''
	var API_KEY="AIzaSyAa5FpvRztobLfeH8Snx7BOZCsyonOi_Xk"
	$("#ff").submit(function(event){
		event.preventDefault()
		alert("DO")
		var search=$("#search").val()
		videoSearch(API_KEY, search, 15)
	})

	function videoSearch(key, search, n){
		$.get("https://www.googleapis.com/youtube/v3/search?key="
			+key+
			"&type=video&part=snippet&maxResults="
			+n+
			"&q="
			+search,function(data){
				console.log(data)
				data.items.forEach(item => {
					video = `
					
					<iframe	width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
					
					`
					$("#videos").append(video)
				});
			}
		)
	}
})

$(function(){
	var txtInput = document.querySelector('#txtInput');
    var voiceList = document.querySelector('#voiceList');
    var btnSpeak = document.querySelector('#btnSpeak');
    var synth = window.speechSynthesis;
    var voices = [];

    PopulateVoices();
    if(speechSynthesis !== undefined){
        speechSynthesis.onvoiceschanged = PopulateVoices;
    }

    btnSpeak.addEventListener('click', ()=> {
        var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
        var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
        voices.forEach((voice)=>{
            if(voice.name === selectedVoiceName){
                toSpeak.voice = voice;
            }
        });
        synth.speak(toSpeak);
    });

    function PopulateVoices(){
        voices = synth.getVoices();
        var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
        voiceList.innerHTML = '';
        voices.forEach((voice)=>{
            var listItem = document.createElement('option');
            listItem.textContent = voice.name;
            listItem.setAttribute('data-lang', voice.lang);
            listItem.setAttribute('data-name', voice.name);
            voiceList.appendChild(listItem);
        });

        voiceList.selectedIndex = selectedIndex;
    }
})
$(function() { // document ready
	if ($('#sticky').length) { // make sure "#sticky" element exists
		var el = $('#sticky');
		var stickyTop = $('#sticky').offset().top; // returns number
		var stickyHeight = $('#sticky').height();

		$(window).scroll(function() { // scroll event
			var limit = $('#footer').offset().top - stickyHeight - 20;

			var windowTop = $(window).scrollTop(); // returns number

			if (stickyTop < windowTop) {
				el.css({
					position: 'fixed',
					top: 0
				});
			} else {
				el.css('position', 'static');
			}

			if (limit < windowTop) {
				var diff = limit - windowTop;
				el.css({
					top: diff
				});
			}
		});
	}
});