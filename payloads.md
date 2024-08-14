POST Request to Add a New Product:

Endpoint:
POST /api/products/

Payload:

json
Copy code
{
    "ProductName": "Sample Product",
    "ProductID": "SP12345",
    "ProductCode": "SAMP123",
    "Totalstock": 100,
    "CreatedUser": "admin",
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
    "subvariant_id": 1,
    "product_id": 123,
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
    "subvariant_id": 1,
    "product_id": 123,
    "stock": 20
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
            "ProductID": "SP12345",
            "ProductCode": "SAMP123",
            "Totalstock": 100,
            "CreatedUser": "admin",
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
How to Use These Payloads
Adding a Product: Use the first payload with a POST request to add a new product to your inventory. Make sure that the variants array includes the different variants and their options.

Adding Stock: Use the second payload with a PATCH request to increase the stock for a specific sub-variant. Ensure the subvariant_id and product_id are correctly identified.

Removing Stock: Use the third payload with a PATCH request to decrease the stock for a specific sub-variant.

Fetching Products: Use the GET request to retrieve the list of products with their variants and sub-variants. This is used to display data in your frontend component.