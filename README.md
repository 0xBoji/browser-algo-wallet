# Algorand Wallet

A simple, user-friendly web application for managing Algorand wallets and transactions on the Algorand blockchain.

## Features

- Generate new Algorand wallet addresses
- Import existing wallets using seed phrases
- View wallet balances
- Send Algo transactions
- Switch between Testnet and Mainnet
- Export wallet seed phrases

## Technologies Used

- React.js
- Bootstrap for UI components
- Algosdk for Algorand blockchain interactions
- Axios for API requests

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/algorand-wallet/algorand-wallet.git
   ```

2. Navigate to the project directory:
   ```
   cd algorand-wallet
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. Generate a new wallet or import an existing one using the seed phrase.
2. View your wallet address and balance.
3. To send Algos, enter the recipient's address, amount, and a note.
4. Select Testnet or Mainnet from the dropdown.
5. Click "Send Algos" to complete the transaction.

## Components

- `App.js`: Main component that manages state and renders child components
- `Logo`: Displays the Algorand logo
- `Balance`: Shows the current wallet balance
- `Address`: Displays the current wallet address
- `AccountDisplay`: Renders individual wallet accounts
- `SendTransaction`: Button to initiate Algo transfers
- `Generate`: Button to create new wallet addresses
- `ImportButton`: Button to import existing wallets
- `NavbarHeading`: Navigation bar with links to Algorand resources
- `Footer`: Displays footer information

## API Integration

The application interacts with the Algorand blockchain using the AlgoExplorer API. It can be configured to use either Testnet or Mainnet.

## Styling

The project uses a combination of Bootstrap and custom CSS for styling. The main styling file is `App.css`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Algorand Foundation for the blockchain technology
- AlgoExplorer for
