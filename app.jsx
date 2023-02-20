const search = () => {
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const videogamesitems = document.getElementById('games.list')
    const product = document.querySelectorAll('.games')
    const gname = document.getElementsByTagName('h2')


    for(var i=0; i < gname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = '';
            }else{
                product[i].style.display = 'none';
            }
        }

    }
}