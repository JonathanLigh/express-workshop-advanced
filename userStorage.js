var data = {
  jason: {
    age: 43,
    salary: 3.50
  },
  bill: {
    age: 22,
    salary: 100
  },
  jon: {
    age: 25,
    salary: 500
  },
  aaron: {
    age: 20,
    salary: 10
  },
  ethan: {
    age: 22,
    salary: 0
  }
};

module.exports = {

  getAllUsers: function () {
    return Object.values(data);
  },

  getUserByName: function (name) {
    return data[name];
  },

  createUser: function(name, age, salary) {
    data[name] = { age: age, salary: salary};
  }
};
