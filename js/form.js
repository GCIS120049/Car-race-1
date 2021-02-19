class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(500,100);

        var input=createInput("name");
        input.position(500,150);

        var greet=createElement("h3");
        
        var button=createButton("play");
        button.position(550,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.updateName(name);
            player.updateCount(playerCount);
            greet.html("Hello "+name);
            greet.position(500,250);
        });

         
    }
}