
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dreams').del()
    .then(function () {
      // Inserts seed entries
      return knex('dreams').insert([
        {
          title: 'Carnival with a Girl',
          description: 'The carnival of your dreams.',
          price: 80,
          genre: 'Adventure',
          duration: '0h 30m 00s',
          featured_video: 'https://player.vimeo.com/video/123504120',
          dream_images: 'https://preview.ibb.co/hNgDuf/Carnival-With-A-Girl.jpg',
          store_id: 1,
          user_id: 1
        },
        {
          title: 'Beautiful Memory',
          description: 'Memory lorem ipsum Ut sit amet quam id felis iaculis imperdiet',
          price: 220,
          genre: 'Nostalgia',
          duration: '1h 00m 00s',
          featured_video: 'https://player.vimeo.com/video/173395141',
          dream_images: 'https://image.ibb.co/bvBP0L/Memory-Of-A-Woman.jpg',
          store_id: 1,
          user_id: 1
        },
        {
          title: 'Party at the Club',
          description: 'A night out at ginza, not the best, but also not the worst.',
          price: 90,
          genre: 'Party',
          duration: '0h 45m 30s',
          featured_video: 'https://player.vimeo.com/video/189415767',
          dream_images: 'https://image.ibb.co/hc1eZf/Party-At-The-Club.jpg',
          store_id: 1,
          user_id: 1
        },
        {
          title: 'Mountain Skiing with Friends',
          description: 'lorem ipsum Ut sit amet quam id felis iaculis imperdiet',
          price: 300,
          genre: 'Adventure',
          duration: '1h 00m 00s',
          featured_video: 'https://player.vimeo.com/video/189545864',
          dream_images: 'https://image.ibb.co/fv9Yuf/Mountain-Skiing-With-Friends.jpg',
          store_id: 1,
          user_id: 1
        },
        {
          title: 'Fireworks with Family',
          description: 'Beautiful night sky lit up oh so colorfully',
          price: 230,
          genre: 'Nostalgia',
          duration: '1h 00m 00s',
          featured_video: 'https://player.vimeo.com/video/123503649',
          dream_images: 'https://image.ibb.co/kNEYuf/Fireworks-with-family.jpg',
          store_id: 1,
          user_id: 1
        },
        {
          title: 'Rock concert in the city',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 70,
          genre: 'Party',
          duration: '0h 30m 00s',
          featured_video: 'https://player.vimeo.com/video/123503649',
          dream_images: 'https://image.ibb.co/ckMeZf/Rock-concert-in-the-city.jpg',
          store_id: 2,
          user_id: 2
        },
        {
          title: 'Portland riots',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 90,
          genre: 'Adventure',
          duration: '0h 20m 05s',
          featured_video: 'https://player.vimeo.com/video/180179827',
          dream_images: 'https://image.ibb.co/kMYtuf/Portland-riots.jpg',
          store_id: 2,
          user_id: 2
        },
        {
          title: 'Color run',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 70,
          genre: 'Nostalgia',
          duration: '45h 20m 05s',
          featured_video: 'https://player.vimeo.com/video/123498694',
          dream_images: 'https://image.ibb.co/bRzcLL/Color-Run.jpg',
          store_id: 2,
          user_id: 2
        },
        {
          title: 'Memories at the playground',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 300,
          genre: 'Nostalgia',
          duration: '1h 20m 05s',
          featured_video: 'https://player.vimeo.com/video/253680263',
          dream_images: 'https://image.ibb.co/gQRDuf/Memories-at-the-playground.jpg',
          store_id: 2,
          user_id: 2
        },
        {
          title: 'Running your vinyard',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 250,
          genre: 'Hopeful',
          duration: '1h 20m 05s',
          featured_video: 'https://player.vimeo.com/video/185228928',
          dream_images: 'https://image.ibb.co/dKYREf/Running-your-vinyard.jpg',
          store_id: 3,
          user_id: 3
        },
        {
          title: 'Memories of home',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 120,
          genre: 'Nostalgia',
          duration: '0h 45m 05s',
          featured_video: 'https://player.vimeo.com/video/190326336',
          dream_images: 'https://image.ibb.co/iVfv70/Memories-of-home.jpg',
          store_id: 3,
          user_id: 3
        },
        {
          title: 'Visiting the ocean',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 90,
          genre: 'Hopeful',
          duration: '0h 30m 05s',
          featured_video: 'https://player.vimeo.com/video/274197648',
          dream_images: 'https://image.ibb.co/fAuoS0/Visiting-the-ocean.jpg',
          store_id: 3,
          user_id: 3
        },
        {
          title: 'Walking through the woods',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 100,
          genre: 'Peaceful',
          duration: '1h 45m 05s',
          featured_video: 'https://player.vimeo.com/video/207562179',
          dream_images: 'https://image.ibb.co/kgjoS0/Walking-through-the-woods.jpg',
          store_id: 3,
          user_id: 3
        },
        {
          title: 'Eating outside in the spring',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 290,
          genre: 'Peaceful',
          duration: '1h 30m 05s',
          featured_video: 'https://player.vimeo.com/video/185227946',
          dream_images: 'https://image.ibb.co/fja6Ef/Eating-outside-in-the-spring.jpg',
          store_id: 4,
          user_id: 4
        },
        {
          title: 'Opening a bakery',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 160,
          genre: 'Hopeful',
          duration: '2h 45m 05s',
          featured_video: 'https://player.vimeo.com/video/189415885',
          dream_images: 'https://image.ibb.co/kCHKZf/Opening-a-bakery.jpg',
          store_id: 4,
          user_id: 4
        },
        {
          title: 'Foodie vacation',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 320,
          genre: 'Peaceful',
          duration: '1h 20m 25s',
          featured_video: 'https://player.vimeo.com/video/189416575',
          dream_images: 'https://image.ibb.co/b1aTS0/Foodie-vacation.jpg',
          store_id: 4,
          user_id: 4
        },
        {
          title: 'Relaxing on the beach',
          description: 'Ut sit amet quam id felis iaculis imperdiet. Quisque sit amet imperdiet augue, vulputate dictum lectus',
          price: 100,
          genre: 'Peaceful',
          duration: '3h 45m 05s',
          featured_video: 'https://player.vimeo.com/video/291722534',
          dream_images: 'https://image.ibb.co/c9LTS0/Relaxing-on-the-beach.jpg',
          store_id: 1,
          user_id: 1
        }
      ]);
    });
};
