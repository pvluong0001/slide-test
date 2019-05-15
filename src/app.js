var $ = require('jquery');


$(function() {
    var slideIndex = 2;

    $(".add-new-slide").click(function() {
        slideIndex++;

        $(`<a class="anchor-link" href="#slide-${slideIndex}"><div class="thumb-slide pointer">Slide ${slideIndex}</div></a>`).insertBefore($(this));
        $(".slides").append(`<section id="slide-${slideIndex}">Slide ${slideIndex}</section>`);

        Reveal.slide(slideIndex);
    });

    $(".create-text-element").click(() => {
        $("#slide-1").append(`
        <div class="resize-drag"><div id="editor1" contenteditable="true">
            <h1>Inline Editing in Action!</h1>
            <p>The "div" element that contains this text is now editable.</p>
        </div></div>
        `);
        $("#slide-2").append(`
        <div class="resize-drag"><div id="editor1" contenteditable="true">
            <h1>Inline Editing in Action!</h1>
            <p>The "div" element that contains this text is now editable.</p>
        </div></div>
        `);
        $("#slide-3").append(`
        <div class="resize-drag"><div id="editor1" contenteditable="true">
            <h1>Inline Editing in Action!</h1>
            <p>The "div" element that contains this text is now editable.</p>
        </div></div>
        `);

        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline( 'editor1' );
    })
});

/*
<div id="editor1" contenteditable="true">
    <h1>Inline Editing in Action!</h1>
    <p>The "div" element that contains this text is now editable.</p>
</div>
 */