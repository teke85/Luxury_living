const clients = [
  {
    id: 1,
    fullName: 'Michael Stewart',
    title: 'CEO Lake Wood Hotel',
    picture: 'assets/images/head-1.jpg',
    placeholder: 'assets/images/board-01.jpg',
    message:
      'We have been working with luxury living for over 10 years and we appreciate their services',
  },
  {
    id: 2,
    fullName: 'Michael Stewart',
    title: 'CEO Lake Wood Hotel',
    picture: 'assets/images/head-2.jpg',
    placeholder: 'assets/images/board-01.jpg',
    message:
      'We have been working with luxury living for 2 years and we love it here',
  },
  {
    id: 3,
    fullName: 'Michael Stewart',
    title: 'CEO Lake Wood Hotel',
    picture: 'assets/images/head-3.jpg',
    placeholder: 'assets/images/board-01.jpg',
    message: 'Luxury Living is by far the best company',
  },
  {
    id: 4,
    fullName: 'Michael Stewart',
    title: 'CEO Lake Wood Hotel',
    picture: 'assets/images/head-4.jpg',
    placeholder: 'assets/images/board-01.jpg',
    message:
      'Every time i feel like taking a break i engage luxury living to help me relax',
  },
  {
    id: 5,
    fullName: 'Michael Stewart',
    title: 'CEO Lake Wood Hotel',
    picture: 'assets/images/head-5.jpg',
    placeholder: 'assets/images/board-01.jpg',
    message: 'Luxury living is simply the best',
  },
  {
    id: 6,
    fullName: 'Michael Stewart',
    title: 'CEO Lake Wood Hotel',
    picture: 'assets/images/head-6.jpg',
    placeholder: 'assets/images/board-01.jpg',
    message: 'Amazing company',
  },
]

const myContent = document.querySelector('.myContent')

const showInHtml = clients
  .map((client, index) => {
    return `
        <div class="col d-flex">
            <div class="image-box d-flex">
              <img class="square-img" src=${client.placeholder} alt="" />
              <img class="person" src=${client.picture} alt="" />
            </div>
            <div class="text-box">
              <h3>${client.fullName}</h3>
              <hr class="horizontal-rule" />
              <span class="fst-italic">${client.title}</span>
              <p>
                ${client.message}
              </p>
            </div>
        </div>
    `
  })
  .join('')

myContent.innerHTML = showInHtml

// const showInHtml = clients.map((client, index) => {
//   return `
//         <div class="clients-wrapper">
//           <div class="col-left">
//             <img class="square-img" src=${client.placeholder} alt="" />
//             <img class="person" src=${client.picture} alt="" />
//           </div>
//           <div class="col-right">
//             <div class="ms-3 clients-text-box">
//               <h3>${client.fullName}</h3>
//               <hr class="horizontal-rule" />
//               <span class="fst-italic">${client.title}</span>
//               <p>
//                 ${client.message}
//               </p>
//             </div>
//           </div>
//         </div>
// `
// })

// myContent.innerHTML = showInHtml
