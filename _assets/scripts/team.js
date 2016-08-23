$( ".team-member" ).hover(
  function() {
    $( this ).children( ".team-details").first().removeClass( "hidden" );
  }, function() {
    $( this ).children( ".team-details").first().addClass( "hidden" );
  }
);