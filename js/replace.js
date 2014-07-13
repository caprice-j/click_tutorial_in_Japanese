$(function() {


    //////////////////
    //
    //  mouseover dictionary functions
    //

    // FIXME: collision of '静的ライブラリ' and 'ライブラリ'
    var dictionary =
     {
       'プログラムでルーター機能を作る'        : 'プログラムで作るのは当たり前だと思われるかもしれないが、実は違う。現代のルーターはナノセカンド単位での処理を求められるため、例えばTCAMと呼ばれる機能は何とハードウェアによって実現されている。このようなハードウェアの設計には多大な時間がかかるため、従来ルーターでの実験サイクルは遅くなりがちだった。',
       '静的ライブラリ'     : ' .o を一まとめにしたファイル。libclick.aなど。Clickでは気にしなくて良い用語。',
       '--enable-local'   : 'このドキュメントを読んでいないと数時間を費やすことになる邪悪なフラグ。',
       'UUID': 'universally unique identifier。識別子の一種。UUIDに限らず、VirtualBoxでは仮想マシンのMACアドレスだったりIPアドレスだったり「一意なことが前提とされている識別子」が２つ以上存在すると、見つけにくいバグが見つけにくいタイミングで起きるので早急に変えておきたい。',
       'Save the machine state': 'これにしておくと仮想マシンをすぐに再開できる。',
       'Hello World': 'プログラミング言語の実行環境がだいたい整ったことを確認するためのプログラム。Clickは .clickファイルがソースコードに当たるため、これが1つでも実行できれば確認完了となる。',
       'eth0に届いたパケット': '「eth0から出て行くパケット」を見るためには別の設定が必要なので注意。なおeth0はネットワーク・インターフェイスに付けられた識別子を指す。',
       'Clickが公式に用意した説明': 'この説明の正体は/usr/local/share/man/man7/Print.7click.gz というファイルである。sudo make installしたときにこっそりインストールされている。本当にあるか確認したいのであればlocate clickとしてみるとよい。 ',
       'Wireshark': 'パケットを解析するプログラム(Packet analyzer)。ネットワークのバグは制御端末に現われず、パケットの中に現れていることが多いためにバグの特定に役立つ。非常に見やすいGUIを採用しているため、プロトコルを単体で勉強する際にも役立つ。',
       '仮想マシン'   : 'CPUの動きまで全てプログラムで再現したコンピュータのこと。ネットワークの実験などあらゆる作業を飛躍的に簡単にしたイノベーティブな技術。仮想マシンを管理するソフトウェアの1つがVirtualBoxである。',
       'Clickのバイナリがインストールされた': 'この文書内では「インストール」とは「パスが通っている場所にファイルを移動する」ことを指す。端末でecho $PATH と入力すれば、/usr/local/binが含まれていることが確認できる。万が一含まれていなかったときは追加する。',
       'Clickによるソフトウェアルータ': '正体は,大量の設定項目(Configuration String)が渡されたClickバイナリ内の_main関数のはず。',
       '訳さずにelementのまま理解したほうが良い': '「オブジェクト志向」を「物体志向」と訳さないのと同じ理由である。日本語の「要素」にはない細かな設計が含まれている。',
       'agnostic': '一般的な訳語は「不可知論者」。',
       'git': 'バージョン管理プログラムだが、clickを使うときは単にインターネットからダウンロードするコマンド(git clone)としてしか使わない。',
       'ディストリビューション': 'Linuxを頒布するときの.isoファイルのこと。ubuntu-14.04-desktop-amd64.isoなど。バージョンや対応するCPU、予めインストールされたプログラムなどが異なる。',
       'ヘッダファイル': '#include <click/args.h>などとして取り込まれるファイル。例えばclick/args.hであれば実際には/usr/local/include/click/args.hを指す。',
       'make': 'コンパイルを半自動化するプログラム。何が実行されるかはMakefileというファイルの中に書いてある。慣習として、sudo make installはコンパイルではなくインストールを行なうコマンドであることが多い。', // FIXME
       'Unix系OS'        : 'LinuxやAndroidなど。Mac OS Xでも雰囲気は味わえる。',
       'ドキュメント': 'Clickのような数万行を超える(=全部は読めない)大規模ソフトウェアで「ドキュメント」と言った場合、それは「ないと地獄を味わうことになるもの」程度の示唆が含まれている。',
       'カレントディレクトリ': '現在居るディレクトリ(フォルダと同義)を指す。コマンド上の表記としては . を用いる。ソースコードの中に#include "./myheader.h" と書いた場合、「このソースコードがあるディレクトリのmyheader.hというファイル」を意味する。',
       // '複雑に目的地のアドレスが書き換えられる', 'たとえばフェイスブックで一つ友達の写真を見るにしても、何百万人と利用者がいるアプリケーションなので同じマシン上にアカウントデータと写真データが存在するとは限らない。そこで、たった１つのWebサイトのデータを返すだけでも、写真サーバから写真を引っ張ってきて、',
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

            if( $(val).hasClass('no_replace_please') ){
                console.log("continue");
                return true; // continue
            }
             var word = new RegExp(entry);
             if( val.innerText.match(word) ){
               // var c1 = new RegExp(  '(.*?)' + entry ); // ? for shortest match
               var c12 = new RegExp(  '.*?' + entry + '(.{2})'  ); // ? for shortest match
               var c2 = new RegExp( entry + '(.*)' );
               // var prefix = val.innerText.match(c1) ;
               // console.log("c1 " + c1 );
               // console.log("c2 " + c2 );
               var signature = $(val).text().match(c12)[1] ;
      console.log("text " +               $(val).text() );
      console.log("signature " +               $(val).text().match(c12)[1] );
               var c1 = new RegExp(  '(.*?)' + entry + signature ); // ? for shortest match
               var c22 = new RegExp(  entry + signature + '(.*)'  ); // ? for shortest match
               if( $(val).html().match(c1) == null ){
               	console.log("no prefix");
                   var prefix = "";
               }else{
                   var prefix = $(val).html().match(c1)[1] ;	
               }
               var suffix = signature + $(val).html().match(c22)[1];
               console.log("prefix " + prefix );
               // console.log("suffix " + suffix );
            
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

    /////////////////
    //
    //   add link strings
    //
    var links = $("#right_frame a");
	$.each( links, function(i, val){ 
    	if( val.className.match(/replace_me/) ){
            var b = val.href.match(/#.*/); 
            $(links[i]).text( $( b[0] ).text() ); 
    		//$(links[i]).toggleClass('replace_me');
    	}
    });

});
