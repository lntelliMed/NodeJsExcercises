for (var i = 0; i < 10; i++) {
    console.log("Hello from echo.js!");
}

function echo(str, num){
    for (var i = 0; i < num; i++) {
        console.log(str);
    }
}

echo("Echo!!!", 10);
echo("Tater Tots", 3);