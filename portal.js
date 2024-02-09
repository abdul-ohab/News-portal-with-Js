//load categories
const LoadNews = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayNews(data.data.news_category));
}

//display all news
const displayNews = (categories) =>{
    const ul = document.getElementById('items')
        categories.forEach(category =>{
        const list = document.createElement('li');
        list.addEventListener('click', function(){
            setSpinner(true);
        });
        list.innerHTML = `
        <a class='link' onclick="loadItems('${category.category_id}',
        '${category.category_name}')">${category.category_name}</a>`;
        ul.appendChild(list);
    })
};

//load category and dispaly items found
const cardItems = document.getElementById('card-container');
const heading = document.getElementById("heading")
async function loadItems(id,name){
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const news = await res.json()
    if(news.status){
        displayItems(news.data, name);
    }
    else{
        heading.innerHTML = `<h3>No items found</h3>`;
        cardItems.innerHTML = '';
        setSpinner(false)
    }
}

//load all individual news
const displayItems = (items,names) =>{  
    heading.innerHTML = `<h3>${items.length} Items found in ${names}</h3>`
    cardItems.innerHTML = '';
    viewItems(items)
    items.forEach(item =>{
        //viewItems(item.total_view);
        const innerCard = document.createElement('div');
        innerCard.classList.add('row');
        innerCard.innerHTML = `
        <div class="col-md-4">
            <img src="${item.thumbnail_url}" id="thumble" class="img-fluid" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${item.title.slice(0, 45)}</h5><br>
                <p class="card-text">${item.details.slice(0, 220)}</p>
                <p class="card-text">${item.details.slice(220, 360)+ "...."}</p>
            </div>
            <div id="author">
                    <div class="detail">
                    <img src="${item.author.img}">
                    <div class="author-part">
                        <span>${item.author.name ? item.author.name : "no author"}</span>
                        <span>${item.author.published_date ? item.author.published_date.slice(0 ,10) : "none"}</span>
                    </div>
                    </div>
                    <div id="view"><i class="fa-solid fa-eye">  <span>${item.total_view ? item.total_view : "no view"}</span></i></div>
                <div>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                    <div><i class="fa-solid fa-arrow-right icon"></i></div>
        </div>
        `
        cardItems.appendChild(innerCard);
    });
    setSpinner(false);
}

//sorting in view
const viewItems = (items) =>{
    items.sort(function(a,b){
        return b.total_view - a.total_view
    })
}

//set spinner
const setSpinner = (isLoading) =>{
    const loadSpinner = document.getElementById('load-spinner');
    if(isLoading){
        loadSpinner.classList.remove('d-none')
    }
    else{
        loadSpinner.classList.add('d-none');
    }
}

const showModal = (newsId) =>{
    fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
    .then(res => res.json())
    .then(data => showModalDetails(data))
}


LoadNews();
loadItems('08','All News');

