module.exports = function (){
    return {
        add: function(num1, num2){
            console.log("The sum is: ", num1 + num2);
        },
        multiply: function(num1, num2){
            console.log("The product is: ", num1 * num2);

        },
        square: function(num){
            console.log("The squre is: ", num*num);

        },
        random: function(num1, num2){
            console.log("The random number between ", num1, " and ", num2, " is ", Math.floor(Math.random()* (num2 - num1) + 1));

        }

    }
}