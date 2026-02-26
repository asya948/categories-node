const $=s=>document.querySelector(s);


fetch('http://localhost:3000/categories').then(res => res.json()).then((data) => {
    $('#category-list').innerHTML=data.map(res=>`  <li class="nav-item">
                        <a class="nav-link  user" data-id="${res.id}">
                          ${res.name}
                        </a>
                    </li>`).join('')
})


$('#category-list').onclick=function(e){
    let el=e.target.closest('.user')
    if(!el){
        return
    }
    let id=+el.getAttribute('data-id')
    fetch('http://localhost:3000/products/'+id).then(res => res.json()).then((data) => {
        $('#product-list').innerHTML = data.map(res=>`
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="product-title">
                            <div class="name">${res.product}</div>
                            <span class="badge">Ներկա՝ Մրգեր</span>
                        </div>

                        <div class="btn-group-wrap" aria-label="Move buttons">
                            <button class="btn-move" data-pid="${res.id}" data-to="2">${res.name}</button><button class="btn-move" data-pid="2" data-to="3">Միսեր</button><button class="btn-move" data-pid="2" data-to="4">Հացամթերք</button><button class="btn-move" data-pid="2" data-to="5">Կաթնամթերք</button><button class="btn-move" data-pid="2" data-to="6">Ըմպելիքներ</button>
                        </div>
                    </div>
                </div>
            `).join('')
    })

}





