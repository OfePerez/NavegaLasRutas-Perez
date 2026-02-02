const webProductos= [
    {id: 1, nombre: "Bateria electrónica 8 pads", precio:829400 , img:"../public/img/bateria-e.webp", idCat: "baterias", stock:10},
    {id: 2, nombre: "Pad Electrónico", precio:299000 , img:"../public/img/pad-electronico.webp",idCat: "baterias", stock:10},
    {id: 3, nombre: "Air Drums, aeroBand", precio:249000 , img:"../public/img/aeroband-airdrums.webp",idCat: "baterias", stock:10},
    {id: 4, nombre: "Bateria yamaha", precio:490000 , img:"../public/img/bateria-yamaha-.webp",idCat: "baterias", stock:10},
    {id: 5, nombre: "Guitarra Eléctrica Gibson ", precio: 4500000 , img:"../public/img/gybson-electrica.webp",idCat: "guitarras-bajos", stock:10},
    {id: 6, nombre: "Guitarra Eléctrica Ibanez", precio:899000 , img:"../public/img/ibañez-electrica.webp",idCat: "guitarras-bajos", stock:10},
    {id: 7, nombre: "Guitarra Acústica Studio Yamaha", precio:379000 , img:"../public/img/yamaha-acustica-studio.webp",idCat: "guitarras-bajos", stock:10},
    {id: 8, nombre: "Guitarra Acústica Parquer", precio:289000 , img:"../public/img/acustica-parquer.webp",idCat: "guitarras-bajos", stock:10},
    {id: 9, nombre: "Roland Teclado Musical", precio: 676000, img:"../public/img/roland-ex20.webp",idCat: "teclados", stock:10},
    {id: 10, nombre: "Roland Teclado piano", precio:425000 , img:"../public/img/rolandred.webp",idCat: "teclados", stock:10},
    {id: 11, nombre: "Yamaha Teclado", precio: 349000, img:"../public/img/yamaha.webp",idCat: "teclados", stock:10},
    {id: 12, nombre: "Casio Teclado y accesorios", precio: 1077299, img:"../public/img/casio-teclado.webp",idCat: "teclados", stock:10},
    {id: 13, nombre: "Amplificador guitarra Fender", precio:239479 , img:"../public/img/ampli-fender.webp",idCat: "amplificadores", stock:10},
    {id: 14, nombre: "Amplificador guitarra Marshall", precio:289700 , img:"../public/img/ampli-marshall.webp",idCat: "amplificadores", stock:10},
    {id: 15, nombre: "Amplificador bajo Peavey", precio:479839 , img:"../public/img/ampli-bajo.webp",idCat: "amplificadores", stock:10},
    {id: 16, nombre: "Amplificador bajo Ross", precio: 879450, img:"../public/img/ampli-ross-bajo.webp",idCat: "amplificadores", stock:10},
    {id: 17, nombre: "Soporte Teclado", precio: 199749, img:"../public/img/soporte-piano.webp",idCat: "accesorios", stock:10},
    {id: 18, nombre: "Platillos Bateria Zildjian", precio:679325 , img:"../public/img/platillos zildjian-set.webp",idCat: "accesorios", stock:10},
    {id: 19, nombre: "Correa bajo-guitarra", precio: 45000, img:"../public/img/correa-bajo-guitarra.webp",idCat: "accesorios", stock:10},
    {id: 20, nombre: "Cuerdas bajo-guitarra", precio: 25000, img:"../public/img/cuerdas.webp",idCat: "accesorios", stock:10},
    {id: 21, nombre: "Baquetas rock nylon", precio:35000 , img:"../public/img/baquetas-nylon-rock.webp",idCat: "accesorios", stock:10},
]

export const getProductos= ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(webProductos)
        }, 100)
    })
}
export const getOneProduct=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{            
            const producto= webProductos.find(producto=> producto.id == id)
            resolve(producto)
            },100)
        })
}

export const getProductosPorCategoria= (idCategoria)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            const productosCategoria= webProductos.filter(item=> item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}