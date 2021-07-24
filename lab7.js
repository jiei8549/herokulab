//Ei Jia Zhan, Eugene
const difficulties = ["Easy", "Easy-Medium", "Medium", "Medium-Hard", "Hard", "Hard-Hard"];
const goalString = ["lad fad sad dad",
  "This is not a test.",
  "This is not a test because it is not.",
  "False, nervous is a sign of strength.",
  "True, being nervous is a dreadful experience but you have to tell me why.",
  "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?"];
/*Background Color changes with every difficulty */
const backgroundcolor = ["MediumSpringGreen", "DarkCyan", "CornflowerBlue", "RoyalBlue", "Chocolate", "Maroon"];
//congratulation gif when complete the challenge

  var i = 0;
  var restarting = document.querySelector("#restarting");
  restarting.addEventListener('click', restart);

  window.addEventListener("keypress", function (event) 
  { 
    const textbox = document.getElementById("userinput");
    textbox.textContent = textbox.textContent + event.key;
    if(textbox.textContent.length == 1)
    {
      start = Date.now();
    }
    if (textbox.textContent == goalString[i]) 
    {
      end = Date.now();
      diff = (end - start)/1000;
      timing = document.createElement('p');
      timing.textContent = diff;
      document.getElementById("time").innerHTML = diff;
      const typing = document.getElementById("typing");
      typing.textContent = "You Win!";
      var next = document.createElement('button');
      next.innerHTML = "Next Level";
      next.setAttribute("id", "next");
      next.setAttribute("class", "next");
      document.getElementsByTagName("body")[0].appendChild(next);
      next.addEventListener('click', nextChallenge);
    }
  
  })

  function restart()
  {
    i = 0;
    leveljs = document.getElementById('level');
    leveljs.textContent = difficulties[i];
    target = document.getElementById("goal")
    target.textContent = goalString[i]
    const textbox = document.getElementById("userinput");
    textbox.textContent = "";
    const typing = document.getElementById("typing");
    typing.textContent = "Type this as fast as you can!:";
    const resetbutton = document.getElementById("restarting");
    document.getElementById("next").remove();
    document.getElementsByTagName("body")[0].style.background = backgroundcolor[i];
  }
  
  function nextChallenge()
  {
      i++;
      //congratulation gif when complete the challenge
      if (i>5)
      {
        window.location.href = "https://giphy.com/gifs/hero0fwar-karmawhore-rhyming-g9582DNuQppxC"
      }
      if (i<6)
      {
        document.getElementById("next").remove();
        document.getElementById("time").innerHTML = "" ;
        const textbox = document.getElementById("userinput");  
        textbox.textContent = "";
        const typing = document.getElementById("typing");
        typing.textContent = "Type this as fast as you can!:";
        leveljs = document.getElementById("level")
        leveljs.textContent = difficulties[i];
        target = document.getElementById("goal");
        target.textContent = goalString[i];
        document.getElementsByTagName("body")[0].style.background = backgroundcolor[i];
      }
  }
  