// Products data
export const products = [
  {
    id: "usb-drive-32gb",
    name: "USB Drive 32GB",
    description: "Memoria USB de 32GB de alta velocidad para almacenar y transferir tus archivos con facilidad.",
    price: 35.90,
    features: [
      "Capacidad de 32GB",
      "USB 3.0 para transferencias rápidas",
      "Diseño compacto y portátil",
      "Compatible con Windows, macOS y Linux"
    ],
    category: "USB",
    image: "https://images.pexels.com/photos/775772/pexels-photo-775772.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
    stock: 15
  },
  {
    id: "usb-drive-64gb",
    name: "USB Drive 64GB",
    description: "Memoria USB de 64GB de alta velocidad para almacenar y transferir tus archivos con facilidad.",
    price: 59.90,
    features: [
      "Capacidad de 64GB",
      "USB 3.0 para transferencias rápidas",
      "Diseño compacto y portátil",
      "Compatible con Windows, macOS y Linux"
    ],
    category: "USB",
    image: "https://images.pexels.com/photos/1476302/pexels-photo-1476302.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
    stock: 10
  },
  {
    id: "gaming-mouse-rgb",
    name: "Mouse Gaming RGB",
    description: "Mouse gaming con iluminación RGB y sensor de alta precisión para una experiencia de juego superior.",
    price: 89.90,
    features: [
      "Sensor óptico de 12,000 DPI",
      "7 botones programables",
      "Iluminación RGB personalizable",
      "Diseño ergonómico para largas sesiones de juego"
    ],
    category: "Mouse",
    image: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
    stock: 8
  },
  {
    id: "wireless-mouse",
    name: "Mouse Inalámbrico",
    description: "Mouse inalámbrico ergonómico con batería de larga duración y tecnología sin lag.",
    price: 45.90,
    features: [
      "Tecnología inalámbrica de 2.4GHz",
      "Batería que dura hasta 12 meses",
      "Sensor óptico de 1200 DPI",
      "Diseño ergonómico y compacto"
    ],
    category: "Mouse",
    image: "https://images.pexels.com/photos/399159/pexels-photo-399159.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
    stock: 12
  },
  {
    id: "gaming-mousepad-xl",
    name: "Mousepad Gaming XL",
    description: "Mousepad de gran tamaño con superficie optimizada para todos los tipos de sensores.",
    price: 49.90,
    features: [
      "Tamaño: 80 x 30 cm",
      "Superficie de tela de alta calidad",
      "Base antideslizante",
      "Bordes reforzados para mayor durabilidad"
    ],
    category: "Mousepad",
    image: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
    stock: 20
  },
  {
    id: "mechanical-keyboard",
    name: "Teclado Mecánico RGB",
    description: "Teclado mecánico con switches Blue, retroiluminación RGB y diseño ergonómico.",
    price: 199.90,
    features: [
      "Switches mecánicos Blue",
      "Retroiluminación RGB personalizable",
      "Anti-ghosting en todas las teclas",
      "Reposamuñecas desmontable"
    ],
    category: "Teclados",
    image: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: true,
    stock: 5
  },
  {
    id: "wireless-headset",
    name: "Auriculares Inalámbricos",
    description: "Auriculares gaming inalámbricos con sonido envolvente 7.1 y micrófono de alta calidad.",
    price: 159.90,
    features: [
      "Sonido envolvente 7.1",
      "Batería de hasta 20 horas",
      "Micrófono con cancelación de ruido",
      "Compatible con PC, PlayStation y Switch"
    ],
    category: "Auriculares",
    image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
    stock: 7
  },
  {
    id: "external-hard-drive-1tb",
    name: "Disco Duro Externo 1TB",
    description: "Disco duro externo de 1TB con conexión USB 3.0 para almacenamiento portátil de datos.",
    price: 219.90,
    features: [
      "Capacidad de 1TB",
      "Interfaz USB 3.0",
      "Compatible con Windows y macOS",
      "Diseño compacto y resistente a golpes"
    ],
    category: "Almacenamiento",
    image: "https://images.pexels.com/photos/48716/pexels-photo-48716.jpeg?auto=compress&cs=tinysrgb&w=600",
    isNew: false,
    stock: 10
  }
];

// Get products by category
export function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

// Get product by ID
export function getProductById(id) {
  return products.find(product => product.id === id);
}

// Get related products
export function getRelatedProducts(id, limit = 4) {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== id)
    .slice(0, limit);
}

// Get new products
export function getNewProducts(limit = 4) {
  return products
    .filter(product => product.isNew)
    .slice(0, limit);
}

// Get categories
export function getCategories() {
  return [...new Set(products.map(product => product.category))];
}