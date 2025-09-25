git clone <repo_url>
cd <project_folder>

npm install

set up env 
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/Transactions


API ENDPOINTS
POST /api/transactions – Add a new transaction.

GET /api/transactions – Get all transactions.

GET /api/transactions/balance – Get total balance (Credit - Debit).

PUT /api/transactions/:id – Update a transaction by ID.

DELETE /api/transactions/:id – Delete a transaction by ID.

Model

The Transaction model contains:

amount: Transaction amount

type: "Credit" or "Debit"

category: Category of the transaction

description: Optional description

