Product Inventory System
A comprehensive product inventory management system built with Django for the backend and React for the frontend. The system allows for managing products, variants, and stock levels efficiently.

Features
Product Management: Add, update, and view products with their details.
Variant Management: Define variants and sub-variants for products.
Stock Management: Add and remove stock for sub-variants.
Pagination: View products with pagination support.
Error Handling: Comprehensive error handling for API interactions.
Technologies
Backend: Django 5.1
Frontend: ReactJS
Database: MySQL
API: RESTful API
Installation
Prerequisites
Python 3.8 or higher
Node.js and npm
MySQL
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/product-inventory-system.git
cd product-inventory-system
Set up a virtual environment and install dependencies:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
Configure your database settings in product_inventory_system/settings.py and apply migrations:

bash
Copy code
python manage.py migrate
Create a superuser for the Django admin:

bash
Copy code
python manage.py createsuperuser
Start the Django development server:

bash
Copy code
python manage.py runserver
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
API Endpoints
Products
GET /api/products/ - Fetch a list of products with pagination.
POST /api/products/ - Add a new product.
Stock Management
PATCH /api/products/add_stock/ - Add stock to a sub-variant.
PATCH /api/products/remove_stock/ - Remove stock from a sub-variant.
Error Handling
Responses include appropriate error messages and status codes for invalid requests.