    var imageItem = $('.worksContent .imageItem');
    var itemContent = document.querySelectorAll('.worksContent .imageItem a');
    var height = imageItem.width();
    var isOpen = false;
    var elPosition = $('.logoNav').offset().top;
    var elHeight = $('.logoNav').outerHeight();
    var zoomArray = $('.worksContent .imageItem .zoom');
    $(document).ready(function() {

        // İşlərimiz bölməsindəki kvadratların ölçüləri
        imageItem.css('height', height);

        // navbar
        if ($(window).scrollTop() >= elPosition + elHeight) {
            $('.logoNav').removeClass('fadeOutUp').addClass('activeNav fadeInDown');
        }
        $(window).scroll(function() {
            console.log($(window).scrollTop());
            if ($(window).scrollTop() >= elPosition + elHeight) {
                $('.logoNav').addClass('activeNav fadeInDown');
            } else {
                $('.logoNav').removeClass('activeNav fadeInDown');
            }
        })

        // Image viewer
        for (var i = 0; i < zoomArray.length; i++) {
        	console.log(zoomArray);
            (function(index) {
                zoomArray[i].onclick = function() {
                    var currentImage = zoomArray[index].previousElementSibling.getAttribute('src');
                    $('.overlay').css('display', 'block');
                    $('.overlayContent').css('display', 'block');
                    $('.overlayContent .xButton').click(function() {
                        $('.overlay').css('display', 'none');
                        $('.overlayContent').css('display', 'none');
                    })
                    $('.overlayContent .imageContainer img').attr('src',currentImage);
                }
            })(i);
        }

        //menu navbar
        $('.menuBurger').click(function() {
            if (!isOpen) {
                $('.miniNav').addClass('activeMiniNav');
                isOpen = true;
            } else {
                $('.miniNav').removeClass('activeMiniNav')
                isOpen = false;
            }
        })
    });