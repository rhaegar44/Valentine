
            function showMessage(message) {
                document.getElementById("message").innerHTML = message;
                document.getElementById("message").style.display = "block";
                playHappyMusic();
                displayFlower();
            }

            function roamNoButton() {
                var button = document.getElementById('noButton');
                button.style.left = Math.floor(Math.random() * (window.innerWidth - button.clientWidth)) + 'px';
                button.style.top = Math.floor(Math.random() * (window.innerHeight - button.clientHeight)) + 'px';
            }

            function playHappyMusic() {
                var audio = document.getElementById("myAudio");
                
                if (audio.paused) {
                    audio.play();
                } 
                
            }
            function displayFlower(){
                image=document.getElementById('flower');
                image.style.display='block'
            }
