var selection = '';
var params = '';
var drop;
var selectedText;

function highlight(element) {
  if (element) {
    $(element).addClass("highlightt");
    setTimeout(function() {
      $(element).removeClass('highlightt');
    }, 3000);
  }
}


$(document).click(function(event) {
  $target = $(event.target);
  if (!$target.closest('#tweet-box').length &&
    $('#tweet-box').is(":visible")) {
    // $('#menucontainer').hide();
    closeDrop();
  }
});


// twttr.widgets.load();

var contentss = $('.category-1').html();
$('.category-1').blur(function() {
  if (contentss != $(this).html()) {
    contentss = $(this).html();
  }
});

// this function is activated on mouseup after user has highlighted text
function addShareTool(a, previousSelection) {
  //not used

  console.log('addShareTool')
  // if annotation mode on
  var annotaionCheckbox = document.getElementById("annotation-switch").checked;
  if (annotaionCheckbox) {
    if (window.getSelection) {
      selection = window.getSelection();

    } else if (document.selection) {
      selection = document.selection.createRange();
    }



    if (selection.toString() !== '') {
      if (drop) {
        drop.close();
        drop.remove();
        drop = null;
      }
      anchorNode = selection.anchorNode.parentNode;
      focusNode = selection.focusNode.parentNode;

      var anchorNodeTime = parseInt(anchorNode.getAttribute('data-m'), 10);
      var anchorNodeDuration = parseInt(anchorNode.getAttribute('data-d'), 10);
      var focusNodeTime = parseInt(focusNode.getAttribute('data-m'), 10);
      var focusNodeDuration = parseInt(focusNode.getAttribute('data-d'), 10);

      // 1/10 of a second accuracy is fine for our needs

      anchorNodeTime = Math.floor(anchorNodeTime / 100);
      anchorNodeDuration = Math.floor(anchorNodeDuration / 100);
      focusNodeTime = Math.floor(focusNodeTime / 100);
      focusNodeDuration = Math.floor(focusNodeDuration / 100);

      if (anchorNodeTime < focusNodeTime) {
        params =
          '?s=' +
          anchorNodeTime +
          '&d=' +
          (focusNodeTime + focusNodeDuration - anchorNodeTime);
      } else {
        params =
          '?s=' +
          focusNodeTime +
          '&d=' +
          (anchorNodeTime + anchorNodeDuration - focusNodeTime);
      }
      if (!drop) {
        drop = new Drop({
          target: anchorNode,
          classes: 'drop-theme-basic',
          position: 'top center',
          constrainToWindow: true,
          constrainToScrollParent: true,
          openOn: 'always',
          content: '<div id="tweet-box"></div>',
        });

        drop.on('open', fillShare, false);
      }
      /*<a class="sharelink" href="#"><span class="icon-twitter"></span><span style="padding-left:40px">Share this text + video on Twitter</span></a>*/
    }
  }


}

function fillShare() {
  //not used
  // think can get rid of some of this function, since some of it was used to generate the tweet

  var url = window.location.href;
  var lastCharPos = url.length - 1;

  if (url.charAt(lastCharPos) == '/') {
    // URL ends with a '/'
    url = url.substr(0, lastCharPos);
  }

  var shareText = selection + ' ' + url + params;

  selectedText = selection;

  var overspill = shareText.length - 140;

  selection += '';

  if (selection.charAt(0) == ' ') {
    // trim leading whitespace
    selection = selection.substring(1, selection.length);
  }

  if (overspill > 0) {
    selection = selection.substr(0, selection.length - overspill - 5) + '...'; //3 dots + 2 quotes make 5 chars (subtract 5)
  }

  selection = '&quot;' + selection + '&quot;';

  // document.getElementById('tweet-box').innerHTML =
  //   '<div class="tweet-btn-hldr"> <a data-size="large" data-url="" data-text="' +
  //   selection +
  //   ' ' +
  //   url +
  //   params +
  //   '" href="http://twitter.com/share?url=none&count=none" class="twitter-share-button"></a><span><br/> text+video</span></div>';
  // drop.position();

  // what was a meant to mean?
  var a = true
  if (!a) {
    console.log('already selected');
    // b.contents().unwrap()

  } else {
    previousSelection = "";
  }

  // get category name information
  var cat1 = $('.category-1').html();
  var cat2 = $('.category-2').html();
  var cat3 = $('.category-3').html();
  var cat4 = $('.category-4').html();
  var cat5 = $('.category-5').html();
  var cat6 = $('.category-6').html();
  var cat7 = $('.category-7').html();
  var cat8 = $('.category-8').html();
  var cat9 = $('.category-9').html();
  var cat10 = $('.category-10').html();
  var cat11 = $('.category-11').html();
  var cat12 = $('.category-12').html();
  var cat13 = $('.category-13').html();
  var cat14 = $('.category-14').html();
  var cat15 = $('.category-15').html();

  document.getElementById('tweet-box').innerHTML =
    '<div class="tweet-btn-hldr field is-grouped is-grouped-multiline">' +
    '<div class="control"><div class="tags has-addons"><a id="category-1-button" class="tag is-link is-light grey category-1" onclick="SelectText(1)" href="javascript:void(0);">' + cat1 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-2-button" class="tag is-link is-light grey category-2" onclick="SelectText(2)" href="javascript:void(0);">' + cat2 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-3-button" class="tag is-link is-light grey category-3" onclick="SelectText(3)" href="javascript:void(0);">' + cat3 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-4-button" class="tag is-link is-light grey category-4" onclick="SelectText(4)" href="javascript:void(0);">' + cat4 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-5-button" class="tag is-link is-light grey category-5" onclick="SelectText(5)" href="javascript:void(0);">' + cat5 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-6-button" class="tag is-link is-light grey category-6" onclick="SelectText(6)" href="javascript:void(0);">' + cat6 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-7" onclick="SelectText(7)" href="javascript:void(0);">' + cat7 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-8" onclick="SelectText(8)" href="javascript:void(0);">' + cat8 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-9" onclick="SelectText(9)" href="javascript:void(0);">' + cat9 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-10" onclick="SelectText(10)" href="javascript:void(0);">' + cat10 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-11" onclick="SelectText(11)" href="javascript:void(0);">' + cat11 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-12" onclick="SelectText(12)" href="javascript:void(0);">' + cat12 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-13" onclick="SelectText(13)" href="javascript:void(0);">' + cat13 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-14" onclick="SelectText(14)" href="javascript:void(0);">' + cat14 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-7-button" class="tag is-link is-light grey category-15" onclick="SelectText(15)" href="javascript:void(0);">' + cat15 + '</a></div></div>' +
    '<div class="control"><div class="tags has-addons"><a id="category-remove-button" class="tag is-link is-light grey category-remove" onclick="RemoveAnnotation()" href="javascript:void(0);">' + 'Remove' + '</a></div></div>' +
    '</div>';
  drop.position();

  // twttr.widgets.load();
}



var $textarea = $('#content');

function RemoveAnnotation() {
  selection = window.getSelection();
  var fragment = selection.getRangeAt(0).cloneContents();
  if (fragment.firstElementChild.getAttribute('data-m')) {

    var firstElement = fragment.firstElementChild;
  } else {
    var firstElement = fragment.firstElementChild.firstElementChild;
  }

  var firstElementStartTime = firstElement.getAttribute('data-m');

  // close the drop
  closeDrop();

  // console.log(selection.getRangeAt(0));
  console.log(firstElementStartTime);
  findClass = "." + firstElementStartTime;
  console.log(findClass);
  // $("span").find("[data-m='" + firstElementStartTime + "']").css('background-color', 'red');
  $("span").find("[data-m='" + firstElementStartTime + "']").unwrap();

  var findClassAnnotation = "." + firstElementStartTime + "-annotation";
  console.log(findClassAnnotation);


  var n = $(findClassAnnotation).data("cat");

  // make annotation category glow on remove

  // need to get annotation category number

  // sleect data aatribute data-cat - it is the category number we want: n
  // it's of the paragraph with id
  // all info hightlight wants is category number
  // that's stored in the data-cat category
  // of the paragraph that's about to get deleted
  // .data("id")
  // var n = 10;
  var annotationLabel = ".category-" + n;
  highlight(annotationLabel);

  // remove annotations para
  $(findClassAnnotation).remove()

  // $("div").find("[class='" + firstElementStartTime + "'-annotation]").remove();;



  // $('.row').replaceWith(function() {
  //   return $('ul', this);
  //   });
  // $('.row').replaceWith(function() {
  //   return $('ul', this);
  //   });
  //   $(w.startContainer.parentElement).replaceWith(function () {
  //     return $(this).contents();
  // });
  gtag('event', 'annotation_remove', {
'event_category' : 'annotation'
});
}


function SelectText(n) {


  // store selection in a variable
  var selection = window.getSelection();



  // Make sure something was selected
  if (!selection.rangeCount) {
    //    closeDrop();
    return;
  }
  if (selection.type != 'Range') {
    return;
  }

  // get the text string
  var selText = selection.toString();
  var annotationClassName = ".annotation-content-" + n;
  var annotationLabel = ".category-" + n;

  // get time of annotation
  // create a document fragment from the selection
  var fragment = selection.getRangeAt(0).cloneContents();

  // parse the document fragment for the first element
  var firstElement = fragment.firstElementChild;
  // get the time attribute from the first element

  // check whether more than a word has been selected
  if (firstElement && firstElement.tagName == 'SPAN') {

    var firstElementStartTime = firstElement.getAttribute('data-m');

    // convert milliseconds to minutes seconds
    var formattedStartTime = fmtMSS(firstElementStartTime / 1000)

    // append selected annotation to the accordion panel
    var newAnnotation = "<p data-cat='" + n + "' class='content " + firstElementStartTime + "-annotation" + "'>[" + formattedStartTime + "] " + selText + "</p>";
    $(annotationClassName).append(newAnnotation);


    // className = firstElementStartTime + "-annotation";
    // $(annotationClassName).addClass(className)

    // add unique classname from timecode
    // firstElementStartTime

    // make the category label glow
    highlight(annotationLabel);



    // class name of the button
    // this doesn't seem to actually get that? n give the class of the button
    var range = selection.getRangeAt(0);


    var $container = document.createElement('span');
    $container.className = "selected selected-" + n;

    // Move the contents of the selection into the container
    $container.appendChild(range.extractContents());

    // Move the container into the now empty range
    range.insertNode($container);

    // console.log(selectedText);
    // var spn = '<span class="selected">' + selectedText + '</span>';
    // window.getSelection().html().replace(selectedText, "");

  } else if (firstElement && firstElement.tagName == 'P') {
    console.log('outside papagraph');
    alert('Сори, нельзя выделить текст в двух параграфах. Объедените параграфы и попробуйте снова.')
  } else {
    console.log('just a fragment');
    alert('Сори, нельзя выделить только одно слово. Выберите побольше текста и попробуйте снова.')

  }

  closeDrop();

}

// function SelectText(n,previousSelection) {

//   previousSelection.contents().unwrap()

//   var selection = window.getSelection();

//   // Make sure something was selected
//   if (!selection.rangeCount) {
//     return;
//   }

//   // class name of the button
//   var range = selection.getRangeAt(0);
//   var $container = document.createElement('span');
//   $container.className = "selected selected-" + n;

//   // Move the contents of the selection into the container
//   $container.appendChild(range.extractContents());

//   // Move the container into the now empty range
//   range.insertNode($container);

//   // console.log(selectedText);
//   // var spn = '<span class="selected">' + selectedText + '</span>';
//   // window.getSelection().html().replace(selectedText, "");
// }

// allow annotations to be edited

// highlight annotated sections on clicking them
// $('#content').on("click", ".selected", function () {
//   // true means it's already been highlighted
//
//
//
//   var $this = $(this);
//   addShareTool(false, $this)
//
//   // console.log($this.contents().unwrap());
//
// });



function closeDrop() {
  if (drop) {
    drop.close();
  }
}

var transcript = document.getElementById('hypertranscript');
//transcript.addEventListener('mouseup', addShareTool, false);
//transcript.addEventListener('touchend', addShareTool, false);
transcript.addEventListener('click', closeDrop, true);

$(document).ready(function() {
  $('.tag-icon').click(function(event) {
    SelectText(Number($(this).attr('catid')));
  });
  gtag('event', 'annotation_create', {
'event_category' : 'annotation'
});
});
