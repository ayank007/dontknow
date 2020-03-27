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
			+search, function(data){
				data.items.forEach(item => {
					video = `
						<iframe
							width="420"
							height="315"
							src="http://www.youtube.com/embed/${item.id.videoId}"
							frameborder="0"
							allowfullscreen>
						</iframe>
					`
					$("#videos").append(video)
				});
			}
		)
	}
})

$(function(){
	var voiceList=$("#voiceList")
	var txtip=$("#txtip")
	var speak=$("#speak")
	var tts=window.speechSynthesis
	var voices=[]
	function GetVoices(){
		voices=tts.getVoices();
		voiceList.innerHTML=''
		voices.forEach((voice) => {
			var listItem = document.createElement('option')
			listItem.textContent=voice.name
			listItem.setAttribute('data-lang', voice.lang)
			listItem.setAttribute('data-lang',voice.name)
			voiceList.append(listItem)
		})
	}
	GetVoices()
	if(speechSynthesis!==undefined){
		speechSynthesis.onVoiceChanged=GetVoices
		speak.addEventListner('click',()=>{
			var toSpeak=new speechSynthesisUtterance(txt.value)
			var selectedVoiceName=voiceList.selectedOption[0].getAttribute('data-name')
			voices.forEach((voice)=>{
				if(voice.name===selectedVoiceName){
					toSpeak.voice=voice
				}
			})
			tts.speak(toSpeak)
		})
	}
})

$(function(){
	$('.side-bar').theiaStickySidebar()
})