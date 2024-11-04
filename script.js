const bukas = document.querySelector('.open');
        const msg = document.querySelector('.message');
        const katawan = document.querySelector('.back')
        function shit(){
            bukas.style.rotate = "x 180deg";
            bukas.style.marginBottom = "400px";
        }
        function lttr(){
            msg.style.height = "250px";
            msg.style.width = "299px";
            msg.style.padding = "20px";
            msg.style.zIndex = "1";
            msg.style.marginTop = "-120px";
            msg.style.textAlign = "start";
            msg.style.marginLeft = "-25px"
            msg.innerHTML= '<p style="text-align: center; font-size: 30px;">ingat bebi ko!</p>'
            katawan.style.backgroundColor = "rgb(35, 35, 35)";
        }
        function msgback(){
            msg.style.height = "150px";
            msg.style.width = "250px";
            msg.style.padding = "0px";
            msg.style.zIndex = "0";
            msg.style.marginTop = "25px";
            msg.style.textAlign = "center";
            msg.style.marginLeft = "25px"
            msg.style.paddingTop = "10px";
            msg.innerHTML= "Tap mo po!" 
            katawan.style.backgroundColor = "#79816a";
        }