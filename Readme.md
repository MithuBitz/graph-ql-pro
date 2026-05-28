# 📚 GraphQL Pro

A powerful GraphQL server built with Apollo Server that provides an elegant API for querying books and authors. This project demonstrates modern GraphQL implementation with real-world data integration.

---

## ✨ Features

- 🚀 **Apollo Server** - Industry-leading GraphQL server
- 📖 **Book & Author Queries** - Query books and authors with a clean GraphQL schema
- 🔄 **Real-time Data Integration** - Fetches live book data from external API
- 🎯 **Type-Safe Schema** - Strongly-typed GraphQL schema definitions
- ⚡ **Fast & Lightweight** - Built with modern ES modules

---

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MithuBitz/graph-ql-pro.git
cd graph-ql-pro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node index.js
```

You should see output like:

```
Server is running on url http://localhost:8000/
```

---

## 📡 API Endpoints

Once the server is running, access the GraphQL playground at:

```
http://localhost:8000/
```

### Available Queries

#### Get All Books

```graphql
query {
  books {
    title
    subtitle
    publisher
    description
    author {
      name
      email
    }
  }
}
```

#### Get All Authors

```graphql
query {
  authors {
    name
    email
  }
}
```

---

## 🏗️ Project Structure

```
graph-ql-pro/
├── index.js              # Main Apollo Server setup and resolvers
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
├── Readme.md            # This file
└── node_modules/        # Installed dependencies
```

---

## 📦 Dependencies

| Package          | Version  | Purpose                      |
| ---------------- | -------- | ---------------------------- |
| `@apollo/server` | ^5.5.1   | GraphQL server framework     |
| `graphql`        | ^16.14.0 | GraphQL query language       |
| `axios`          | ^1.16.1  | HTTP client for API requests |

---

## 🔧 Configuration

The server runs on **port 8000** by default. To modify the port, edit `index.js`:

```javascript
listen: {
  port: YOUR_PORT;
}
```

---

## 📚 GraphQL Schema

### Type Definitions

```graphql
type Author {
  name: String
  email: String
}

type Book {
  title: String
  subtitle: String
  publisher: String
  description: String
  author: Author
}

type Query {
  books: [Book]
  authors: [Author]
}
```

---

## 🌐 Data Source

This project fetches book data from the **Free API** service:

```
https://api.freeapi.app/api/v1/public/books
```

---

## 🛠️ Development

### Running Tests

```bash
npm test
```

### Debugging

Enable debug mode by adding logging in `index.js`:

```javascript
console.log("Fetching books...");
```

---

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**MithuBitz**

- GitHub: [@MithuBitz](https://github.com/MithuBitz)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ❓ Troubleshooting

| Issue                          | Solution                                                        |
| ------------------------------ | --------------------------------------------------------------- |
| Port 8000 already in use       | Change the port in `index.js`                                   |
| Dependencies not installed     | Run `npm install`                                               |
| GraphQL playground not loading | Ensure the server is running and visit `http://localhost:8000/` |

---

## 📞 Support

For questions or issues, please open an [Issue](https://github.com/MithuBitz/graph-ql-pro/issues) on GitHub.

---

<div align="center">

**Made with ❤️ by [MithuBitz](https://github.com/MithuBitz)**

⭐ If this project helped you, please give it a star!

</div>
