import { Feed } from "feed";

const generateRssFeed = async () => {
  const feed = new Feed({
    title: "The Bitcoin Cash Podcast",
    description: "Following Bitcoin Cash on its rise to global reserve currency.",
    id: "https://www.bitcoincashpodcast.com",
    link: "https://www.bitcoincashpodcast.com",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "https://www.bitcoincashpodcast.com/banner.png",
    favicon: "https://www.bitcoincashpodcast.com/bch.ico",
    copyright: "All rights reserved 2021, Jeremy",
    updated: new Date(), // optional, default = today
    feedLinks: {
      json: "https://www.bitcoincashpodcast.com/feed.json",
      atom: "https://www.bitcoincashpodcast.com/atom.xml"
    },
    author: {
      name: "Jeremy",
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

  return {
    rss: feed.rss2(),
    atom: feed.atom1(),
    json: feed.json1(),
  }
}

export default generateRssFeed