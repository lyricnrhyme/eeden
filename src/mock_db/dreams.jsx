//~~~~~~~~~~~~~~~ DREAMS DB && CALLS ~~~~~~~~~~~~~~~//


//~~~~ MOCK DREAMS ~~~~//
let dreams_db = [{
  "dream_id": 1,
  "title": "Bekännelsen (Confession, The)",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "price": 12,
  "genre": "Thriller",
  "duration": 47,
  "featured_video": "19wxBKAqVbXvYDkfvWnZebvrYqeBenKSiT",
  "dream_images": "http://dummyimage.com/171x186.bmp/cc0000/ffffff",
  "keywords": "emulation"
}, {
  "dream_id": 2,
  "title": "It's a Gift",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "price": 89,
  "genre": "Comedy",
  "duration": 94,
  "featured_video": "1GPdxsY9w8WTfP8MB6U58J8WgxVB4De57M",
  "dream_images": "http://dummyimage.com/156x100.png/cc0000/ffffff",
  "keywords": "uniform"
}, {
  "dream_id": 3,
  "title": "Legion of the Dead",
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "price": 98,
  "genre": "Comedy|Horror",
  "duration": 58,
  "featured_video": "17zxjmSmjWgVcc8N8ueN9y2GamPzh3zpi4",
  "dream_images": "http://dummyimage.com/142x149.bmp/ff4444/ffffff",
  "keywords": "artificial intelligence"
}, {
  "dream_id": 4,
  "title": "Turtle's Tale: Sammy's Adventures, A",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "price": 14,
  "genre": "Adventure|Animation",
  "duration": 99,
  "featured_video": "1DkgsaJApYCFVitDd8hpWRRqvVDNdL5FRY",
  "dream_images": "http://dummyimage.com/179x180.png/5fa2dd/ffffff",
  "keywords": "knowledge user"
}, {
  "dream_id": 5,
  "title": "Robin Hood",
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "price": 83,
  "genre": "Adventure|Animation|Children|Comedy|Musical",
  "duration": 5,
  "featured_video": "1AD8okqAUhXn35G2ViksBVhuEehsdM46RH",
  "dream_images": "http://dummyimage.com/179x223.png/ff4444/ffffff",
  "keywords": "encompassing"
}]

let newId = 6;


//~~~~ GET ALL DREAMS ~~~~//
export const getDreamsFromDB = () => new Promise((resolve, reject) => {
  resolve(dreams_db.slice())
})

//~~~~ ADD NEW DREAMS ~~~~//
export const addDreamsFromDB = (dream) => new Promise((resolve, reject) => {
  dream.dream_id = newId;
  newId++;
  dreams_db.push(dream);
  resolve(dreams_db)
})

//~~~~ DELETE DREAMS ~~~~//
export const deleteDreamsFromDB = (id) => new Promise((resolve, reject) => {
  const dreamIndex = dreams_db.findIndex(dream => dream.dream_id === id)

  if (dreamIndex === -1) {
    reject({ status: 500, message: 'Dream doesnt exist!' })
  } else {
    dreams_db = dreams_db.filter(dream => {
      return dream.dream_id !== id;
    })
    resolve({ status: 'Delted' })
  }
})

export default dreams_db;


