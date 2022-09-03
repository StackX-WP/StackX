export const categories = [
    {
        id: 1, 
        img: 'https://i.pinimg.com/236x/28/87/c8/2887c80f61ac715a68a3476637bce2b4.jpg',
    },
    {
        id: 2, 
        img: 'https://i.pinimg.com/236x/73/0b/73/730b7339fcfbc913776b3a8acb27f8b9.jpg',
    },
    {
        id: 3,
        img: 'https://i.pinimg.com/236x/2b/84/b6/2b84b67cd30901ba4aae8427b9388b26.jpg',
    },
];

const images = {}

images.adidas = {
    Ultraboost: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdb8ed0f18904d0f89b6ae37016b194c_9366/Ultraboost_DNA_Climacool_Shoes_White_GV8761_01_standard.jpg',
    NMD: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1133b2088da64301b4faae1900919730_9366/NMD_R1_Shoes_Beige_GW5694_01_standard.jpg',
    Slides: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3723be3685ec476aaed0a991001b1389_9366/Adilette_Aqua_Slides_Blue_F35542_01_standard.jpg',
    'Stan Smith': 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a4ea8a5e69142ceb482ac5a00dd9db6_9366/Stan_Smith_Shoes_White_Q47224_01_standard.jpg',
    Superstar: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg',
    Powerphase: 'https://cdn.flightclub.com/1500/TEMPLATE/802801/1.jpg',
    'Adidas Yeezy 350': 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dwc01df2fd/product_images/0550603440146NEW_00_165.jpg?sw=800',
    'Adios pro 2.0 tme (Addy shoe)': 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/65ba1bef35c24e0ab8d8ae9300f4176c_9366/Adios_Pro_2.0_TME_Shoes_White_GX9300_01_standard.jpg',
}
        
images.Jordan = {
    'Jordan 11 bred': 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw26c9d737/product_images/0550603440168NEW_00_774.jpg?sw=400',
    'Jordan 3 black cement': 'https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cement-2018-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1609356781',
    'Jordan 4 bred black cement': 'https://cdn.flightclub.com/TEMPLATE/139813/2.jpg',
    'Jordan 5 retro off white': 'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/043/946/378/original/662236_01.jpg.jpeg?action=crop&width=950',
    'Air Jordan 1 mid triple white': 'https://sneakerbardetroit.com/wp-content/uploads/2020/03/Air-Jordan-1-Mid-Triple-White-554724-130-Release-Date-2.jpg',
    'Jordan 1 Chicago': 'https://images.stockx.com/images/Air-Jordan-1-Retro-Chicago-2015-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607656901',
    'Air Jordan 1 og bred': 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606318705',
    'Air Jordan 1 retro high og royal': 'https://images.stockx.com/images/Air-Jordan-1-Retro-Black-Blue-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606319918',
}

images['New Balance'] = {
    'New Balance 2002r': 'https://nb.scene7.com/is/image/NB/ms237gd_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600',
    'New Balance 237v1': 'https://media.gq.com/photos/62d1a2c7a413d2c95a76b3fe/master/w_1280%2Cc_limit/product_xlarge.jpg',
    'New Balance 327': 'https://nb.scene7.com/is/image/NB/ms327bd_nb_02_i?$pdpflexf2$&wid=440&hei=440',
    'New Balance 574': 'https://nb.scene7.com/is/image/NB/pc574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440',
    'New Balance 990v5': 'https://nb.scene7.com/is/image/NB/w990gl5_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600',
    'New Balance 530': 'https://www.kosmosstore.com/10718-large_default/new-balance-m-991-ggt-made-in-uk-green-m991ggt.jpg',
    'New Balance 991 GGT': 'https://i.ebayimg.com/images/g/9soAAOSw095i-wyC/s-l500.jpg',
    'New Balance Fresh Foam x1080v12': 'https://nb.scene7.com/is/image/NB/m108012w_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600',
}

images.Nike = {
    'Nike air force 1s': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-womens-shoes-GCkPzr.png',
    'Nike Air Max 90 Futura': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0cefe74b-627c-4e36-a521-bf4d0f574c89/air-max-90-futura-womens-shoes-RfwMwQ.png',
    'Nike Free RN Flyknit 2018': 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/lstznmmah3ytjqo8ddgd/free-rn-flyknit-2018-mens-running-shoes-RRT9elMk.png',
    'Nike Roshe G': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f4bef3d4-a15f-4d33-a5a2-4c3ac6afeedb/roshe-g-mens-golf-shoes-xkWsZW.png',
    'Nike Blazer Mid 77 Vintage': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-mens-shoes-nw30B2.png',
    'Nike Air Max 270': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3a7ad36-2946-45bc-a8ae-e87e497ebc68/air-max-270-womens-shoes-Pgb94t.png',
    'Nike Air Max 1': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b2d1092-f1ee-4abc-afcf-bdb11a0f4866/air-max-1-mens-shoes-fjQJJF.png',
    'Nike Offcourt': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/41f0bcc4-fec5-40aa-b1f7-34615347f566/offcourt-se-womens-slides-Cqpfhg.png'
}

images.Balenciaga = {
    'Speed 2.0 Black': 'https://balenciaga.dam.kering.com/m/2451d4638dc6b6f/Medium-617239W2DB11013_F.jpg?v=6',
    'Triple S Off-White': 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F12%2Fbalenciaga-triple-s-beige-off-white-clear-sole-colorway-release-info-00.jpg?w=960&cbr=1&q=90&fit=max',
    'Pool Slide White': 'https://balenciaga.dam.kering.com/m/747f1c8f845d9cb4/eCom-565826W1S839034_F.jpg?v=4',
    'Triple S Sneaker Clear Sole': 'https://image.goat.com/attachments/product_template_additional_pictures/images/010/700/247/medium/312639_01.jpg.jpeg?1521487138',
    'Paris High Top Sneaker 750': 'https://balenciaga.dam.kering.com/m/29f6b2d057a3515e/eCom-688752W3RC49090_F.jpg?v=3',
    'Defender Sneaker': 'https://balenciaga.dam.kering.com/m/2808441dc02c51d9/Thumbnail-685611W2RA69700_F.jpg?v=4',
    'Pool Slide Black White': 'https://balenciaga.dam.kering.com/m/2c2af1aa7dd3f1f0/Medium-565826W1S889010_D.jpg?v=5',
    'Triple S Sneaker Clear Sole': 'https://balenciaga.dam.kering.com/m/76493461febce818/eCom-544351W2FB19000_F.jpg?v=10'
}


export default images;