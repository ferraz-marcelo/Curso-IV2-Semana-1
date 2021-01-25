var image = document.querySelector('#ic')

function changeImg(){
    if(image.src.match('https://i.pinimg.com/originals/3f/3d/4a/3f3d4af601fa72796239fd18504e3cba.jpg')){
        image.src = 'https://www.lance.com.br/files/main_gallery/uploads/2016/09/21/57e2d8fe841fb.jpeg'
    }else {
        image.src = 'https://i.pinimg.com/originals/3f/3d/4a/3f3d4af601fa72796239fd18504e3cba.jpg'
    }
}

var texto = document.getElementById('title')

function changeText(){
    if(texto.innerHTML ==  'Ronaldo'){
        texto.innerHTML = 'Fenômeno'
        texto.style.alignItems = "flex-end"
        texto.style.fontSize = "4em"
    } else{
        texto.innerHTML = 'Ronaldo'
        texto.style.fontSize = "6em"
        texto.style.alignItems = "flex-start"
    }
}

document.querySelector('.date').innerHTML = new Date().toLocaleString()