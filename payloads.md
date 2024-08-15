POST Request to Add a New Product:

Endpoint:
POST /api/products/

Payload:

json
Copy code
{
    "ProductName": "Sample Product",
    "ProductID": 678767,
    "ProductCode": "SAMP123",
    "Totalstock": 100,
    "CreatedUser": 2,
    "variants": [
        {
            "name": "Size",
            "options": [
                "Small",
                "Medium",
                "Large"
            ]
        },
        {
            "name": "Color",
            "options": [
                "Red",
                "Blue",
                "Green"
            ]
        }
    ]
}









Example Payload for Adding Stock
PATCH Request to Add Stock:

Endpoint:
PATCH /api/products/add_stock/

Payload:

json
Copy code
{
    "productname": "shirt",
    "variantname": "size",
    "option":"m",
    "stock": 50
}
Example Payload for Removing Stock
PATCH Request to Remove Stock:

Endpoint:
PATCH /api/products/remove_stock/

Payload:

json
Copy code
{
    "productname": "shirt",
    "variantname": "size",
    "option":"m",
    "stock": 50
}









Example Payload for Fetching Products
GET Request to Fetch Products:

Endpoint:
GET /api/products/

Response Example:

json
Copy code
{
    "count": 1,
    "results": [
        {
            "id": 1,
            "ProductName": "Sample Product",
            "ProductID": 12345,
            "ProductCode": "SAMP123",
            "Totalstock": 100,
            "CreatedUser": 1,
            "variants": [
                {
                    "name": "Size",
                    "sub_variants": [
                        {
                            "option": "Small",
                            "stock": 10
                        },
                        {
                            "option": "Medium",
                            "stock": 20
                        },
                        {
                            "option": "Large",
                            "stock": 30
                        }
                    ]
                },
                {
                    "name": "Color",
                    "sub_variants": [
                        {
                            "option": "Red",
                            "stock": 15
                        },
                        {
                            "option": "Blue",
                            "stock": 25
                        },
                        {
                            "option": "Green",
                            "stock": 35
                        }
                    ]
                }
            ]
        }
    ]
}