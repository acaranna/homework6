var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	//console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration-5){
		video.currentTime = video.currentTime+5;
	} 
	else{
		video.currentTime=0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	let vol = document.querySelector("#myVideo");
	if(vol.muted){
		document.getElementById("mute").innerHTML = "Mute"
		video.muted = false
	} 
	else{
		document.getElementById("mute").innerHTML = "Unmute"
		video.muted = true
	}
	console.log("Mute");
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	var volslide = this.value/100;
	video.volume = volslide;
	document.querySelector("#volume").innerHTML = this.value;
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("Old School");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("Original");
});