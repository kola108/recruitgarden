jQuery(document).ready(() => {
    const baseUrl = 'https://demo5926627.mockable.io/test.json';
    const defaultParams = '?current_page=1'
    let posts = []

    axios({
        method: 'GET',
        url: baseUrl + (window.location.search ? window.location.search : defaultParams),
        responseType: 'application/json'
    }).then(response => {
        posts = (response.data.data && response.data.data.posts)
            ? response.data.data.posts
            : []

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
