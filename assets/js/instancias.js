//exportar arrays

export { arrayAnimales, arrayInstancia };

// declarar arrays
const arrayAnimales = [];
const arrayInstancia = [];

// funcion IIFE
(async () => {
    try {
        // Obtener datos del archivo JSON
        const response = await fetch("animales.json");
        
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw {
                code: response.status,
                message: "Datos solicitados no encontrados"
            };
        }

        //datos JSON
      const data = await response.json();
      
      // llenar array
      data.animales.forEach(animal => {
          arrayAnimales.push(animal)
      });
  } catch (error) {
      console.log(error);
  }
})();
