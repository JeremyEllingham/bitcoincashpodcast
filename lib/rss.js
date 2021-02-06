// import { Feed } from "feed";
// const fs = require('fs');

// const baseUrl = "https://www.bitcoincashpodcast.com";
// const date = new Date();


// const generateRssFeed = async () => {
//   const feed = new Feed({
//     title: `The Bitcoin Cash Podcast`,
//     description: "Following Bitcoin Cash on its rise to global reserve currency.",
//     id: baseUrl,
//     link: baseUrl,
//     language: "en",
//     image: `${baseUrl}/images/banner.png`,
//     favicon: `${baseUrl}/bch.ico`,
//     copyright: `All rights reserved ${date.getFullYear()}, Jeremy`,
//     updated: date,
//     generator: "Next.js using Feed for Node.js",
//     feedLinks: {
//       rss2: `${baseUrl}/rss/feed.xml`,
//       json: `${baseUrl}/rss/feed.json`,
//       atom: `${baseUrl}/rss/atom.xml`,
//     },
//     author,
//   });

//   const url = `${baseUrl}/episode1`
//   const author = {
//     name: "Jeremy",
//   };

//   feed.addItem({
//     title: 'test item',
//     id: url,
//     link: url,
//     description: 'episode 1',
//     content: 'episode 1 content',
//     author: [author],
//     contributor: [author],
//     date: new Date(post.rawDate),
//   })

//   fs.mkdirSync("./public/rss", { recursive: true });
//   fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
//   fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
//   fs.writeFileSync("./public/rss/feed.json", feed.json1());
// }

// export default generateRssFeed

import { Feed } from "feed";

const feed = new Feed({
  title: "Feed Title",
  description: "This is my personal feed!",
  id: "http://example.com/",
  link: "http://example.com/",
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: "http://example.com/image.png",
  favicon: "http://example.com/favicon.ico",
  copyright: "All rights reserved 2013, John Doe",
  updated: new Date(2013, 6, 14), // optional, default = today
  generator: "awesome", // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: "https://example.com/json",
    atom: "https://example.com/atom"
  },
  author: {
    name: "John Doe",
    email: "johndoe@example.com",
    link: "https://example.com/johndoe"
  }
});

const posts = [
  {
    title: 'first title',
    url: 'myurl.com',
    description: 'description 1',
    content: 'content here',
    date: new Date()
  }
]

const generateRssFeed = async () => {
  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content,
      author: [
        {
          name: "Jeremy",
        },
      ],
      contributor: [],
      date: post.date,
      // image: post.image
    });
  });

  console.log(feed.rss2());
  // Output: RSS 2.0

  console.log(feed.atom1());
  // Output: Atom 1.0

  console.log(feed.json1());
  // Output: JSON Feed 1.0
}

export default generateRssFeed