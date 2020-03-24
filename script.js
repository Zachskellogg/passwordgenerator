var charL = 'abcdefghijklmnopqrstuvwxyz';
            var charU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var num = '0123456789';
            var sym = '!@#$%^&*=-_?:;><{}[]+';
       // console.log(charL);
            var charNum = document.getElementById("charNum");
            var numBox = document.getElementById("num");
            var charUp = document.getElementById("charU");
            var charLo = document.getElementById("charL");
        //console.log(charL);
       // console.log(charU);
            var symBox = document.getElementById("sym");
            var submit = document.getElementById("submit");
            var yourPw = document.getElementById("yourPw");
        submit.addEventListener("click",function(e){
            var characters = '';
            (charLo.checked) ? characters += charL : '';
            (charUp.checked) ? characters += charU : '';
            (numBox.checked) ? characters += num : '';
            (symBox.checked) ? characters += sym : '';
            yourPw.value = password(charNum.value, characters);
        });
            function password(l,characters){
           // console.log(" characters are: " + characters);
                var pwd = '';
            for(var i = 0; i<l; i++){
                    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return pwd;
        }