jQuery(document).ready(() => {
    const baseUrl = 'https://demo5926627.mockable.io/test.json';
    const defaultParams = '?current_page=1'
    let posts = []

    axios({
        method: 'GET',
        url: baseUrl + (window.location.search ? window.location.search : defaultParams),
        responseType: 'application/json'
    })
        .then(response => {
            posts = (response.data.data && response.data.data.posts)
                ? response.data.data.posts
                : []

            renderPosts(posts)
            generatePagination(response.data.data)
        })
        .catch( err => {
            console.log(err)
            renderPosts(posts)
        })
})

function renderPosts(posts) {
    if (posts.length) {
        posts.forEach(post => {
            jQuery('.agency-content-wrapper').append(preparePost(post))
        })
    } else {
        jQuery('.agency-content-wrapper').append(`<p>Nothing to show</p>`)
    }
}


function preparePost(post) {
    const {title, category_title, logo_img, rating, rating_name, text} = post
    const stars = `<span><img src="./icon-star.svg" alt="icon"></span>`.repeat(Number(rating))

    return (`
        <div class="agency-content">
            <div class="agency-content-header d-flex">
                <div class="agency-content-logo">
                    <img src=${logo_img} alt="logo">
                </div>
                <h3 class="agency-content-title">${title} <span>${category_title}</span> </h3>
            </div>
            <div class="agency-content-vote">
                <span>${rating_name}</span>${stars}
            </div>
            <div class="agency-content-text">
                ${text}
            </div>
        </div>
   `)
}

function sortBy(event, option){
    if (event && event.target.value) {
        const {origin, pathname} = window.location
        document.location.href = `${origin}${pathname}?sort_by_${option}=${event.target.value}`
    }
}

function generatePagination(data) {
    if (Number( data.total_pages)) {
        for (let i = 1; i <= Number(data.total_pages); i++ ) {
            jQuery('.pagination-lg').append( `<li class="page-item"><a class="page-link" href="./reviews.html?current_page=${i}">${i}</a></li>`)
        }
    }
}
