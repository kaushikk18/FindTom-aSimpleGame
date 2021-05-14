var start = new Date().getTime();

      function moveright() {
        var top = Math.random() * 400;
        var left = Math.random() * 1200;

        document.getElementById("picture").style.marginTop = top + "px";
        document.getElementById("picture").style.marginLeft = left + "px";
        document.getElementById("picture").style.display = "block";
        start = new Date().getTime();
      }

      function appearAfterDelay() {
        setTimeout(moveright, Math.random() * 2000);
      }

      document.getElementById("picture").onclick = function () {
        document.getElementById("picture").style.display = "none";
        var end = new Date().getTime();

        var timeTaken = (end - start) / 1000;

        document.getElementById("timeTaken").innerHTML = timeTaken + "s";

        appearAfterDelay();
      }
