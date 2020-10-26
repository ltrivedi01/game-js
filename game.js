function myFunction(){

    var numberOfPlayer = document.getElementById("idNumberOfPlayers").value;
    var listOfPlayerScore = document.getElementById("idListOfPlayerScore").value;
    var arrayOfPlayerScore = listOfPlayerScore.split(",")
    var scoreHighestRank = document.getElementById("idScoreHighestRank").value;
    var arrayOfPlayerScore2 = []

    document.getElementById("demo").innerHTML = "Number of Player entered: " + numberOfPlayer +
    "<br>List of Players score: " + arrayOfPlayerScore +
    "<br>Score highest Rank: " + scoreHighestRank;

    var index;
    var a = ["a", "b", "c"];
    for (index = 0; index < arrayOfPlayerScore.length; ++index) {
    console.log(arrayOfPlayerScore[index]);
    if(arrayOfPlayerScore[index]<=scoreHighestRank){
        arrayOfPlayerScore2.push(arrayOfPlayerScore[index]);
        }
    document.getElementById("demo2").innerHTML = "Number of Players selected: " + arrayOfPlayerScore2.length
    }
   
  }