$(document).on('pop-initialized', function(){
  if ($('html').is('.lt-ie9')) {
    $('.asset').live('initialize', function(){
      $('.columnizer-row:nth-child(even)').removeClass('even odd').addClass('even');
      $('.columnizer-row:nth-child(odd)').removeClass('even odd').addClass('odd');
    });
  }

  // $('.asset-type-imagegroup').live('initialize', function(){
  //   $(this).find('.slide').not('.magnified').each(function(){
  //     $(this).addClass('magnified');  // we don't want to reprocess this, in case the editor fires this more than once without re-rendering the asset
  //     var $el = $(this).find('a');
  //     $link = $el.clone();
  //     $link.find('img').remove();
  //     $link.addClass('cumberland-icon cumberland-icon-magnify').css({'line-height': $(this).height() + 'px'});
  //     $link.insertAfter($el);
  //   });
  // });
});
