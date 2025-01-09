//  const holaMundo = async() => {
//     return "Hello world";
//  }
//  holaMundo()
//     .then(result => console.log(result))

// const obtenerDatos = async() => {
//     try {
//         const respuesta = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         if (!respuesta.ok) {
//             throw new Error("Error al obtener lo datos");
//         }
//         const usuarios = await respuesta.json();
//         return usuarios;
//     } catch (error) {
//         console.error('Error: ', error);
//     }
// }
// obtenerDatos().then((usuarios) => console.log(usuarios));

// const temporizador = (mill) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Promesa resuelta exitosamente");
//         }, mill);
//     })
// }
// const main = async() => {
//     console.log("Iniciando...");
//     const result = await temporizador(3000);
//     console.log("3 segundos han pasado");
//     return result;
// }
// main().then(result => console.log(result));

// const obtenerDatos = async(id) => {
//     try {
//         const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//         );
//         if (!response.ok) throw new Error("Error en la peticion");
//         return await response.json();
//     } catch (error) {
//         throw new Error(`Error al obtener los datos ${error.message}`);
//     }
// }
// obtenerDatos(5)
//     .then(result => console.log(result))
//     .catch(error => console.error(error))
// const obtenerDatos = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Datos obtenidos correctamente");
//     }, 2000);
//   });
// };
// const procesarDatos = async (datos) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Procesado: true, datos: ${datos}`);
//     }, 1000);
//   });
// };
// const guardarDatos = async (procesados) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Datos guardados exitosamente, resultado: ${procesados}`);
//     }, 1500);
//   });
// };
// async function main() {
//   const datos = await obtenerDatos();
//   console.log("Datos obtenidos:", datos);
//   const procesados = await procesarDatos(datos);
//   console.log("Datos procesados:", procesados);
//   await guardarDatos(procesados);
//   console.log("Datos guardados exitosamente.");
// }
// main();

//POST
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// })
// .then(response => response.json())
// .then(data => console.log('Datos creados: ', data))
// .catch(error => console.error('Error: ', error));

//PUT
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Actualizado",
//     body: "Contenido actualizado",
//     userId: 1,
//   }),
// })
// .then(response => response.json())
// .then(data => console.log("Datos actualizados: ", data))
// .catch(error => console.error('Error: ', error));

// GET
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error', error))
// const obtenerDatos = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) throw new Error("Error en la peticion");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error: ", error.message);
//   }
// };
// const main = async() => {
//     const datos = await obtenerDatos();
//     pintarComponente(datos);
// }
// const pintarComponente = data => {
//     console.log('Pintando componente con datos: ', data);
// }
// main();
// obtenerDatos().then((data) => pintarComponente(data));

//EJERCICIO 1
// const obtenerDatos = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) throw new Error("Error al realizar la peticion.");
//     return await response.json();
//   } catch (error) {
//     console.error("Error: ", error.message);
//     return [];
//   }
// };

// obtenerDatos().then((posts) => {
//   if (posts.length === 0) {
//     console.log("No hay datos disponibles.");
//     return;
//   }

//   posts.filter((post) => post.userId > 5).forEach(post => console.log(post.title)
//   );
// });

//EJERCICIO 2
// const obtenerDatos = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) throw new Error("Error en la peticion");
//     const users = await response.json();
//     return users;
//   } catch (error) {
//     console.error("Error: ", error.message);
//   }
// };
// const pintarDatos = (users) => {
//   const testSection = document.getElementById("test__section");
//   const ul = document.createElement("ul");
//   for (let user of users) {
//     const li = document.createElement("li");
//     li.textContent = `${user.name} | ${user.email}`;
//     ul.insertAdjacentElement("afterbegin", li);
//   }
//   testSection.appendChild(ul);
// };
// obtenerDatos().then((users) => {
//   console.log(users);
//   pintarDatos(users);
// });

//EJERCICIO 3
// const form = document.getElementById("postForm");
// form.addEventListener("submit", async (event) => {
//     event.preventDefault();
//   const title = document.getElementById("title").value;
//   const body = document.getElementById("body").value;
//   const postData = {
//     title,
//     body,
//     userId: 1,
//   };
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     });
//     if (!response.ok) throw new Error("Error al enviar los datos");
//     const result = await response.json();
//     console.log("Respuesta de la API: ", result);
//     alert("Datos enviados correctamente");
//   } catch (error) {
//     console.error("Error: ", error.message);
//     alert("Hubo un error al enviar los datos");
//   }
// });
