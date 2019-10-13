
        function background_slideshow(){
	
            function slider(){
            setTimeout(function(){
                document.querySelector('.slide-image').src = "./images/bay-nam10-10-2019_10g23-00.webp";
                document.querySelector('.slide-content').innerHTML = "<h2 class='ct-bn-1'>Bảy năm vẫn ngoảnh về phương bắc</h2><p class='ct-bn-2'>Fight or Death</p><p class='ct-bn-3'>Warcraft III: Reforged is a stunning reimagining of the revolutionary real-time strategy game that laid the groundwork for Azeroth's</p>"
            }, 0000);
            //
            setTimeout(function(){
                document.querySelector('.slide-image').src = "./images/b.webp";
                document.querySelector('.slide-content').innerHTML = "<h2 class='ct-bn-1'>Vô cùng thích anh</h2><p class='ct-bn-2'>Fight or Death</p><p class='ct-bn-3'>A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home</p>"
            }, 5000);
            
            //
            setTimeout(function(){
                document.querySelector('.slide-image').src = "./images/banner2.webp";
                document.querySelector('.slide-content').innerHTML = "<h2 class='ct-bn-1'>Tiểu sử chàng Nokdu</h2><p class='ct-bn-2'>Fight or Death</p><p class='ct-bn-3'>The book was first published on September 21, 1937 and is set in the years 2941 to ...</p>"
            }, 10000);
            };
            slider();
            setInterval(function() { // repeat

                slider();

            }, 15000);
	
        }
	    background_slideshow();