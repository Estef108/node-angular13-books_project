const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Book = require('../models/Book');

const books = [
    { "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "year": 1967,
    "image": "../../../public/cien-annos-soledad.PNG"
    },
    { "title": "El guardián entre el centeno",
    "author": "J.D. Salinger",
    "year": 1951,
    "image": "../../../public/guardian-centeno.PNG"
    },
    { "title": "El conde de Montecristo",
    "author": "Alejandro Dumas",
    "year": 1846,
    "image": "../../../public/conde-montecristo.PNG"
    },
    { "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "year": 1813,
    "image": "../../../public/orgullo-prejuicio.PNG"
    },
    { "title": "Matar a un ruiseñor",
    "author": "Harper Lee",
    "year": 1960,
    "image": "../../../public/matar-ruisenor.PNG"
    },
    { "title": "Flores en el ático",
    "author": "V.C. Andrews",
    "year": 1979,
    "image": "../../../public/flores-atico.PNG"
    },
    { "title": "1984",
    "author": "George Orwell",
    "year": 1949,
    "image": "../../../public/1984.PNG"
    },
    { "title": "Drácula",
    "author": "Bram Stoker",
    "year": 1897,
    "image": "../../../public/dracula.PNG"
    },
    { "title": "Cometas en el cielo",
    "author": "Khaled Hosseini",
    "year": 2003,
    "image": "../../../public/cometas-cielo.PNG"
    },
    { "title": "Romeo y Julieta",
    "author": "William Shakespeare",
    "year": 1597,
    "image": "../../../public/romeo-julieta.PNG"
    },
    { "title": "Moby Dick",
    "author": "Herman Melville",
    "year": 1851,
    "image": "../../../public/mobydick.PNG"
    },
    { "title": "Crimen y castigo",
    "author": "Fiódor M. Dostoievski",
    "year": 1866,
    "image":"../../../public/crimen-castigo.PNG"
    },
    { "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "year": 1847,
    "image": "../../../public/jane-eyre.PNG"
    },
    { "title": "Ana Karenina",
    "author": "Leon Tolstoi",
    "year": 1877,
    "image": "../../../public/ana-karenina.PNG"
    },
    { "title": "Las aventuras de Alicia en el país de las Maravillas",
    "author": "Lewis Carroll",
    "year": 1865,
    "image": "../../../public/alicia-pais-maravillas.PNG"
    },
    { "title": "El Principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943,
    "image": "../../../public/principito.PNG"
    },
    { "title": "El señor de los anillos. La comunidad del anillo",
    "author": "J.R.R. Tolkien",
    "year": 1954,
    "image": "../../../public/senor-anillos.PNG"
    },
    { "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "year": 1980,
    "image": "../../../public/nombre-rosa.PNG"
    },
    { "title": "Robinson Crusoe",
    "author": "Daniel Defoe",
    "year": 1719,
    "image": "../../../public/robinson-crusoe.PNG"
    },
    { "title": "Veinte mil leguas de viaje submarino",
    "author": "Julio Verne",
    "year": 1870,
    "image": "../../../public/veintemil-leguas.PNG"
    },
    { "title": "Ana de las Tejas Verdes",
    "author": "Lucy Maud Montgomery",
    "year": 1908,
    "image": "../../../public/ana-tejas-verdes.PNG"
    },
    { "title": "Las aventuras de Huckleberry Finn",
    "author": "Mark Twain",
    "year": 1884,
    "image": "../../../public/huckleberry-finn.PNG"
    },
    { "title": "El perfume",
    "author": "Patrick Süskind",
    "year": 1985,
    "image": "../../../public/el-perfume.PNG"
    },
    { "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818,
    "image": "../../../public/frankenstein.PNG"
    }
    ]

mongoose
    .connect(process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    .then( async() => {
        const allBooks = await Book.find();
        if( allBooks.length ) {
            await Book.collection.drop();
            console.log('Dropped database');
        }
    })
    .catch( error => console.log(`Error deleting data: ${error}`))
    .then( async() => {
        await Book.insertMany(books);
        console.log('Database created');
    })
    .catch( error => console.log(`Error adding data: ${error}`))
    .finally( () => mongoose.disconnect());