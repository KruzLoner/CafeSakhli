// Menu data structure
const menuItems = [
    // APPETIZERS AND SALADS
    {
        id: 1,
        name: "Georgian Traditional Salad",
        category: "appetizers-and-salads",
        price: "14",
        description: "Tomatoes & cucumber with fresh herbs",
        image: "menuimages/SaladNoWalnut.JPG",
        status: true
    },
    {
        id: 2,
        name: "Georgian Traditional Salad with Walnuts",
        category: "appetizers-and-salads",
        price: "15",
        description: "Tomatoes & cucumber with fresh herbs, Georgian spices and walnuts",
        image: "menuimages/SaladWithWalnut.JPG",
        status: true
    },
    {
        id: 3,
        name: "Ajapsandali",
        category: "appetizers-and-salads",
        price: "16",
        description: "Roasted vegetable ragout with eggplant, tomato, bell pepper seasoned with garlic, basil, coriander leaves, parsley and Georgian spices",
        image: "menuimages/Ajapsandali.jpg",
        status: true
    },
    {
        id: 4,
        name: "Caesar Salad",
        category: "appetizers-and-salads",
        price: "17",
        description: "Green salad made with chicken fillet, cherry tomato, romaine lettuce, croutons and a dressing that includes lemon, oil, eggs, Worcestershire sauce, anchovies, garlic",
        image: "menuimages/Cezari.JPG",
        status: true
    },
    {
        id: 5,
        name: "Georgian Cheese Platter",
        category: "appetizers-and-salads",
        price: "20",
        description: "Selection of traditional Georgian cheeses",
        image: "menuimages/GeorgianCheesePlatter.jpg",
        status: true
    },
    {
        id: 6,
        name: "Eggplant Rolls",
        category: "appetizers-and-salads",
        price: "17",
        description: "Eggplant with walnut fenugreek garlic paste and fresh pomegranate",
        image: "menuimages/EggplantRolls.jpg",
        status: true
    },
    {
        id: 7,
        name: "Gebzhali",
        category: "appetizers-and-salads",
        price: "19",
        description: "Made with milk, spices and mint leaves, the newly boiled cheese is mixed with mints and cut as the cheese rolls",
        image: "menuimages/Gebzhalia.jpg",
        status: true
    },
    {
        id: 8,
        name: "Mkhali Trio",
        category: "appetizers-and-salads",
        price: "19",
        description: "Spinach, beet leaves, and eggplant roll served with corn bread",
        image: "menuimages/MkhaliTrio.jpg",
        status: true
    },
    {
        id: 9,
        name: "Assorted Pickles",
        category: "appetizers-and-salads",
        price: "14",
        description: "Green pepper, Cabbage, cucumber and Jonjoli",
        image: "menuimages/MjavisAsorti.JPG",
        status: true
    },

    // PASTRY
    {
        id: 10,
        name: "Adjaruli Khachapuri",
        category: "pastry",
        price: "16",
        description: "Oven baked boat shaped pie with blended cheese and egg",
        image: "menuimages/AdjaruliKhachapuri.jpg",
        status: true
    },
    {
        id: 11,
        name: "Imeruli Khachapuri",
        category: "pastry",
        price: "15",
        description: "Oven baked hand rolled dough filled with cheese, glazed with melted butter",
        image: "menuimages/ImeruliKhachapuri.jpg",
        status: true
    },
    {
        id: 12,
        name: "Lobiani",
        category: "pastry",
        price: "14",
        description: "Romano beans with Georgian spices, baked in dough",
        image: "menuimages/Lobiani.jpg",
        status: true
    },
    {
        id: 13,
        name: "Chakhrakina",
        category: "pastry",
        price: "16",
        description: "Oven baked hand rolled dough filled with cheese, Beet leaves, Green onion, Dill",
        image: "menuimages/Chakhrakina.jpg",
        status: true
    },
    {
        id: 14,
        name: "Megruli Khachapuri",
        category: "pastry",
        price: "17",
        description: "Traditional Georgian cheese bread",
        image: "menuimages/MegruliKhachapuri.jpg",
        status: true
    },
    {
        id: 15,
        name: "Traditional Georgian Corn Bread",
        category: "pastry",
        price: "3,5",
        description: "Freshly baked Georgian corn bread",
        image: "menuimages/Mchadi.webp",
        status: true
    },
    {
        id: 16,
        name: "Georgian Bread",
        category: "pastry",
        price: "4",
        description: "Traditional Georgian bread",
        image: "menuimages/GeorgianBread.jpeg",
        status: true
    },
    {
        id: 17,
        name: "Phenovani Khachapuri",
        category: "pastry",
        price: "8",
        description: "Oven Baked Puff dough Filled with Cheese",
        image: "menuimages/phenovanikhachapuri.jpg",
        status: true
    },
    {
        id: 18,
        name: "Phenovani Lobiani",
        category: "pastry",
        price: "7",
        description: "Oven baked puff dough filled with Romano beans and Georgian Spices",
        image: "menuimages/PhenovaniLobiani.jpg",
        status: true
    },

    // DINNER
    {
        id: 19,
        name: "Chikhirtma",
        category: "dinner",
        price: "14",
        description: "Traditional Georgian chicken Soup with Coriander, vinegar, garlic and Lemon",
        image: "menuimages/Chikhirtma.jpg",
        status: true
    },
    {
        id: 20,
        name: "Chakapuli",
        category: "dinner",
        price: "21",
        description: "Slow cooked veal with tarragon, sour plum, scallions, parsley, cilantro and white wine, served with Georgian Bread",
        image: "menuimages/Kharcho.JPG",
        status: false
    },
    {
        id: 21,
        name: "Soup Kharcho",
        category: "dinner",
        price: "21",
        description: "Traditional Georgian Soup containing Beef, rice, Herbs, onion and pepper",
        image: "menuimages/Chakapuli.jpeg",
        status: true
    },
    {
        id: 22,
        name: "Lobio in Clay Pot",
        category: "dinner",
        price: "18",
        description: "Romano beans cooked with traditional spices, served with assorted pickles and cornbread",
        image: "menuimages/LobioinClayPot.jpg",
        status: true
    },
    {
        id: 23,
        name: "Beef Chashushuli",
        category: "dinner",
        price: "20",
        description: "Slow cooked beef, spicy pepper, tomato sauce, cooked herbs, Served with Georgian bread",
        image: "menuimages/chashushuli.jpg",
        status: true
    },
    {
        id: 24,
        name: "Kuchmachi",
        category: "dinner",
        price: "18",
        description: "Cooked Beef Liver, lung, heart onion, with traditional spices served with fresh Pomegranate and corn ball",
        image: "menuimages/Kuchmachi.jpg",
        status: true
    },
    {
        id: 25,
        name: "Kupat",
        category: "dinner",
        price: "18",
        description: "Type of Georgian Sausage, made from Ground pork and beef, intestines, onions and pepper, served with Pomegranate",
        image: "menuimages/Kupat.jpg",
        status: true
    },
    {
        id: 26,
        name: "Pork Mtsvadi",
        category: "dinner",
        price: "16",
        description: "Seasoned Pork marinaded with white wine, served with Plum Sauce (Tkemali)",
        image: "menuimages/PorkMtsvadi.jpg",
        status: true
    },
    {
        id: 27,
        name: "Veal Mtsvadi",
        category: "dinner",
        price: "18",
        description: "Veal meat marinaded with white wine, served with Plum Sauce (Tkemali)",
        // image: "menuimages/VealMstvadi.jpg",
        status: false
    },
    {
        id: 28,
        name: "Chicken Mtsvadi",
        category: "dinner",
        price: "15",
        description: "Marinaded Chicken, served with Plumb Sauce (Tkemali)",
        image: "menuimages/ChickenMtsvadi.jpg",
        status: true
    },
    {
        id: 29,
        name: "Young Chicken",
        category: "dinner",
        price: "17",
        description: "Served with Blueberry, Blackberry and roseberry sauce",
        image: "menuimages/YoungChicken.jpg",
        status: true
    },
    {
        id: 30,
        name: "Mushroom and Cheese",
        category: "dinner",
        price: "16",
        description: "Button mushrooms baked with sulguni cheese butter, in clay pot",
        image: "menuimages/Mushroomandcheese.jpeg",
        status: true
    },
    {
        id: 31,
        name: "Chicken in Baje Sauce",
        category: "dinner",
        price: "17",
        description: "Roasted chicken in walnuts sauce",
        image: "menuimages/Chickeninbaje.jpeg",
        status: true
    },
    {
        id: 32,
        name: "Ojakhuri",
        category: "dinner",
        price: "18",
        description: "Homemade potato with roasted pork served with onion and pomegranate",
        image: "menuimages/Ojakhuri.jpg",
        status: true
    },
    {
        id: 33,
        name: "Khinkali Kalakuri",
        category: "dinner",
        price: "18",
        description: "Traditional Georgian dumplings (6 pieces)",
        image: "menuimages/KhinkaliKalakuri.jpg",
        status: true
    },
    {
        id: 34,
        name: "Khinkali Mtiuluri",
        category: "dinner",
        price: "18",
        description: "Traditional Georgian dumplings (6 pieces)",
        image: "menuimages/KhinkaliMtiuluri.webp",
        status: true
    },
    {
        id: 35,
        name: "Kvari",
        category: "dinner",
        price: "12",
        description: "Megrelian Kvarabia are cakes with cheese, Serve with mint sauce",
        status: false
    },
    {
        id: 36,
        name: "Megruli Kharcho with Beef",
        category: "dinner",
        price: "20",
        description: "Beef stew in luscious walnut-packed gravy",
        image: "menuimages/MegruliKharcho.jpeg",
        status: true
    },
    {
        id: 37,
        name: "Chicken Kebab",
        category: "dinner",
        price: "14",
        description: "Traditional Georgian kebab",
        image: "menuimages/ChickenKebab.jpg",
        status: true
    },
    {
        id: 38,
        name: "Pork and Beef Mix Kebab",
        category: "dinner",
        price: "19",
        description: "Mixed meat kebab",
        image: "menuimages/Kebab.jpeg",
        status: true
    },
    {
        id: 39,
        name: "Ghomi with Smoked Sulguni",
        category: "dinner",
        price: "17",
        description: "Made from corn flour and topped with smoked cheese",
        image: "menuimages/Gomiandsulguni.jpeg",
        status: true
    },
    {
        id: 40,
        name: "Elarji",
        category: "dinner",
        price: "19",
        description: "Thick, Elastic porridge, made from a blend of coarse corn flour and Cheese",
        image: "menuimages/Elarji.jpeg",
        status: true
    },
    {
        id: 41,
        name: "Shkmeruli",
        category: "dinner",
        price: "19",
        description: "Shkmeruli is a traditional Georgian dish made with a chicken fried and then slowly simmered in a rich garlic and milk sauce",
        image: "menuimages/Shkmeruli.jpeg",
        status: true
    },
    {
        id: 42,
        name: "Chicken Shawarma",
        category: "dinner",
        price: "13",
        description: "Grilled wrap filled with spiced chicken, fresh vegetables, and tangy sauce, garnished with pickled peppers and pomegranate seeds.",
        image: "menuimages/ChickenShawarma.jpg",
        status: true
    },
    {
        id: 43,
        name: "Pork Shawarma",
        category: "dinner",
        price: "15",
        description: "Marinated pork wrapped in lavash bread with lettuce, onion, dill, jalapeño, tomato, pickled cucumber, mixed cheese, and red and white sauces.",
        image: "menuimages/ChickenShawarma.jpg",
        status: true
    },
    {
        id: 64,
        name: "Salmon with Vegetables",
        category: "dinner",
        price: "25",
        description: "Fresh Atlantic salmon grilled to perfection, served with seasonal roasted vegetables and herbs",
        image: "menuimages/Salmon.jpeg",
        status: true
    },
    {
        id: 65,
        name: "Pork Meat Signature by Sakhli",
        category: "dinner",
        price: "25",
        description: "Our signature pork dish prepared with traditional Georgian techniques and secret family spices",
        image: "menuimages/Porksignature.jpeg",
        status: true
    },
    {
        id: 66,
        name: "Lamb Chops",
        category: "dinner",
        price: "27",
        description: "Tender lamb chops marinated in Georgian herbs and spices, grilled to your preference",
        image: "menuimages/Lambchops.jpeg",
        status: true
    },
    {
        id: 67,
        name: "Madame Bovary",
        category: "dinner",
        price: "24",
        description: "An elegant dish inspired by French cuisine, featuring tender meat with rich sauce and fresh herbs",
        image: "menuimages/Madambovary.jpeg",
        status: true
    },

    // DESSERTS
    {
        id: 44,
        name: "Honey Cake",
        category: "desserts",
        price: "10",
        description: "Traditional layered honey cake",
        image: "menuimages/HoneyCake.JPG",
        status: true
    },
    {
        id: 45,
        name: "Ideal",
        category: "desserts",
        price: "11",
        description: "Classic Georgian dessert",
        status: false
    },
    {
        id: 46,
        name: "Qada",
        category: "desserts",
        price: "4",
        description: "Traditional Georgian sweet bread",
        status: false
    },
    {
        id: 47,
        name: "Baklava",
        category: "desserts",
        price: "4.5",
        description: "Sweet pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey",
        status: false
    },
    {
        id: 48,
        name: "Napoleon",
        category: "desserts",
        price: "13",
        description: "Classic layered puff pastry cake",
        status: true
    },
    {
        id: 49,
        name: "Pelamushi",
        category: "desserts",
        price: "6",
        description: "Georgian dessert porridge commonly composed of a thick, hard chilled jelly made from grape juice and flour. Served with peeled nuts or gozinaki",
        status: true
    },
    {
        id: 50,
        name: "Homemade Dessert",
        category: "desserts",
        price: "15",
        description: "Chef's special homemade dessert",
        image: "menuimages/HomemadeDessert.jpg",
        status: false
    },
    {
        id: 51,
        name: "Chocolate Pecan Cake",
        category: "desserts",
        price: "12",
        description: "Rich chocolate cake with pecans and chocolate ganache",
        image: "menuimages/ChocolatePecanCake.jpg",
        status: true
    },

    // DRINKS
    {
        id: 52,
        name: "Georgian Lemonade Tarragon",
        category: "drinks",
        price: "3.5",
        description: "Traditional Georgian tarragon-flavored lemonade",
        status: true
    },
    {
        id: 53,
        name: "Georgian Lemonade Pear",
        category: "drinks",
        price: "3.5",
        description: "Traditional Georgian pear-flavored lemonade",
        status: true
    },
    {
        id: 54,
        name: "Georgian Mineral Water (Nabeglavi)",
        category: "drinks",
        price: "3",
        description: "Natural Georgian mineral water",
        status: true
    },
    {
        id: 55,
        name: "Georgian Compot 1L",
        category: "drinks",
        price: "8",
        description: "Traditional Georgian fruit compote",
        status: true
    },
    {
        id: 56,
        name: "Spring Water",
        category: "drinks",
        price: "2.5",
        description: "Fresh spring water",
        status: true
    },
    {
        id: 57,
        name: "Coffee Americano",
        category: "drinks",
        price: "4",
        description: "Classic Americano coffee",
        status: true
    },
    {
        id: 58,
        name: "Coffee Latte",
        category: "drinks",
        price: "4.5",
        description: "Espresso with steamed milk",
        status: true
    },
    {
        id: 59,
        name: "Coffee Cappuccino",
        category: "drinks",
        price: "5",
        description: "Espresso with steamed milk and foam",
        status: true
    },
    {
        id: 60,
        name: "Coffee Espresso",
        category: "drinks",
        price: "4",
        description: "Strong Italian-style coffee",
        status: true
    },
    {
        id: 61,
        name: "Fruit Tea",
        category: "drinks",
        price: "3.5",
        description: "Selection of fruit-flavored teas",
        status: true
    },
    {
        id: 62,
        name: "Black Tea",
        category: "drinks",
        price: "3",
        description: "Traditional black tea",
        status: true
    },
    {
        id: 63,
        name: "Turkish Coffee",
        category: "drinks",
        price: "4.5",
        description: "Traditional Turkish-style coffee",
        status: true
    }
];

// DOM Elements
const menuGrid = document.querySelector('.menu-grid');
const categoryButtons = document.querySelectorAll('.category-btn');

// Function to create menu item card
function createMenuItemCard(item) {
    const imageHtml = item.image
        ? `<img src="${item.image}" alt="${item.name}">`
        : `<div class="placeholder-image">
            <span>${item.name}</span>
           </div>`;

    const statusClass = item.status ? '' : 'unavailable';
    const statusBadge = item.status ? '' : '<div class="unavailable-badge">Not Available</div>';
    const priceDisplay = item.status ? `$${item.price}` : 'N/A';

    return `
        <div class="menu-item ${statusClass}" data-category="${item.category}">
            ${imageHtml}
            ${statusBadge}
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">${priceDisplay}</p>
            </div>
        </div>
    `;
}

// Function to filter menu items with fade animation
function filterMenuItems(category) {
    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    // Fade out current items
    menuGrid.style.opacity = '0';

    setTimeout(() => {
        menuGrid.innerHTML = filteredItems.map(item => createMenuItemCard(item)).join('');
        // Fade in new items
        menuGrid.style.opacity = '1';
    }, 300);
}

// Event Listeners
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter menu items
        filterMenuItems(button.dataset.category);
    });
});

// Initialize menu with all items
document.addEventListener('DOMContentLoaded', () => {
    filterMenuItems('all');

    // Add fade-in animation to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
