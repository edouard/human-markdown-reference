$(window).ready(function() {
  $('.section-name').each(function(i) {
    if(i > 0){
      toggleSection(i);
    }
    
    $(this).click(function() {
      toggleSection(i)
    });
  });
});

function toggleSection(i) {
  $('.section').slice(i, i + 1).toggle();
  $('.section-name').slice(i, i + 1).toggleClass('deselected');
}