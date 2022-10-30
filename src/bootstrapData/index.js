const users = [
  {
    firstName: "Utkarsh",
    lastName: "Mehta",
    email: "utkarsh.mehta@gmail.com",
    password: "qwerty123!!",
  },
  {
    firstName: "Admin",
    lastName: "Admin",
    email: "admin@imdb.com",
    password: "admin@123",
  },
];

const login = (email, password) => {
  const user = users.filter(
    (u) => u.email === email.toLowerCase() && u.password === password
  );
  return user.length > 0
    ? {
        success: true,
        user: user[0],
      }
    : {
        success: false,
        message: "Invalid email or password!",
      };
};

const signup = (firstName, lastName, email, password) => {
  if (firstName && lastName && email && password) {
    const existing = users.filter((u) => u.email === email);
    if (existing.length > 0) {
      return {
        success: false,
        message: "Email already registered!",
      };
    } else {
      users.push({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password,
      });
      return {
        success: true,
        message: "User signed up!",
      };
    }
  } else {
    return {
      success: false,
      message: "Fields missing!",
    };
  }
};

const list = [
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1e71",
    rank: 2,
    name: " The Godfather",
    year: 1972,
    rating: 9.1,
    numberOfRatings: 831947138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 3,
    name: " The Dark Knight",
    year: 2008,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 4,
    name: "The Godfather Part II",
    year: 1974,
    rating: 9.0,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 5,
    name: "12 Angry Men",
    year: 1957,
    rating: 9.0,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 6,
    name: "Schindler's List",
    year: 1993,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 7,
    name: " The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 8,
    name: " Pulp Fiction",
    year: 1994,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 9,
    name: " The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 10,
    name: "The Good, the Bad and the Ugly",
    year: 1996,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
  },
];

const data = {
  users: {
    users,
    login,
    signup,
  },
  movies: {
    list,
  },
};

export default data;
