type=''
author = ''

 const chineseList =  {
  q1:'a',
  q2:'b',
  q3:'c',
  q3:'d',
  q4:'e',
  q5:'f',
  q6:'g',
  q7:'h',
  q8:'i',
  q9:'t',
  q10:'z',
  q11:'50'
}

 const vhList =  {
  q1:'la patience est amère mais son fruit est doux',
  q2:'sagesse, beaute et gentillesse ne font bouillir aucun chaudron',
  q3:'les yeux ont toujours faim de voir',
  q3:'a vouloir trop avoir on perd tout',
  q4:`"Il n’y a rien de plus puissant qu’une idée dont l’heure est venue."`,
  q5:'f',
  q6:'g',
  q7:'h',
  q8:'i',
  q9:'m',
  q10:'c',
  q11:'c'
}

 const gartinList =  {
  q1:`la dame pour moi n'existe que sur un échéquier c'est la seule femme dans ce monde qui accepte de me parler`,
  q2:`Je suis le GOAAAAT des echecs`,
  q3:` une erreur est si vite arrivée qu'il me jette la première pierre celui qui n'a jamais péché et je sais que tu te sens trahi mais quand j'étais en elle je pensais à toi aussi parce que vous vous ressemblez mine de rien
   si j'ai des lunettes c'est justement parce que je ne vois pas bien oui je vous ai confondu mais une fois à l'intérieur
    j'ai compris que ce n'était pas toi mon cœur alors pardon pour ce moment d'égarement je ne savais même pas que c'était ta maman 
    il faut voir le positif on deviendra un couple solide mes boules pour toi ne seront jamais plus vides et je ne rêve que de toi la nuit et pas de toutes les autres un homme n'a-t-il pas le droit parfois de commettre des fautes 
     je sais que cela jettera un froid au repas de famille mais vois le bon côté de la chose j'aime autant la mère que la fille`,
  q3:'2',
  q4:'3',
  q5:'4',
  q6:'9',
  q7:'1',
  q8:'0',
  q9:'45',
  q10:'48',
  q10:'50',
  q11:'98'
}






function generateQuote(type){
  // JSON.parse(localStorage.getItem('generateQuote'));
  const random = Math.round(Math.random()*10);
  
  if(type==='chine'){
    author='un chinois'
   
        if (random===1){
      return chineseList.q1
    }else if (random===2){
      return chineseList.q2
    }else if (random===3){
      return chineseList.q3
    }else if (random===4){
      return chineseList.q4
    }else if (random===5){
      return chineseList.q5
    }else if (random===6){
      return chineseList.q6
    }else if (random===7){
      return chineseList.q7
    }else if (random===8){
      return chineseList.q8
    }else if (random===9){
      return chineseList.q9
    }else if (random===10){
      return chineseList.q10
    }else if (random===11){
      return chineseList.q11
    }
  }else if(type==='vh'){
    author='vh'
   
      if (random===1){
      return vhList.q1
    }else if (random===2){
      return vhList.q2
    }else if (random===3){
      return vhList.q3
    }else if (random===4){
      return vhList.q4
    }else if (random===5){
      return vhList.q5
    }else if (random===6){
      return vhList.q6
    }else if (random===7){
      return vhList.q7
    }else if (random===8){
      return vhList.q8
    }else if (random===9){
      return chineseList.q9
    }else if (random===10){
      return chineseList.q10
    }else if (random===11){
      return chineseList.q11
    }


  }else if(type==='gartin'){
    author='gartin59'
   
      if (random===1){
      return gartinList.q1
    }else if (random===2){
      return gartinList.q2
    }else if (random===3){
      return gartinList.q3
    }else if (random===4){
      return gartinList.q4
    }else if (random===5){
      return gartinList.q5
    }else if (random===6){
      return gartinList.q6
    }else if (random===7){
      return gartinList.q7
    }else if (random===8){
      return gartinList.q8
    }else if (random===9){
      return chineseList.q9
    }else if (random===10){
      return chineseList.q10
    }else if (random===11){
      return chineseList.q11
    }

  }
  
}
localStorage.setItem('generateQuote', generateQuote(type));
  