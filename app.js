const $form = $('#gif-form');
const $value = $('#gif-value');
const $gifSection = $('.gif-section');

const makeGifs = (res) => {
    const length = res.data.data.length;
    const randomIdx = Math.floor(Math.random() * length);
    const $newImg = $('<img>').attr('src', res.data.data[ randomIdx ].images.original.url);
    $gifSection.append($newImg);
};

$form.on('submit', async (e) => {
    e.preventDefault();
    const $gifSearch = $value.val();
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: $gifSearch,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    makeGifs(res);
    $value.val('')

    $('#gif-remove').on('click', () => $('img').remove())
});