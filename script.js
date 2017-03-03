   var scheme1 = {
        name: 'gate',
        type: 'XOR',
        children: [
        {
            name: 'gate',
            type: 'AND',
            children: [
            {
                name: 'switch',
                type: 'ON',
                state: 1
            },
            {
                name: 'switch',
                type: 'OFF',
                state: 0
            }
            ]
        }, {
            name: 'gate',
            type: 'NOT',
            children: [
            {
                name: 'switch',
                type: 'ON',
                state: 1
            }
            ]
        }
        ]
    },

    scheme2 = {
        name: 'gate',
        type: 'AND',
        children: [
        {
            name: 'gate',
            type: 'OR',
            children: [
            {
                name: 'switch',
                type: 'ON',
                state: 1
            },
            {
                name: 'gate',
                type: 'XOR',
                children: [
                {
                    name: 'switch',
                    type: 'OFF',
                    state: 0
                },
                {
                    name: 'gate',
                    type: 'NOT',
                    children: [
                    {
                        name: 'switch',
                        type: 'ON',
                        state: 1
                    }
                    ]
                }
                ]
            }
            ]
        }, {
            name: 'gate',
            type: 'NOT',
            children: [
            {
                name: 'switch',
                type: 'ON',
                state: 1
            }
            ]
        }
        ]
    },

    scheme3 = {
        name: 'gate',
        type: 'XOR',

        children: [
        {
            name: 'gate',
            type: 'NOT',
            children: [
            {
                name: 'switch',
                type: 'OFF',
                state: 0
            }
            ]
        }, {
            name: 'gate',
            type: 'OR',
            children: [
            {
                name: 'gate',
                type: 'OR',
                children: [
                {
                    name: 'switch',
                    type: 'OFF',
                    state: 0
                },
                {
                    name: 'gate',
                    type: 'AND',
                    children: [
                    {
                        name: 'switch',
                        type: 'OFF',
                        state: 0
                    },
                    {
                        name: 'switch',
                        type: 'ON',
                        state: 1
                    }
                    ]
                }
                ]
            },
            {
                name: 'switch',
                type: 'OFF',
                state: 0
            }
            ]
        }
        ]
    };
var actions = {
  OR: function(a, b) {
    return a || b;
  },
  AND: function(a, b) {
    return a && b;
  },
  XOR: function(a, b) {
    return a ^ b;
  },
  NOT: function(a) {
    return !a;
  }
};

  var k=0;

function determination(obj) {//debugger
 
   
if(k>=1){div=document.getElementsByTagName('div');//debugger
        var length=div.length
        for(var i=0;i<length;i++){
        div[0].remove();}
        img=document.getElementsByTagName('img');
        img[0].remove();
        }

 k++
    var 
        results = [],
        count = 0,
        tik = 0,
        parentElem = document.body,
        leftPers = 60,
        topPers = 52,
        heightPers = 12,
        ind = 0,
        indl=0,
        inds = 0;

    function determ(obj) { //debugger
         var c=0;
        if (obj.type == 'XOR' || obj.type == 'OR' || obj.type == 'NOT' || obj.type == 'AND') {
            results.push(obj.type)
        }
        //отрисовка
        if (obj.name != undefined && count == 0) { //debugger
            if (obj.name == 'gate' && obj.type != 'NOT') { //debugger
                var div = document.createElement('div');
                div.id = c + 'horizont';
                leftPers = leftPers - 12;
                topPers = topPers - 6;
                heightPers = heightPers / 1.2;
                div.style.cssText = 'height:' + heightPers + '%;left:' + leftPers + '%;top:' + topPers + '%;border-right:3px solid black; border-top:3px solid black;'
                div.innerHTML = '<br/><br/>' + obj.type;
                ind = 0;
                inds = 0;
                parentElem.appendChild(div);
            }
            if (obj.name == 'gate' && obj.type == 'NOT') {
            
                var div = document.createElement('div');
                div.id = c + 'horizont';
                leftPers = leftPers - 12;
                topPers = topPers -6;
                 notPers=leftPers+2;
                div.style.cssText = 'width:10%;height:6%;left:' + notPers + '%;top:' + topPers + '%;';
                div.innerHTML = '<br/><br/>' + obj.children[0].state + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + obj.type;
                ind = 1;
                inds = 0;
                parentElem.appendChild(div);
            }
            if (obj.name == 'switch' && ind != 1) {
                var div = document.createElement('div');
                div.id = c + 'horizont';
                topPers = topPers - 6;
              if (inds == 0) {
                    leftPers = leftPers - 12;
               }
                div.style.cssText = 'height:' + heightPers + '%;left:' + leftPers + '%;top:' + topPers + '%;border:none;'
                div.innerHTML = '<br/><br/>' + obj.state;
                ind = 1;
                inds = 1;
                parentElem.appendChild(div);
            }
        }

        if (obj.name != undefined && count == 1) {
            if (obj.name == 'gate' && obj.type != 'NOT') {
                var div = document.createElement('div');
                div.id = c + 'horizont';

                topPers = topPers + 9;

                heightPers = heightPers / 1.2;
                div.style.cssText = 'width:12%;height:' + heightPers + '%;left:' + leftPers + '%;top:' + topPers + '%;border-right:3px solid black; border-top:3px solid black;'

                div.innerHTML = '<br/><br/>' + obj.type;
                ind = 0;
                inds = 0;
                parentElem.appendChild(div);

            }
            if (obj.name == 'gate' && obj.type == 'NOT') { //debugger
                var div = document.createElement('div');
                div.id = c + 'horizont';
                topPers = topPers + 7.2;
                
                notPers=leftPers+2;
                div.style.cssText = 'width:10%;height:6%;left:' + notPers + '%;top:' + topPers + '%;';
                div.innerHTML = '<br/><br/>' + obj.children[0].state + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + obj.type;
                ind = 1;
                inds = 0;
                parentElem.appendChild(div);
            }
            if (obj.name == 'switch') {
                var div = document.createElement('div');
                div.id = c + 'horizont';
                if (inds == 0) {
                    leftPers = leftPers - 12;
               }

                if (ind != 1) topPers = topPers + 9;
                ind = 0;
                inds = 1;
                if (indl==1){var sleft=24;
                    div.style.cssText = 'height:' + heightPers + '%;left:' + sleft + '%;top:' + topPers + '%;border:none;'
                div.innerHTML = '<br/><br/>' + obj.state;
                parentElem.appendChild(div);}else{
                div.style.cssText = 'height:' + heightPers + '%;left:' + leftPers + '%;top:' + topPers + '%;border:none;'
                div.innerHTML = '<br/><br/>' + obj.state;
                parentElem.appendChild(div);}
            }
        }



        //Перебор схемы и его push в results
        if (obj.children && obj.children.length) { //debugger
            for (var i = 0; i <= obj.children.length; i++) { //debugger
                if (i == 2) {
                    count = 0, tik = 0, parentElem = document.body, leftPers = 36, topPers = 43, heightPers = 12, indl=1;
                }
                if (i < obj.children.length) {
                    count = 0;

                    if (i == 1) {
                        count = 1;
                        ind = 0;
                    };

                    if (obj.children[i].state != undefined) {
                        results.push(obj.children[i].state);
                    } //debugger
                    determ(obj.children[i]);
                }
            }

        }
        return results
    }
    determ(obj);

    //Выполнение всех gate
    for (var i = results.length - 1; i >= 0; i--) { //debugger
        if (results[i] == "NOT") {
            results[i] = actions.NOT(results[i + 1]);
            results.splice(i + 1, 1)
        }
        if (results[i] == "OR") {
            results[i] = actions.OR(results[i + 1], results[i + 2]);
            results.splice(i + 1, 2)
        }
        if (results[i] == "AND") {
            results[i] = actions.AND(results[i + 1], results[i + 2]);
            results.splice(i + 1, 2)
        }
        if (results[i] == "XOR") {
            results[i] = actions.XOR(results[i + 1], results[i + 2]);
            results.splice(i + 1, 2)
        }
    }
    //debugger;
    if (results[0] === 1 || results[0] == true) {
        var img = document.createElement('img');
        img.src='http://www.perseybaby.ru/files/image/lampochka.jpg'
         parentElem.appendChild(img);
        
        console.log('Лампа горит');
    } else {
         var img = document.createElement('img');
        img.src='http://www.ua.all.biz/img/ua/catalog/1441834.jpeg'
         parentElem.appendChild(img);
        console.log('Лампа не горит');
    }

    console.log(results)
}

