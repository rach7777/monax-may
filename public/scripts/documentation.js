var str = $( "h1[role='title']" ).text();
replacePattern = /(Documentation)\s*\|\s*(\S*)\s\|\s(\S*)/gim;
$("h1[role='title']").replaceWith(str.replace(replacePattern, '<h1 class="title" role="title"><a href="../../../">$1</a> | <a href="../../">$2</a> | $3</h1>'));
