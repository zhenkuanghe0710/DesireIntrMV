
      // ensure the web page (DOM) has loaded
      document.addEventListener("DOMContentLoaded", init());
      
      var main;
      var choice1a;
      var choice1b;
      var playing;
      var captions;
      var choice;
      var currentChoice;
      //initializer for all the popcorn stuff
      function init() {
      	console.log("inited!");
      	main = Popcorn("#main-media", { frameAnimation: true });
      	playing = false;
      	captions = true;
      	//main.play();
      	//choice1a = Popcorn("#choice1a-media");
      	choice1b = Popcorn("#choice1b-media");
      	choice2b = Popcorn("#choice2b-media");
      	choice3b = Popcorn("#choice3b-media");
      	choice4b = Popcorn("#choice4b-media");
      	
      	      	
      	choice1b.preload("auto");
  		
  		//timer function
  		/*
main.on( "timeupdate", function( event ) {
			
    		//update our percentage div with the percentage
    		document.getElementById( "timer" ).innerHTML = this.currentTime();
		});
*/

		/*
choice4b.on( "timeupdate", function( event ) {
    		//update our percentage div with the percentage
    		document.getElementById( "timer" ).innerHTML = this.currentTime();
    		console.log(this.currentTime());
		});
*/


      	//cues
      	
      	//choice 1
      	main.cue(41.1, function() {
				console.log("Choice 1"+ choice1b.duration());
				document.getElementById("choice-a").className = "choice";
				document.getElementById("choice-b").className = "choice";
			});
		//choice 1 reset
		main.cue(44.6, function() {
			if(choice=="a"){
	      		choice = "";
		      	console.log("showing a");
		      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 1", "a"]);
	      	}else if(choice=="b"){
	      		choice = "";
	      		currentChoice = "choice1";
	      		if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 1", "b"]);
		      	document.getElementById("choice1b-media").style.zIndex = 4;
		      	document.getElementById("choice1b-media").className = "";
		      	choice1b.play();
		      	console.log("showing b");	      	
		    }else{
		    if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 1", "nonepicked"]);
		    console.log("none picked");
		    }
				document.getElementById("choice-a").className = "choice hidden";
				document.getElementById("choice-b").className = "choice hidden";
				choice2b.preload("auto");
			});
		//choice 2	
		main.cue(83.4, function() {
				console.log("Choice 2"+ choice2b.duration());
      	
				document.getElementById("choice-a").className = "choice";
				document.getElementById("choice-b").className = "choice";
			});
		//choice 2 reset	
		main.cue(86.4, function() {
			if(choice=="b"){
				choice = "";
		      	console.log("showing b");
		      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 2", "b"]);
	      	}else if(choice=="a"){
	      		choice = "";
	      		currentChoice = "choice2";
	      		document.getElementById("choice2b-media").style.zIndex = 4;
		      	document.getElementById("choice2b-media").className = "";
		      	choice2b.play();
		      	console.log("showing a");
		      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 2", "a"]);
	      	}else{
	      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 2", "nonepicked"]);
	      	console.log("none picked");
	      	}
				document.getElementById("choice-a").className = "choice hidden";
				document.getElementById("choice-b").className = "choice hidden";
				choice3b.preload("auto");
			});
		//choice 3
      	main.cue(113.9, function() {
				console.log("Choice 3"+ choice3b.duration());
      			document.getElementById("choice-a").className = "choice";
				document.getElementById("choice-b").className = "choice";
			});
		//choice 3 reset
		main.cue(116.1, function() {
			if(choice=="b"){
				choice = "";
		      	console.log("showing b");
		      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 3", "b"]);
	      	}else if(choice=="a"){
	      		choice = "";
	      		currentChoice = "choice3";
	      		document.getElementById("choice3b-media").style.zIndex = 4;
		      	document.getElementById("choice3b-media").className = "";
		      	choice3b.play();
		      	console.log("showing a");
		      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 3", "a"]);
		      	
	      	}else{
	      		console.log("none picked");
	      		if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 3", "nonepicked"]);
	      	}	
				document.getElementById("choice-a").className = "choice hidden";
				document.getElementById("choice-b").className = "choice hidden";
				choice4b.preload("auto");
			});
		//choice 4	
		main.cue(149.5, function() {
				console.log("Choice 4"+ choice4b.duration());
				document.getElementById("choice-a").className = "choice";
				document.getElementById("choice-b").className = "choice";
			});
		//choice 4 choices reset	
		main.cue(152, function() {
				document.getElementById("choice-a").className = "choice hidden";
				document.getElementById("choice-b").className = "choice hidden";
			});
			//choice 4 reset
		main.cue(153.45, function() {
			if(choice=="b"){
				choice = "";
				currentChoice = "choice4";
		      	document.getElementById("choice4b-media").style.zIndex = 4;
		      	document.getElementById("choice4b-media").className = "";
		      	choice4b.play();
		      	console.log("showing b");
		      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 4", "a"]);
	      	}else if(choice=="a"){
	      		choice = "";
		      	console.log("showing a");
		      	if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 4", "b"]);
	      	}else{
	      		if (_gaq) _gaq.push(['_trackEvent', "Choice", "Choice 4", "nonepicked"]);
	      		console.log("none picked");
	      	}	
				
			});
      //post-choice hiders
      //choice 1
      	choice1b.cue(13, function() {
      			console.log("end of 1b");
				document.getElementById("choice1b-media").className = "hidden";
				document.getElementById("choice1b-media").style.zIndex = -2;
				currentChoice = "";
			});
		choice2b.cue(8.675333023071289, function() {
      			console.log("end of 2b");
				document.getElementById("choice2b-media").className = "hidden";
				document.getElementById("choice2b-media").style.zIndex = -2;
				currentChoice = "";
			});
		choice3b.cue(14.848167419433594, function() {
      			console.log("end of 3b");
				document.getElementById("choice3b-media").className = "hidden";
				document.getElementById("choice3b-media").style.zIndex = -2;
				currentChoice = "";
			});
		choice4b.cue(15.181833267211914, function() {
      			console.log("end of 4b");
				document.getElementById("choice4b-media").className = "hidden";
				document.getElementById("choice4b-media").style.zIndex = -2;
				currentChoice = "";
			});
      
      main.cue(233, function() {
				document.getElementById("share-buttons").className = "";
	      		console.log("endscreen");
	      		document.getElementById("main-media").className = "hidden";
				document.getElementById("playbutton").className = "replay";
				playing = false;
				if (_gaq) _gaq.push(['_trackEvent', "timeline", "finisedvideo"]);
			});
      $("#ex1").modal();
    }
    //main picker function
    function choicePick(x){
    	choice = x;
	      if(x=="a"){
	      		choice = "a";
		      	console.log("Picked "+choice);
	      }else if(x=="b"){
		      	console.log("Picked "+choice);
	      }
     }

    //handles toggling the button states of the play/pause button
  
   
	function togglePlay(){
		if(!playing){
			if(currentChoice == "choice1"){
				choice1b.play();
			}else if(currentChoice == "choice2"){
				choice2b.play();
			}else if(currentChoice == "choice3"){
				choice3b.play();
			}else if(currentChoice == "choice4"){
				choice4b.play();
			}
			document.getElementById("share-buttons").className = "hidden";
			document.getElementById("main-media").className = "";
			main.play();
			document.getElementById("playbutton").className = "pause";
			playing = true;
			console.log("playing!");
		}else{
			if(currentChoice == "choice1"){
				choice1b.pause();
			}else if(currentChoice == "choice2"){
				choice2b.pause();
			}else if(currentChoice == "choice3"){
				choice3b.pause();
			}else if(currentChoice == "choice4"){
				choice4b.pause();
			}
			main.pause();
			document.getElementById("playbutton").className = "play";
			playing = false;
			console.log("pause");
			}
		
	}
	function beginVideo(){
			$.modal.close();
			main.play();
			document.getElementById("playbutton").className = "pause";
			playing = true;
			console.log("playing!");
	}
	//handles toggling the button states of the CC button
	//captions = true;
	function toggleCaptions(){
		if(!captions){
			//main.disable('subtitle');
			document.getElementById("subtitle").className = "hidden";
			document.getElementById("captionbutton").className = "captionsoff";
			captions = true;
			console.log("captions off!");
		}else{
			console.log("captions on!");
			//main.enable('subtitle');
			document.getElementById("subtitle").className = "";
			document.getElementById("captionbutton").className = "captionson";
			captions = false;
		}
		
	}