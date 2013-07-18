$(document).on('pop-initialized', function(){
  if ($('html').is('.lt-ie9')) {
    $('.asset').live('initialize', function(){
      $('.columnizer-row:nth-child(even)').removeClass('even odd').addClass('even');
      $('.columnizer-row:nth-child(odd)').removeClass('even odd').addClass('odd');
    });
  }

  // $('.asset-type-imagegroup').live('initialize', function(){
  //   $(this).find('.slide').each(function(){
  //     var $link = $(this).find('a');
  //     $link.find('img').insertBefore($link);
  //     $link.addClass('cumberland-icon cumberland-icon-magnify').css({'line-height': $(this).height() + 'px'});
  //   });
  // });

  $('.asset-type-imagegroup').live('initialize', function(){
    $(this).find('.slide').each(function(){
      var $el = $(this).find('a');
      $link = $el.clone();
      $link.find('img').remove();
      $link.addClass('cumberland-icon cumberland-icon-magnify').css({'line-height': $(this).height() + 'px'});
      $link.insertAfter($el);
    });
  });
});
