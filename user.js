var user = {
  name: "Steven Cannon",
  location: "Provo, Ut",
  occupations: ["Student"],
  hobbies: [
    {
      name: 'Climbing',
      type: 'exercise'
    },
    {
      name: 'Flow Ridding',
      type: 'exercise'
    },
    {
      name: 'Watching movies',
      type: 'relaxing'
    }
  ],
  family: [
    {
      name: 'Chris',
      relation: 'Mom',
      gender: 'Female'
    },
    {
      name: 'Brady',
      relation: 'Brother',
      gender: 'Male'
    },{
      name: 'Mollie',
      relation: 'Sister',
      gender: 'Female'
    }
  ],
  restaurants: [
    {
      name: 'Texas Road House',
      type: 'BBQ',
      rating: 8.5
    },
    {
      name: 'Red Robin',
      type: 'Burgers',
      rating: 7.5
    },
    {
      name: 'Red Lobster',
      type: 'Sea Food',
      rating: 5
    }
  ]
};

module.exports = user