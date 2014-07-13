$(function() {
    ////////////////
    //
    //  add icons before <a> tags
    //
    var links = $("#right_frame a");
    $.each( links, function(i, val){ 
    	if( val.href.match(/\.pdf/) ){ 
    		// console.log(links[i]);
    		$(links[i]).before(' <i class="fa fa-file-pdf-o facolor"></i> ') ;
    	}else{
    		// console.log(links[i]);
    		$(links[i]).before(' <i class="fa fa-share-square-o facolor"></i> ');

    	}
    });
    $("#right_frame a").after(' ');

    var links = $("#right_frame a");
	$.each( links, function(i, val){ 
    	if( val.className.match(/replace_my_text/) ){
            var b = val.href.match(/#.*/); 
            $(links[i]).text( $( b[0] ).text() ); 
    		//$(links[i]).toggleClass('replace_my_text');
    	}
    });

    //////////////////
    //
    //  mouseover dictionary functions
    //

    // FIXME: collision of '静的ライブラリ' and 'ライブラリ'
    var dictionary = {
                       '静的ライブラリ'     : ' .o を一まとめにしたファイル。libclick.aなど。Clickでは気にしなくて良い用語。',
                       '--enable-local'   : 'このドキュメントを読んでいないと数時間を費やすことになる邪悪なフラグ。',
                       'カーネルスペース'        : 'OSが使用しているメモリー空間。カーネル空間とも。',
                       'GCC': 'GNU Compiler Collection (GCC)。この中の一つであるC++言語のコンパイラ「g++」がClickには必要。',
                       'clang'                :  'クラン。Googleとかも出資している新しいコンパイラ。GCC後継になることを目的としている。'
                     };
    var dictionary_entries = new Array();
    var dictionary_entry_no = 0;
    // var parseDictionary = function( entry ){
    //     var count = subcount = 0;
    //     var target = 'lili';
    //     var subtarget = 'subli';
    //     while( entry.match(target) != null ){
    //     console.log( "match " + entry.match(target) );
    //     console.log( "entry " + entry );
    //         if( count === 0 ){
    //              entry = entry.replace(target,'<ul><li>');
    //         }else{
    //              entry = entry.replace(target,'</li><li>');
    //         }
    //         while( entry.match(subtarget) != null ){
    //             if( subcount === 0 ){
    //                  entry = entry.replace(target,'<ul><li>');
    //             }else{
    //                  entry = entry.replace(target,'</li><li>');
    //             }
    //             subcount++;
    //         }
    //         if(subcount !== 0){
    //             entry =
    //         };
    //         subcount = 0;
    //         count++;
    //     }
    //     return entry + '</li></ul>';
    // };

    for( key in dictionary ){
        dictionary_entries[dictionary_entry_no] = key;
        dictionary_entry_no++;
    }
    $.each( dictionary_entries, function(i, entry){
        $.each( $('#right_frame p, #right_frame li'), function(j, val){

             var word = new RegExp(entry);
             if( val.innerText.match(word) ){
               var c1 = new RegExp(  '(.*?)' + entry  ); // ? for shortest match
               var c2 = new RegExp( entry + '(.*)' );
               // var prefix = val.innerText.match(c1) ;
               // console.log("c1 " + c1 );
               // console.log("c2 " + c2 );
               var prefix = $(val).html().match(c1)[1] ;
               var suffix = $(val).html().match(c2)[1] ;
               console.log("prefix " + prefix );
               console.log("suffix " + suffix );
            
               var num = i + 'd' + j;


               $(this).html( prefix + '<span id="dict-entry-' + num + '" class="dictionary_entry" data-entryname="' + entry + '">' + entry + '<div id="dict-' + num +'"  class="dict_content">' +  dictionary[ entry ] + '</div></span>' + suffix);
               console.log("modified result: " + $(this).html() );
             }
        })
    });

    // In order to add entries in the same tag, $.each() iteration should be saeparated from the above one.

    $.each( dictionary_entries, function(i, entry){
        $.each( $('#right_frame p, #right_frame li'), function(j, val){
            var num = i + 'd' + j;
            $( $('#dict-entry-' + num ) ).hover(function(){
                $('#dict-' + num ).toggleClass("dict_visible");
            });
            })
    });
    // $('.dictionary_entry').mouseover(function(){
    //     $(this).append( '' );
    //     $('.dictionary_content').mouseout(function(){
    //          $(this).remove();
    //     });
    // });


    //.dictionary_entry:after{
    //   content: attr(data-content) 'other text';
    // }
    // 
});
