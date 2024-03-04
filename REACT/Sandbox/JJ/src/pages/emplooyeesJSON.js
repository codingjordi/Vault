const employeesJSON = [
    {
        "id": 1,
        "name": "Paula Casas",
        "age": 24,
        "imgSrc" : "https://i.postimg.cc/VNM0mwV3/paula.jpg",
        "isWorking": true,
        "recruitedOn": new Date(2024, 0, 20),
        "socialSecurityNumber" : "09-318591242",
        "ordersHandeledToday": "10",
        "ordersHandledMonthly": "27",
        "shift": [
            {
                "monday": "morning",
                "tuesday": "morning",
                "wednseday": "morning",
                "thursday": "morning",
                "friday": "morning",
            }
            
        ]    
    },
    {
        "id": 2,
        "name": "Cindy Nero",
        "age": 37,
        "imgSrc": "https://i.postimg.cc/TYghhbvh/chico-guapo-seguro-posando-contra-pared-blanca-1.jpg",
        "isWorking": true,
        "recruitedOn": new Date(2024, 2, 11),
        "socialSecurityNumber" : "02-891134942",
        "ordersHandeledToday": "9",
        "ordersHandledMonthly": "47",
        "shift": [
            {
                "monday": "full",
                "tuesday": "off",
                "wednseday": "full",
                "thursday": "off",
                "friday": "full",
            }
            
        ]    
    },
    {
        "id": 3,
        "name": "Dolores Jackson",
        "age": 54,
        "imgSrc": "https://i.postimg.cc/sfcsLJzY/noemi-sanchez-1.jpg",
        "isWorking": false,
        "recruitedOn": new Date(2024, 1, 25),
        "socialSecurityNumber" : "07-5172122742",
        "ordersHandeledToday": "4",
        "ordersHandledMonthly": "123",
        "shift": [
            {
                "monday": "morning",
                "tuesday": "off",
                "wednseday": "morning",
                "thursday": "morning",
                "friday": "off",
            }
            
        ]    
    },
    {
        "id": 4,
        "name": "Primitivo Buenaventura",
        "age": 63,
        "imgSrc": "https://i.postimg.cc/Nf6TSSMN/camarero-mayor-con-la-toalla-blanca-lenguaje-de-signos-en-el-restaurante-108806251-transformed.jpg",
        "isWorking": false,
        "recruitedOn": new Date(2024, 2, 29),
        "socialSecurityNumber" : "03-32423162",
        "ordersHandeledToday": "0",
        "ordersHandledMonthly": "87",
        "shift": [
            {
                "monday": "off",
                "tuesday": "night",
                "wednseday": "off",
                "thursday": "night",
                "friday": "off",
            }
            
        ]    
    }
]

export { employeesJSON };