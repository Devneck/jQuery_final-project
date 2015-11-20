/*
Sean Glover
Assignment 8 jQuery file

 */

$(document).ready(function() {
    $('#errorMsg').hide();

    $("#tabs").tabs( {
        hide: {effect: "slideUp", duration: 1600, easing: "easeOutBounce"},
        collapsible: true,
        show: {effect: "slideDown", duration: 800},
    });

    $('#tabs').tooltip( {
        position: {
            at: "left+15 center+7"
        }
    });

    $("#accordion").accordion( {
        collapsible: true,
        heightStyle: "content"
    })

    $('#carousel').CloudCarousel( {
        xPos: 450,
        yPos: 120,
        buttonLeft: $("#left-but"),
        buttonRight: $("#right-but"),
        altBox: $("#alt-text"),
        titleBox: $("#title-text"),
        speed: 0.05,
        minScale: 0.45,
        reflHeight: 50,
        reflOpacity: .3,
        xRadius: 300,
        yRadius: 100
    })

    $.datepicker.setDefaults( {
        minDate: 0,
        maxDate: 14
    })

    $('#departDate').datepicker({onSelect: function(selDate) {
        $('#returnDate').val("");
        var departDate = new Date(selDate);
        var newMinDate = new Date(departDate).setDate(departDate.getDate()+5);
        var newMaxDate = new Date(departDate).setDate(departDate.getDate()+14);

        $('#returnDate').datepicker({
            minDate: new Date(newMinDate),
            maxDate: new Date(newMaxDate)
        })
    }});

    $('#addTabDialog').dialog( {
        autoOpen: false,
        buttons: [{
            text: "Add",
            click: function() {
                var title = $('#tabTitle').val()
                var content = $('#tabContent').val()
                var num_tabs = $('#tabList li').length + 1;

                if (title == "" || content == "") {
                    $('#errorMsg').slideDown("slow");
                } else {
                    $('#tabList').append('<li><a href="#tab' + num_tabs + '" title="' + title + '"><span>' + title + '</span></a></li>');
                    $('#tabs').append('<div id="tab' + num_tabs + '" class="tabBody">' + content + '</div>');
                    $(this).dialog("close");
                    $('#errorMsg').hide();
                    $('#tabContent').val("");
                    $('#tabTitle').val("");
                    $('#tabs').tabs("refresh");
                }
            }},
            {text: "Cancel",
                click: function() {
                    $(this).dialog("close");
                    $('#errorMsg').hide();
                }
            }]

    })

    $('#addTab')
        .button()
        .click(function() {
            $('#addTabDialog').dialog("open");
        })

    $('#layoutContainer').layout();

})