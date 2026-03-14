# Rocketship Exchange

A full-stack cryptocurrency exchange built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Authentication** - Secure login and registration system
- **Real-time Trading** - Live cryptocurrency price updates
- **Wallet Management** - Deposit and withdraw digital assets
- **Order Book** - View buy/sell orders in real-time
- **Transaction History** - Track all your trades and transfers

## Tech Stack

- **Frontend**: React.js with Redux for state management
- **Backend**: Express.js REST API
- **Database**: MongoDB for data persistence
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: WebSocket for live price updates

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB installed locally or MongoDB Atlas account
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/rocketshipexchange-creator/rocketship-exchange.git
   cd rocketship-exchange
2. Install server dependencies
   ```bash
   cd server
   npm install
cd ../client
npm install
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# Start backend (from server directory)
npm run dev

# Start frontend (from client directory)
npm start
rocketship-exchange/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── utils/
├── server/                 # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
└── README.md
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	User login
GET	/api/user/profile	Get user profile
GET	/api/market/prices	Get current prices
POST	/api/trade/buy	Place buy order
POST	/api/trade/sell	Place sell order
## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [@rocketshipexchange-creator](https://github.com/rocketshipexchange-creator)

---

**Disclaimer**: This is a educational project. Use at your own risk. Cryptocurrency trading involves significant risk.
