textos = [
    {
        titulo: 'massa1',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita illum fugit doloribus voluptatibus! Illum eveniet voluptatum molestiae voluptate, explicabo sapiente, deleniti perspiciatis temporibus corrupti in officiis sint nesciunt vitae.'
    },
    {
        titulo: 'massa2',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita illum fugit doloribus voluptatibus! Illum eveniet voluptatum molestiae voluptate, explicabo sapiente, deleniti perspiciatis temporibus corrupti in officiis sint nesciunt vitae.'
    },
    {
        titulo: 'massa3',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita illum fugit doloribus voluptatibus! Illum eveniet voluptatum molestiae voluptate, explicabo sapiente, deleniti perspiciatis temporibus corrupti in officiis sint nesciunt vitae.'
    },
    {
        titulo: 'massa4',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita illum fugit doloribus voluptatibus! Illum eveniet voluptatum molestiae voluptate, explicabo sapiente, deleniti perspiciatis temporibus corrupti in officiis sint nesciunt vitae.'
    },
    {
        titulo: 'massa5',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita illum fugit doloribus voluptatibus! Illum eveniet voluptatum molestiae voluptate, explicabo sapiente, deleniti perspiciatis temporibus corrupti in officiis sint nesciunt vitae.'
    },
    {
        titulo: 'massa6',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita illum fugit doloribus voluptatibus! Illum eveniet voluptatum molestiae voluptate, explicabo sapiente, deleniti perspiciatis temporibus corrupti in officiis sint nesciunt vitae.'
    }
];

let gridContainer = $(".massa-container");
let flexContainer = $(".legal-container");

for(i = 0; i<textos.length; i++){
    gridContainer.append(`
    <div class="massa-card">
        <h1 class="card-h1">${textos[i].titulo}</h1>
        <p class="card-p">${textos[i].descricao}</p>
    </div>`
    );

    flexContainer.append(`
    <div class="massa-card">
    <h1 class="card-h1">${textos[i].titulo}</h1>
    <p class="card-p">${textos[i].descricao}</p>
    </div>`
    );
}

