$(document).ready(function() {

  $(function(){

  setTimeout(function(){
      $("#SomeDivId").show();
  }, 3500);

  });

//hér er video gaurinn
          var vid = document.getElementById("bgvid");

          function vidFade() {
            vid.classList.add("stopfade");
          }

          vid.addEventListener('ended', function()
          {
          // only functional if "loop" is removed
          vid.pause();
          // to capture IE10
          vidFade();
          });


          var myVideo = document.getElementById('bgvid');
            if (typeof myVideo.loop == 'boolean') { // loop supported
                myVideo.loop = true;
            } else { // loop property not supported
                myVideo.on('ended', function () {
                this.currentTime = 0;
                this.play();
                }, false);
            }
            myVideo.play();


// fyrir línu og logo
        setTimeout(function() {
            $('svg.divider').attr('class', 'divider queued');
        }, 1500);
        setTimeout(function() {
            $('.animated-block').addClass('queued');
        }, 2400);

        $(window).on('resize', function() {
            $('.text-wrapper').css('background', 'none');
            setTimeout(function() {
                $('.text-wrapper').removeAttr('style');
        }, 5);
        });


// audio

$('#myAudio').html('<audio><source src="sound/neisti2.mp3"></audio>');


        var audioElement = document.createElement('audio');
         audioElement.setAttribute('src', 'sound/neisti2.mp3');


         $("#morphable").click(function() {
                if ($(this).hasClass("open")) {
                    $(this).removeClass("open");
                     audioElement.pause();
                } else {
                    $(this).addClass("open");
                    audioElement.play();
                }

            });



// play/pause takkinn

          aniLeftToStop = document.getElementById('ani-left-to-stop');
          aniRighTtoStop = document.getElementById('ani-right-to-stop');
          aniLefTtoPlay = document.getElementById('ani-left-to-play');
          aniRightToPlay = document.getElementById('ani-right-to-play');

          $('#morphable').on('click','.button',function(){
            if( $(this).hasClass('play') ){
              $(this).removeClass('play').addClass('stop');
              aniLeftToStop.beginElement();
              aniRighTtoStop.beginElement();
              // window.console.log("stop");
            } else
            if ( $(this).hasClass('stop') ) {
              $(this).removeClass('stop').addClass('play');
              aniLefTtoPlay.beginElement();
              aniRightToPlay.beginElement();
              // window.console.log("play");
            }
          });

// delay á iconið
          // setTimeout(function(){
          //     $('#scroll_icon').fadeIn(200);
          // }, 3500);


// sidebar
          // var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	//console.log(windowHeight);
	//$('#mobile-menu').height(windowHeight);
	//$('#mobile-menu').width(windowWidth);
	var mMenuStatus = 'close'; //menu er lokað on page
	//console.log(mMenuStatus);

	$( '.menu-icon' ).click(function() {
  		if (mMenuStatus == 'close' ) {
  			$('.slide_menu').css('right', '0');
  			mMenuStatus = 'open';
  			$( '.menu-icon' ).css('color', '#fff');
  			$( ".menu-icon" ).removeClass('fa-angle-double-left').addClass('fa-angle-double-right');


  		} else {
  				$('.slide_menu').css('right', '-320px');
  				mMenuStatus = 'close';
  				$( '.menu-icon' ).css('color', '#fff');
  				$( ".menu-icon" ).removeClass('fa-angle-double-right').addClass('fa-angle-double-left');
  		}
  		// $('.slide_menu').css('transition','ease-in 1s');
      	});

	});

  
