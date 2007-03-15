/* $Id$ */

Drupal.Userreview = {};

Drupal.Userreview.build_table = function() {
  // Hide select box
  var html_table = '<table class="userreview_selector_table">';
  html_table += '<tbody><tr>';
  $('#edit-vote-value option').each(function() {
    var cls = 'userreview_vote_option';
    if (this.selected) {
      cls += ' userreview_vote_selected';
    }
    html_table += '<td class="' + cls + '">';
    html_table += '<span>' + $(this).text() + '</span>'
    html_table += '<input type="hidden" name="userreview_option_value_' + this.value + '" value="' + this.value + '" />';
    html_table += '</td>';
  });
  html_table += '</tr></tbody></table>';
  $('#edit-vote-value').css({display:'none'}).parent().append(html_table);
}

Drupal.Userreview.init_highlight = function() {
  $('.userreview_vote_option').hover(function() {
    $(this).addClass("userreview_vote_option_hover");
  },function(){
    $(this).removeClass("userreview_vote_option_hover");
  });	
};

Drupal.Userreview.init_click = function() {
  $('.userreview_vote_option').click(function() {
    $('.userreview_vote_option').each(function() {
      $(this).removeClass('userreview_vote_selected');
    });
    $(this).addClass('userreview_vote_selected');
    var value = $(this).children('input[@type=hidden]').val();
	$('#edit-vote-value option').each(function() {
	  this.selected = (this.value == value);
	});
	//alert($('#edit-vote-value').get(0).selectedIndex);
  });	
};

$(window).load(function() {
  Drupal.Userreview.build_table();  
  Drupal.Userreview.init_highlight();  
  Drupal.Userreview.init_click();
});


