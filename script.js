const data = [
    {
        id: 1,
        nombre: "Artick Monkeys",
        tags: ["rock", "banda", "música"],
        categoria: "artickMonkeys",
        src: './assets/calcomaniacos/AM1.png'
    },
    {
        id: 2,
        nombre: "Artick Monkeys",
        tags: ["rock", "banda", "música"],
        categoria: "artickMonkeys",
        src: './assets/calcomaniacos/AM2.png'
    },
    {
        id: 3,
        nombre: "Artick Monkeys",
        tags: ["rock", "banda", "música"],
        categoria: "artickMonkeys",
        src: './assets/calcomaniacos/AM3.png'
    },
    {
        id: 4,
        nombre: "Artick Monkeys",
        tags: ["rock", "banda", "música"],
        categoria: "artickMonkeys",
        src: './assets/calcomaniacos/AM4.png'
    },
    {
        id: 5,
        nombre: "Artick Monkeys",
        tags: ["rock", "banda", "música"],
        categoria: "artickMonkeys",
        src: './assets/calcomaniacos/AM5.png'
    },
    {
        id: 6,
        nombre: "Bad Bunny",
        tags: ["reggaeton", "trap", "música"],
        categoria: "badBunny",
        src: './assets/calcomaniacos/BB1.png'
    },
    {
        id: 7,
        nombre: "Bad Bunny",
        tags: ["reggaeton", "trap", "música"],
        categoria: "badBunny",
        src: './assets/calcomaniacos/BB2.png'
    },
    {
        id: 8,
        nombre: "Bad Bunny",
        tags: ["reggaeton", "trap", "música"],
        categoria: "badBunny",
        src: './assets/calcomaniacos/BB3.png'
    },
    {
        id: 9,
        nombre: "Bad Bunny",
        tags: ["reggaeton", "trap", "música"],
        categoria: "badBunny",
        src: './assets/calcomaniacos/BB4.png'
    },
    {
        id: 10,
        nombre: "Bad Bunny",
        tags: ["reggaeton", "trap", "música"],
        categoria: "badBunny",
        src: './assets/calcomaniacos/BB5.png'
    },
    {
        id: 11,
        nombre: "Memes",
        tags: ["humor", "internet"],
        categoria: "memes",
        src: './assets/calcomaniacos/MM1.png'
    },
    {
        id: 12,
        nombre: "Memes",
        tags: ["humor", "internet"],
        categoria: "memes",
        src: './assets/calcomaniacos/MM2.png'
    },
    {
        id: 13,
        nombre: "Memes",
        tags: ["humor", "internet"],
        categoria: "memes",
        src: './assets/calcomaniacos/MM3.png'
    },
    {
        id: 14,
        nombre: "Memes",
        tags: ["humor", "internet"],
        categoria: "memes",
        src: './assets/calcomaniacos/MM4.png'
    },
    {
        id: 15,
        nombre: "Memes",
        tags: ["humor", "internet"],
        categoria: "memes",
        src: './assets/calcomaniacos/MM5.png'
    },
    {
        id: 16,
        nombre: "Messi",
        tags: ["fútbol", "deporte"],
        categoria: "messi",
        src: './assets/calcomaniacos/MESSI1.png'
    },
    {
        id: 17,
        nombre: "Messi",
        tags: ["fútbol", "deporte"],
        categoria: "messi",
        src: './assets/calcomaniacos/MESSI2.png'
    },
    {
        id: 18,
        nombre: "Messi",
        tags: ["fútbol", "deporte"],
        categoria: "messi",
        src: './assets/calcomaniacos/MESSI3.png'
    },
    {
        id: 19,
        nombre: "Messi",
        tags: ["fútbol", "deporte"],
        categoria: "messi",
        src: './assets/calcomaniacos/MESSI4.png'
    },
    {
        id: 20,
        nombre: "Messi",
        tags: ["fútbol", "deporte"],
        categoria: "messi",
        src: './assets/calcomaniacos/MESSI5.png'
    },
    {
        id: 21,
        nombre: "Rick and Morty",
        tags: ["animación", "comedia"],
        categoria: "rickyMorty",
        src: './assets/calcomaniacos/RM1.png'
    },
    {
        id: 22,
        nombre: "Rick and Morty",
        tags: ["animación", "comedia"],
        categoria: "rickyMorty",
        src: './assets/calcomaniacos/RM2.png'
    },
    {
        id: 23,
        nombre: "Rick and Morty",
        tags: ["animación", "comedia"],
        categoria: "rickyMorty",
        src: './assets/calcomaniacos/RM3.png'
    },
    {
        id: 24,
        nombre: "Rick and Morty",
        tags: ["animación", "comedia"],
        categoria: "rickyMorty",
        src: './assets/calcomaniacos/RM4.png'
    },
    {
        id: 25,
        nombre: "Rick and Morty",
        tags: ["animación", "comedia"],
        categoria: "rickyMorty",
        src: './assets/calcomaniacos/RM5.png'
    },
    {
        id: 26,
        nombre: "Anime",
        tags: ["animación", "japonés"],
        categoria: "anime",
        src: './assets/calcomaniacos/CSM1.png'
    },
    {
        id: 27,
        nombre: "Anime",
        tags: ["animación", "japonés"],
        categoria: "anime",
        src: './assets/calcomaniacos/CSM2.png'
    },
    {
        id: 28,
        nombre: "Anime",
        tags: ["animación", "japonés"],
        categoria: "anime",
        src: './assets/calcomaniacos/CSM3.png'
    },
    {
        id: 29,
        nombre: "Anime",
        tags: ["animación", "japonés"],
        categoria: "anime",
        src: './assets/calcomaniacos/CSM4.png'
    },
    {
        id: 30,
        nombre: "Anime",
        tags: ["animación", "japonés"],
        categoria: "anime",
        src: './assets/calcomaniacos/CSM5.png'
    },
];


const galleryContainer = document.getElementById("gallery");
data.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.classList.add("thumbnail");
    imgElement.onclick = () => addImageToCanvas(image.src);
    galleryContainer.appendChild(imgElement);
});


let selectedImage = null;

function addImageToCanvas(src) {
    const imageContainer = document.getElementById('image-container');
    const newImage = new Image();
    newImage.src = src;
    newImage.classList.add('draggable-image');
    
     // Establecer sombra de caja para simular un margen
    newImage.style.filter = 'drop-shadow(10px 0px 0px #fff) drop-shadow(-10px 0px 0px #fff) drop-shadow(0px 10px 0px #fff) drop-shadow(0px -10px 0px #fff)';

      // Establecer el tamaño de la imagen en 3 x 3 centímetros
    newImage.style.width = '3cm';
    newImage.style.height = '3cm';
  
    newImage.onload = function() {
        centerImageInContainer(this, imageContainer);
    };

    makeDraggable(newImage);
    imageContainer.appendChild(newImage);
}

// function centerImageInContainer(image, container) {
//     const borderWidth = parseInt(window.getComputedStyle(image).borderWidth, 10);
//     const margin = parseInt(window.getComputedStyle(image).margin, 10);
//     const offset = 2 * (borderWidth + margin);
//     image.style.top = (container.offsetHeight - image.height - offset) / 2 + 'px';
//     image.style.left = (container.offsetWidth - image.width - offset) / 2 + 'px';
// }

function makeDraggable(image) {
    let isDragging = false;
    let xOffset = 0;
    let yOffset = 0;

    image.addEventListener('mousedown', function(e) {
        isDragging = true;
        xOffset = image.offsetLeft - e.clientX;
        yOffset = image.offsetTop - e.clientY;
        image.style.zIndex = '1000'; // Brings the image to the top
    }, false);

    document.addEventListener('mouseup', function() {
        isDragging = false;
        image.style.zIndex = 'auto'; // Reset z-index
    }, false);

    document.addEventListener('mousemove', function(e) {
        e.preventDefault();
        if (isDragging) {
            image.style.left = (e.clientX + xOffset) + 'px';
            image.style.top = (e.clientY + yOffset) + 'px';
        }
    }, false);

    image.addEventListener('click', function() {
        if(selectedImage) {
            selectedImage.classList.remove('selected');
        }
        selectedImage = image;
        selectedImage.classList.add('selected');
    });
}

function scaleImage(factor) {
    if(selectedImage) {
        let scale = parseFloat(selectedImage.dataset.scale) || 0.4;
        scale *= factor;
        selectedImage.dataset.scale = scale;
        updateTransform(selectedImage);
    }
}

function rotateImage(degrees) {
    if(selectedImage) {
        let rotation = parseFloat(selectedImage.dataset.rotation) || 0;
        rotation += degrees;
        selectedImage.dataset.rotation = rotation;
        updateTransform(selectedImage);
    }
}

function updateTransform(image) {
    const scale = parseFloat(image.dataset.scale) || 1;
    const rotation = parseFloat(image.dataset.rotation) || 0;

    // Aplicar el escalado solo al tamaño de la imagen
    image.style.width = image.naturalWidth * scale + 'px';
    image.style.height = image.naturalHeight * scale + 'px';

    // Mover la imagen para centrarla en su contenedor
    centerImageInContainer(image, document.getElementById('image-container'));

    // Aplicar la rotación
    image.style.transform = `rotate(${rotation}deg)`;
}

function downloadCollage() {
    const imageContainer = document.getElementById('image-container');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = imageContainer.offsetWidth;
    canvas.height = imageContainer.offsetHeight;

    Array.from(imageContainer.children).forEach(child => {
        if (child.tagName === 'IMG') {
            const scaleX = parseFloat(child.dataset.scale) || 1;
            const rotation = parseFloat(child.dataset.rotation) || 0;
            const borderWidth = parseInt(window.getComputedStyle(child).borderWidth, 10);
            const margin = parseInt(window.getComputedStyle(child).margin, 10);
            const totalOffset = borderWidth + margin;
            const rect = child.getBoundingClientRect();
            const x = rect.left - imageContainer.getBoundingClientRect().left + totalOffset;
            const y = rect.top - imageContainer.getBoundingClientRect().top + totalOffset;

            ctx.save();
            ctx.translate(x + (child.width / 2), y + (child.height / 2));
            ctx.rotate(rotation * Math.PI / 180);
            ctx.drawImage(child, -child.naturalWidth / 2 * scaleX, -child.naturalHeight / 2 * scaleX, child.naturalWidth * scaleX, child.naturalHeight * scaleX);
            ctx.restore();
        }
    });

    const link = document.createElement('a');
    link.download = 'collage.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
