function Hero(name,type,blood,attack){
    this.name = name;
    this.type =type;
    this.blood =blood;
    this.attack =attack;
    this.skill =function(dazhao){
       
        document.write('大招是'+dazhao+'<br>');
    
    }

}
var lianpo = new Hero('廉颇','力量型','500血量','近战');  
var houyi = new Hero('后羿','射手型','100血量','远程');  

    
document.write(lianpo.name+'是'+lianpo.type+'的'+lianpo.attack+'英雄血量是'+lianpo.blood+'<br>');
lianpo.skill('锤击地面');

document.write(houyi.name+'是'+houyi.type+'的'+houyi.attack+'英雄血量是'+houyi.blood+'<br>');
houyi.skill('火焰鸟');

