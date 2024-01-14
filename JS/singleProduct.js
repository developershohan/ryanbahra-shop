const items = document.querySelectorAll(" .single-product-slider .list .item")
const thumbnails = document.querySelectorAll('.single-product-slider-content .thumbnails .item')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let countItem = items.length
let itemActive = 0

next.onclick = function () {
    itemActive += 1
    if (itemActive >= countItem) {
        itemActive = 0
    }
    showSlider()
}
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
const showSlider = () => {
    // remove item active old
    let itemActiveOld = document.querySelector('.single-product-slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.single-product-slider-content .thumbnails .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})



const toggleButton = document.querySelector('#toggleButton');
const toggleText = document.querySelector('#toggleText');

toggleButton.addEventListener('change', function () {

    toggleText.textContent = this.checked ? 'On' : 'Off';


    document.body.classList.toggle('dark-theme', this.checked);
});



const accordionItems = document.querySelectorAll('.accordion-item');
const accordionbutton = document.querySelectorAll('.accordion-button');



accordionItems.forEach(item => {
    item.addEventListener('click', function (event) {

        const clickedBox = event.target.closest('.accordion-body-box');

        if (clickedBox) {

            const selectedText = clickedBox.querySelector('.config-body-heading').textContent;
            console.log(selectedText);


            const selectedTextSpan = item.querySelector('.seleted-text');

            if (selectedTextSpan) {
                selectedTextSpan.textContent = selectedText;

            }
            //   document.querySelectorAll('.accordion-button').forEach(button => {
            //     button.classList.remove('selected-color');
            //   });


            item.querySelector('.accordion-button').classList.add('selected-color');
        }
    });
});



const expandAllButton = document.getElementById('expandAllButton');
const collapseAllButton = document.getElementById('collapseAllButton');

// Add click event listeners to buttons
expandAllButton.addEventListener('click', expandAll);
collapseAllButton.addEventListener('click', collapseAll);

// Function to expand all accordion items
function expandAll() {
    const accordionItems = document.querySelectorAll('.accordion-collapse');
    accordionItems.forEach(item => {
        item.classList.add('show');
    });
    expandAllButton.style.display = "none"
    collapseAllButton.style.display = "block"
}

// Function to collapse all accordion items
function collapseAll() {
    const accordionItems = document.querySelectorAll('.accordion-collapse');
    accordionItems.forEach(item => {
        item.classList.remove('show');
    });
    expandAllButton.style.display = "block"
    collapseAllButton.style.display = "none"
}


// $(function(){
//     $('#datepicker').datepicker();
//   });





