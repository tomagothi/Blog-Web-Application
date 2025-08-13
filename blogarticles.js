const blogArticles = [
  {
    id: 1,
    title: "I smelled a thing, and then I peed on it",
    author: "Justice",
    date: "7/31/2025",
    content: "The other day, I was outside enjoying my morning patrol around the backyard, when I encountered an interesting smell. Naturally, I did what any dog in my position would do. I peed on it to make it my own.",
    comments: [
      {
        name: "Snickers",
        date: "7/31/2025",
        comment: "Can confirm. I was there."
      },
      {
        name: "Potato",
        date: "8/1/2025",
        comment: "That's so cool!"
      }
    ]
  },
  {
    id: 2,
    title: "Do you ever get tired of licking your butt?",
    author: "Snickers",
    date: "8/2/2025",
    content: "My mom always yells at me to stop licking my butt. I don't think she really understands what's going on. How else am I supposed to get clean down there?",
    comments: [
      {
        name: "Snickers",
        date: "8/3/2025",
        comment: "I'm not the only one, right?"
      },
      {
        name: "Justice",
        date: "8/3/2025",
        comment: "I just scoot..."
      },
      {
        name: "anonymous",
        date: "8/3/2025",
        comment: "Don't let anyone make you feel bad for who you are!"
      }
    ]
  },
  {
    id: 3,
    title: "This is a filler article",
    author: "Lonnie",
    date: "8/2/2025",
    content: "How many of these do you expect me to make? The rest are going to be Lorem Ipsum until someone logs in and adds more articles.",
    comments: [
      {
        name: "Justice",
        date: "8/2/2025",
        comment: "Dad! Knock it off!"
      },
      {
        name: "Snickers",
        date: "8/2/2025",
        comment: "Has mom made an account here yet?"
      }
    ]
  },
  {
    id: 4,
    title: "When are you going to feed me!?",
    author: "Tiberius",
    date: "8/5/2025",
    content: "I know, I know, this is supposed to be a blog for dogs, and not everyone considers me a &quot;dog&quot;, but I don't care. I just want to know why I'm not getting fed more often!? Feed me!",
    comments: [
      {
        name: "Lonnie",
        date: "8/5/2025",
        comment: "Calm down buddy! You know your schedule. Also, why am I making more articles when I said I would start using Lorem Ipsum?"
      }
    ]
  },
  {
    id: 5,
    title: "More filler articles",
    author: "Lonnie",
    date: "8/8/2025",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      {
        name: "Justice",
        date: "8/8/2025",
        comment: "I love you daddy!"
      }
    ]
  },
  {
    id: 6,
    title: "Yet another filler articles",
    author: "Lonnie",
    date: "8/8/2025",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      {
        name: "Snickers",
        date: "8/8/2025",
        comment: "Where's mommy?"
      }
    ]
  },
  {
    id: 7,
    title: "Still need a few more filler articles",
    author: "Lonnie",
    date: "8/8/2025",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      {
        name: "Kahn",
        date: "8/8/2025",
        comment: "I can has comment post?"
      }
    ]
  },
  {
    id: 8,
    title: "Just a couple more filler articles should do",
    author: "Lonnie",
    date: "8/8/2025",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: []
  },
  {
    id: 9,
    title: "This one then one more filler",
    author: "Lonnie",
    date: "8/8/2025",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      {
        name: "Potato",
        date: "8/8/2025",
        comment: "First comment!"
      }
    ]
  },
  {
    id: 10,
    title: "Last filler article",
    author: "Lonnie",
    date: "8/8/2025",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: []
  }
];

const GetBlogArticles = () => {
  return blogArticles;
}

export default GetBlogArticles;