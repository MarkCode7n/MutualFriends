(function () {
    var friendA = ['Josh', 'Mike', 'Doe', 'Chris', "Dan", "moses"];
    var friendB = ['Chris', 'Mary', 'Ann', "Doe", "Josh", "Dan", "Moses"];
    var mutual = [];
    for (var i = 0; i < friendA.length; i++) {
        for (var b = 0; b < friendB.length; b++) {
            if (friendA[i] === friendB[b]) {
                mutual.push(friendB[b]);
            }
        }
    }
    // checking if mutual friends are greater than 3 || any number
    // if it is true we return the number of mutual friends and the text
    if (mutual.length > 3) {
        console.log("your mutual friends are " + mutual[0] + ", " + mutual[1] + " and " + (mutual.length - 2) + " others");
    }
    else {
        console.log("your mutual friends are " + mutual);
    }
})();
