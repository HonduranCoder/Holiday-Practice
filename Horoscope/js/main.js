function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
 var result = " unknown because you didn't put a valid date.";


if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Aquarius");

  result = ("Aquarius");
     document.getElementById("photo").innerHTML="<http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
   document.getElementById("characteristic").innerHTML="Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances.";

    }

    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Pisces");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
      document.getElementById("characteristic").innerHTML="Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window.";

    }
   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Aries");
      document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
     document.getElementById("characteristic").innerHTML="Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward.";
   }

    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taurus");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
       document.getElementById("characteristic").innerHTML="Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target.";

    }

    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gemini");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
      document.getElementById("characteristic").innerHTML="Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature.";

    }

    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
      document.getElementById("characteristic").innerHTML="Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day.";

    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Leo");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
            document.getElementById("characteristic").innerHTML="Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration.";

    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Virgo");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
        document.getElementById("characteristic").innerHTML="Virgos have a keen sense of good and bad and for that they are highly discriminating.";
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
        document.getElementById("characteristic").innerHTML="Libra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon.The Libra is the ‘balance’ and members of this sign have a very balanced mind.";
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpio");
       document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
        document.getElementById("characteristic").innerHTML="Scorpions are most diverse in nature and therefore present the most interesting study.";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittarius");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Sagittarians are the incurable optimists. They are always looking at the positive side of a thing.";
    }

  if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){

        result = ("Capricorn");
     document.getElementById("photo").innerHTML="<img src=http://sweetclipart.com/multisite/sweetclipart/files/rose_3_silhouette.png";
     document.getElementById("characteristic").innerHTML="Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection.";
    }else if (birthmonth>12||birthday>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;
}
  
