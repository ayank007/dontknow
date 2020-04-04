$(function() {
	alert("lets strat");
	var video='';
	var API_KEY="AIzaSyAa5FpvRztobLfeH8Snx7BOZCsyonOi_Xk";
	//var ff=document.querySelector("#ff");
	//ff.submit(function(event){
		// event.preventDefault();
		//alert("DO");
		// var search=document.querySelector("#search").val();
		// videoSearch(API_KEY, search, 4);
	//});
	var search=document.querySelector('#search').value;
	var ytb=document.querySelector('#submit');
	ytb.addEventListener('click', ()=> {
		alert(search);
		videoSearch(API_KEY, search, 4);
	});


	function videoSearch(key, search, n){
		$.get("https://www.googleapis.com/youtube/v3/search?key="
			+key+
			"&type=video&part=snippet&maxResults="
			+n+
			"&q="
			+search,function(data){
				console.log(data);
				data.items.forEach(item => {
					video = `
					
					<iframe	width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
					
					`
					var videos=document.querySelector("#videos");
					videos.append(video);
				});
			}
		);
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

$(function() {
	var bg=document.querySelector("#bg");
	var mountain=document.querySelector("#mountain");
	var moon=document.querySelector("#moon");
	var road=document.querySelector("#road");
	var text=document.querySelector("#text");
	window.addEventListener('scroll',function(){
		var value=window.scrollY;
		bg.style.top=value*0.5+'px';
		moon.style.left=-value*0.5+'px';
		mountain.style.top=-value*0.5+'px';
		road.style.top=value*1+'px';
	});
})