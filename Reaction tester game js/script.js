        var start;
        var score = 0;
        var reactionTimes = [];
        var totalReactions = 0;
        var avgReactionTime = 0;

        function showShape() {
            var left = Math.random() * (window.innerWidth - 200);
            var top = Math.random() * (window.innerHeight - 200);
            var size = (Math.random() * 200) + 100;

            var shape = document.getElementById("shape");
            shape.style.left = left + 'px';
            shape.style.top = top + 'px';
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.backgroundColor = "#ff5e78"; // Reset color to default
            shape.style.display = "block";
            start = new Date().getTime();
        }

        function hideShape() {
            var end = new Date().getTime();
            var reactionTime = (end - start) / 1000;
            reactionTimes.push(reactionTime);
            totalReactions++;
            calculateStats();
            alert("Reaction time: " + reactionTime.toFixed(3) + " seconds.\nScore: " + score);
            score += Math.floor(1000 / reactionTime);
            document.getElementById("shape").style.display = "none";
            setTimeout(showShape, Math.random() * 500); // Reduced delay between shapes (0 to 500 ms)
        }

        function calculateStats() {
            var sum = reactionTimes.reduce(function (acc, val) { return acc + val; }, 0);
            avgReactionTime = sum / totalReactions;
            document.getElementById("stats").innerText = "Stats:\nAverage Reaction Time: " + avgReactionTime.toFixed(3) + " seconds\nTotal Reactions: " + totalReactions + "\nScore: " + score;
        }

        document.getElementById("shape").onclick = function () {
            this.style.backgroundColor = "#62d2a2"; // Change color on click
            hideShape();
        }

        showShape();