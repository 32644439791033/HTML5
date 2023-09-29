var dog = {
    name:'可可',
    type:'阿拉斯加犬',
    age:5,
    color:'棕红色',
    bark:function(){
      return '汪汪汪';
    } , 
    showFilm:function(){
      return '演电影';
    }   
}
document.write('有一只'+dog.age+'岁大的'+dog.color+'叫'+dog.name+'的'+dog.type+'他会'+dog.bark()+'的叫和'+dog.showFilm());



