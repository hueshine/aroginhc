


gsap.from(".footer-section", { 
    scrollTrigger: { 
        trigger: "footer", 
        start: 'top center', 
        end: 'bottom bottom', 
        
    } ,
    opacity: 0,
    duration: 1,
    y: 20,
})

gsap.from('.banner .item .banner-image img.upper', {
    opacity:0,
    duration: 0.8,  
})

gsap.from('.banner .item .banner-image img.lower', {
    opacity:0,
    delay: 1,
    duration: 0.6, 
    y: 100, 
})

if($('.banner-slider').length){

    jQuery('.tp-banner').show().revolution({
      delay:10000,
      startwidth:1170,
      startheight:500,
      hideThumbs:600,

      thumbWidth:80,
      thumbHeight:50,
      thumbAmount:5,

      navigationType:"bullet",
      navigationArrows:"0",
      navigationStyle:"preview4",

      touchenabled:"on",
      onHoverStop:"off",

      swipe_velocity: 0.7,
      swipe_min_touches: 1,
      swipe_max_touches: 1,
      drag_block_vertical: false,

      parallax:"mouse",
      parallaxBgFreeze:"on",
      parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

      keyboardNavigation:"off",

      navigationHAlign:"center",
      navigationVAlign:"bottom",
      navigationHOffset:0,
      navigationVOffset:20,

      soloArrowLeftHalign:"left",
      soloArrowLeftValign:"center",
      soloArrowLeftHOffset:20,
      soloArrowLeftVOffset:0,

      soloArrowRightHalign:"right",
      soloArrowRightValign:"center",
      soloArrowRightHOffset:20,
      soloArrowRightVOffset:0,

      shadow:0,
      fullWidth:"on",
      fullScreen:"off",

      spinner:"spinner4",

      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,

      shuffle:"off",

      autoHeight:"off",
      forceFullWidth:"on",

      hideThumbsOnMobile:"on",
      hideNavDelayOnMobile:1500,
      hideBulletsOnMobile:"on",
      hideArrowsOnMobile:"on",
      hideThumbsUnderResolution:0,

      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      startWithSlide:0,
      videoJsPath:"",
      fullScreenOffsetContainer: ".banner-slider"
  });
}