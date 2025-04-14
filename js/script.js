fetch("js/tovar.json")
        .then(response => response.json())
        .then(data =>{
          data.forEach((item,index) =>{
        //console.log("елемент №",index.item)

        let divVitamin = document.createElement('div')
        divVitamin.classList.add('vitamin')
        
        divVitamin.innerHTML = `
                <p>${item.id}</p>
                <h3>${item.title}</h3>
                <hr>
                <img src="img/vitamins/${item.photo}" alt="Картинка для ${item.title}" onerror="this.onerror = null; this.src="img/vitamins/defaut.png" ;>
                <p>${item.description}</p>

                <div>
                <img src="img/vitamins/${item.schema}" alt="" onerror = null; this.sc="img/vitamins/default_schema.png";>
                <p>${"💚". repeat(item.rating)+'🤍'.repeat(5-item.rating)}</p>
                <p>${item.type}</p>
                </div>
                `

                document.getElementById("p-vitamins").appendChild(divVitamin)
            })
      