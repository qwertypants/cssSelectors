var SyntaxHighlighter = SyntaxHighlighter;
$(function() {
    'use strict';
    var $nav = $('#selectors a'),
        check = '&#x2713;';
    SyntaxHighlighter.all();

    function highlight(lineNum) {
        $('.line').removeClass('highlighted');
        $.each(lineNum, function(i) {
            $('.number' + lineNum[i]).addClass('highlighted');
        });
        return;
    }

    function selector(selection, src, desc) {
        $('#selectorChoosen').text(selection);
        $('#reference').text(src).attr('href', src);
        $('#cssDesc').text(desc);
        return;
    }
    
    function browserSupport(browser){
        browser = browser.replace(/y/g, check);
        browser = browser.split(",");

        $('#ch').html(browser[0]);
        $('#ff').html(browser[1]);
        $('#op').html(browser[2]);
        $('#sa').html(browser[3]);
        $('#ie').html(browser[4]);
        return;
    }

    $nav.click(function(e) {
        var $this = $(this), 
            className = 'current',
            $browser = $('#browsers');
        e.preventDefault();
        
        $nav.removeClass(className);
        $this.addClass(className);

        highlight($this.data('line').split(','));
        selector($this.data('css'), $this.attr('href'), $this.data('desc'));

        browserSupport($this.data('support'));

        if( $browser.css('display') === 'none'){
            $browser.show();
        }

    });
});