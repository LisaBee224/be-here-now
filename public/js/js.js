var $animation_elements = $('.animation-element');
var $window = $(window);

function in_view(){
  var window_height = $window.height();
  var window_top = $window.scrollTop();
  var window_bottom = (window_top + window_height);

  $.each($animation_elements, function(){
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top = $element.offset().top;
    var element_bottom = (element_height + element_top);

    if ((element_bottom >= window_top) && (element_top <= window_bottom)){
      $element.addClass('in-view').delay(800);
    }
    else{
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', in_view);
$window.trigger('scroll');
