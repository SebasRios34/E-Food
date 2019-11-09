(function () {
    // var init =()=>{
    //     var modal = document.getElementById('id01');
    //     var modal2 = document.getElementById('id02');

    //     window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }

    //         if (event.target == modal2) {
    //             modal2.style.display = "none";
    //         }
    //     }
    // }
    // var backgroundPics =()=>{
    //     var slideIndex = 0;
    //     showSlides();

    //     function showSlides() {
    //         var i;
    //         var slides = document.getElementsByClassName("mySlides");
    //         for (i = 0; i < slides.length; i++) {
    //             slides[i].style.display = "none";
    //         }
    //         slideIndex++;
    //         if (slideIndex > slides.length) {
    //             slideIndex = 1
    //         }
    //         slides[slideIndex - 1].style.display = "block";
    //         setTimeout(showSlides, 2000);
    //     }
    // }

    var myIndex = 0;
    

    var carousel = () =>
    {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    //init();
    carousel();
    //backgroundPics();
})()
