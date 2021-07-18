$(document).ready(function(){
    var myColor=["red","brown","pink","orange","navy","green","purple","yellow","red","brown","pink","orange","navy","green","purple","yellow"];
    var repeatColor=[];
    var body=document.body;
    var div_container=document.createElement("div");
    div_container.className="container";
    var table=document.createElement("table");
    table.style = "width:100%";

    body.appendChild(div_container);
    div_container.appendChild(table);
    for(let i = 0; i < 4; i++){
    var tr=document.createElement("tr")
        table.appendChild(tr)
        for(let j = 0; j < 4; j++){
            var td_card=document.createElement("td")
            td_card.className = "card"
            tr.appendChild(td_card)
            var div_flip_card=document.createElement("div")
            div_flip_card.className = "flip-card"
            td_card.appendChild(div_flip_card)
            var div_flip_card_inner1=document.createElement("div")
            div_flip_card_inner1.className = "flip-card-inner1"

            //random color add
            // Blocking more than 2 repetitions
            var rd;
            var isRp=true;
            while(isRp){
                var rp=0;
                rd=Math.floor(Math.random() * myColor.length);
                for(let i=0; i<repeatColor.length; i++){
                    if(myColor[rd]==repeatColor[i]){
                        rp++;
                    }
                }
                // Blocking more than 2 repetitions
                if(rp==2){
                    var remove_Item = myColor[rd];
                    myColor = $.grep(myColor, function(value) {
                    return value != remove_Item;
                    });
                }
                if(rp<2){
                    repeatColor.push(myColor[rd]);
                    $(div_flip_card_inner1).addClass(myColor[rd])
                    console.log(myColor[rd]);
                    isRp=false;
                }
            }

            div_flip_card.appendChild(div_flip_card_inner1)
            var div_flip_card_front = document.createElement("div")
            div_flip_card_front.className = "flip-card-front"
            div_flip_card_inner1.appendChild(div_flip_card_front)
            var div_flip_card_back=document.createElement("div")
            div_flip_card_back.className = "flip-card-back"
            div_flip_card_front.appendChild(div_flip_card_back)
        }
    }
});

