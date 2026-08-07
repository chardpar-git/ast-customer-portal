const ctx = document.getElementById('usageChart');

if(ctx){

new Chart(ctx,{

type:'line',

data:{

labels:[
'Mon',
'Tue',
'Wed',
'Thu',
'Fri',
'Sat',
'Sun'
],

datasets:[{

label:'GB Used',

data:[
0.4,
0.8,
1.2,
0.7,
1.5,
1.1,
0.6
],

borderWidth:3,

fill:true,

tension:.4,

backgroundColor:'rgba(13,110,253,.15)',

borderColor:'#0d6efd'

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

}

}

});

}
