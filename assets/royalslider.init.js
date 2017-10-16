// inserted icon on thumbnail video only
(function($) {
  $.rsProto._initVideoPlayButtonInThumbs = function() {
    var self = this;
    self.ev.on('rsAfterParseNode', function(e, content, obj) {
      if(obj.videoURL) {
           // just wrap it
          obj.thumbnail = '<div class="video">' + obj.thumbnail + '</div>';

           // or add class to img
           // obj.thumbnail = obj.thumbnail.replace('<img', '<img class="video"');
      }
        
    });
  };
  $.rsModules.videoPlayButtonInThumbs = $.rsProto._initVideoPlayButtonInThumbs;
})(jQuery);
// end inserted icon on thumbnail video only


jQuery(document).ready(function($) {
  $('#content-slider-1, #content-slider-2').royalSlider({
  	autoHeight: true,
  	arrowsNav: true,
  	arrowsNavAutoHide:false,
  	fadeinLoadedSlide: false,
  	controlNavigationSpacing: 0,
  	controlNavigation: 'thumbnails',
  	thumbs: {
    		spacing: 8,
    		arrowsAutoHide: false,
    		autoCenter:	true,
        orientation: 'vertical'
    	},
  	imageScaleMode: 'none',
  	imageAlignCenter:false,
  	loop: false,
  	loopRewind: true,
  	numImagesToPreload: 8,
  	keyboardNavEnabled: true,
  	usePreloader: false,

     autoScaleSlider: true, 
    autoScaleSliderWidth: 660,     
    autoScaleSliderHeight: 400,
  	video: {
  		autoHideArrows:true,
  		autoHideControlNav:false,
  		autoHideBlocks: false,
  		 youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=0&autoplay=1&showinfo=0" frameborder="no" allowfullscreen></iframe>'
  	}
  });
});