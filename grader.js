function average(scores){
    var sum = 0;
    // for (var i = 0; i < scores.length; i++) {
    //     sum += scores[i];
    // }
    
    scores.forEach(function(score){
        sum += score;
    });
    
    //return Math.ceil(sum / scores.length);
    return Math.round(sum / scores.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));