const menu = {
	_courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
 	
  // Appetizers
  set appetizers(inputAppet) {
    this._courses['appetizers'].push(inputAppet)
  },
 
  get appetizers() {
    return this._courses.appetizers
  },
  
  // Mains
  set mains(inputMains) {
    this._courses['mains'].push(inputMains)
  },
  
  get mains() {
    return this._courses.mains
  },
  
  // Desserts
  set desserts(inputDes) {
    this._courses['desserts'].push(inputDes)
  },
  
  get desserts() {
    return this._courses.desserts
  },
 
  // Courses
  get courses() {
    return {
      appetizers: 
      this._courses.appetizers,
      mains:
      this._courses.mains,
      desserts:
      this._courses.desserts
    }
  },
  
  // Adding dish to course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    
    if (courseName === 'appetizers') {
      this.appetizers = dish;
    } else if (courseName === 'mains') {
      this.mains = dish;
    } else if (courseName === 'desserts') {
      this.desserts = dish;
    } else {
      console.log(`${courseName} is a invalid input.`)
    }

  },
  
  // Get a random position of array _courses
  getRandomDishFromCourse(courseName) {
  	const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length)

    if (dishes) 
        return dishes[randomIndex]
    else {
        console.log('404 Error')
        return ''
    }
  },
  
  // Get a random meal and show it
  generateRandomMeal() {
    // 
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    
    let totalPrice = (appetizer.price + mains.price + desserts.price);

    console.log(`Complete Meal\nAppetizer: ${appetizer.name}\nMains: ${mains.name}\nDesserts: ${desserts.name}\n\nTotal Price: ${totalPrice}\n`);
  }
};

// Addding appetizers
menu.addDishToCourse('appetizers', 'Queijo', 4.50)
menu.addDishToCourse('appetizers', 'Azeitona', 2.50)
menu.addDishToCourse('appetizers', 'Linguicinha', 1.50)

// Adding mains
menu.addDishToCourse('mains', 'Bife à role com Arroz', 14.50)
menu.addDishToCourse('mains', 'Strogonoff de Frango', 16.00)
menu.addDishToCourse('mains', 'Arroz, Feijão, Linguiça Toscana e Batata Frita', 20.50)

// Adding desserts
menu.addDishToCourse('desserts', 'Pudim', 8.50)
menu.addDishToCourse('desserts', 'Mousse de Maracujá', 5.00)
menu.addDishToCourse('desserts', 'Bolo de Chocolate', 3.50)

// Getting a meal
menu.generateRandomMeal()