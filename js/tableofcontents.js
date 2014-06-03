jQuery(function(){
    // h3～H5タグから目次を生成 (h1は文章タイトル。h2は目次タイトル。h6はh5と同様の修飾をするが、目次には書かないもの。)
    var idcount = 1;   
    var toc = '<h2 id="toc_index_title">目次</h2>';
    var currentlevel = 0;
    jQuery(".tocChild :header",this).each(function(){
        this.id = "toc_" + idcount;
        idcount++;
        var level = 0;
        if(this.nodeName.toLowerCase() == "h3") {
            level = 1;
        } else if(this.nodeName.toLowerCase() == "h4") {
            level = 2;
        } else if(this.nodeName.toLowerCase() == "h5") {
            level = 3;
        } else if(this.nodeName.toLowerCase() == "h6") {
            return true; // continue
        }
        while(currentlevel <level) {
            toc += currentlevel == 0 ? '<ol class="chapter">' : "<ol>";
            currentlevel++;
        }
        while(currentlevel> level) {
            toc += "<\/ol>";
            currentlevel--;
        }
        toc += '<li><a href="#' + this.id + '">' + jQuery(this).html() + "<\/a><\/li>\n";
       
        jQuery(this).append(' <a href="#tutorialTitle" class="toclink">↑<\/a>');
    });
    while(currentlevel> 0) {
        toc += "<\/ol>";
        currentlevel--;
    }
    jQuery("#table-of-contents-div").html(toc);
});
