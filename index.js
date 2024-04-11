var res = fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=2 ");
res.then((data) => data.json())
.then((data1) => console.log(data1.cards));
var res = fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=2");
res.then((data) => data.json())
.then((data1) => foo(data1.cards));


var container = document.createElement("div")
container.className ="container"

var row = document.createElement("div")
row.className ="row"


function foo(data1)
{
    for(var i =0 ; i< data1.length;i++)
    {
        var col = document.createElement("div")
        col.className = "col-md-6"
        col.innerHTML = `<div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Header</div>
        <img src="${data1[i].image}" class="card-img-top" style="max-width: 540px;" alt="...">
              
        <div class="card-body text-success">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text"> <ul class="list-group list-group-flush">
                <li class="list-group-item">suit: ${data1[i].suit}</li>
                <li class="list-group-item"> value :  ${data1[i].value}</li>
                <li class="list-group-item"> code:  ${data1[i].code}</li>
              </ul>
          </p>
        </div>
        <div class="card-footer bg-transparent border-success">Footer</div>
      </div>`

     row.append(col)
        container.append(row)
        document.body.append(container)
    }
}