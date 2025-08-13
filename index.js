import express from "express";
import bodyParser from "body-parser";
import GetBlogArticles from "./blogarticles.js";
import GetRegisteredUsers from "./users.js";

const app = express();
const port = 3000;

var registeredUsers = GetRegisteredUsers();
var blogArticles = GetBlogArticles();

var userSignedIn = false;
var userName = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

function userLogin(email, password) {
  if (email && password) {
    var userAccount = registeredUsers.find(user => user.email === email);
    if (userAccount) {
      if(password === userAccount.password) {
        userSignedIn = true
        userName = userAccount.userName;
      }
    }
  }
}

function addSignUp(email, name, password) {
  if (email && name && password) {
    var userAccount = registeredUsers.find(user => user.email === email);
    if (userAccount) {
      return true;
    } else {
      registeredUsers.push({
        email: email,
        userName: name,
        password: password
      });
      return false;
    }
  }
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    signedIn: userSignedIn,
    name: userName
  });
});

app.get("/login", (req, res) => {
  if (userSignedIn) {
    res.redirect("/");
  } else {
    res.render("login.ejs", {
      signedIn: userSignedIn,
      invalidLogin: false
    });
  }
});

app.post("/login", (req, res) => {
  const email = req.body["emailAddress"];
  const password = req.body["password"];
  userLogin(email, password);
  if (userSignedIn) {
    res.redirect("/");
  } else {
    res.render("login.ejs", {
      signedIn: userSignedIn,
      invalidLogin: true
    });
  }
});

app.get("/signout", (req, res) => {
  userSignedIn = false;
  userName = "";
  res.redirect("/");
});

app.get("/signup", (req, res) => {
  if (userSignedIn) {
    res.redirect("/");
  } else {
    res.render("signup.ejs", {
      signedIn: false,
      invalidEmail: false,
      invalidName: false,
      invalidPassword: false,
      emailTaken: false
    })
  }
});

app.post("/signup", (req, res) => {
  const email = req.body["emailAddress"];
  const name = req.body["userName"];
  const password = req.body["password"];
  var validEmail = (email) ? true : false;
  var validName = (name) ? true : false;
  var validPassword = (password) ? true : false;
  var isEmailTaken = addSignUp(email, name, password);
  if (validEmail && validName && validPassword && !isEmailTaken) {
    userSignedIn = true;
    userName = name;
    res.redirect("/");
  } else {
    res.render("signup.ejs", {
      signedIn: false,
      invalidEmail: !validEmail,
      invalidName: !validName,
      invalidPassword: !validPassword,
      emailTaken: isEmailTaken
    });
  }
});

app.get("/blog", (req, res) => {
  const recentArticles = blogArticles.slice(-3);
  const firstBlogDate = new Date(blogArticles[0].date);
  var firstTitle = firstBlogDate.toLocaleString("en-US", {month: "long"}) + " " + firstBlogDate.toLocaleDateString("en-US", {year: "numeric"});
  var accordianObject = [{
    title: firstTitle,
    articles: []
  }];

  blogArticles.forEach(article => {
    var currentBlogDate = new Date(article.date);
    var currentTitle = currentBlogDate.toLocaleString("en-US", {month: "long"}) + " " + currentBlogDate.toLocaleDateString("en-US", {year: "numeric"});
    var currentIndex = accordianObject.length - 1;
    if (currentTitle !== accordianObject[currentIndex].title) {
      accordianObject.push({
        title: currentTitle,
        articles: []
      });
      currentIndex++;
    }

    accordianObject[currentIndex].articles.push({
      title: article.title,
      id: article.id
    });
  });

  res.render("blog.ejs", {
    signedIn: userSignedIn,
    name: userName,
    featuredArticle: blogArticles[0],
    featuredArticleImage: "/images/article-img-1.png",
    accordianData: accordianObject,
    recentArticles: recentArticles
  });
});

app.get("/blog/:id", (req, res) => {
  const blogId = Number(req.params.id);

  if (blogId) {
    const article = blogArticles.find(article => article.id === blogId);
    if (article) {
      res.render("blogarticle.ejs", {
        signedIn: userSignedIn,
        name: userName,
        blogId: blogId,
        blogTitle: article.title,
        blogDate: article.date,
        blogAuthor: article.author,
        blogContent: article.content,
        blogComments: article.comments
      });
    } else {
      console.log("Article not found with id " + blogId);
    }
  } else {
    res.render("blog.ejs", {
      signedIn: userSignedIn,
      name: userName,
    });
  }
});

app.get("/createpost", (req, res) => {
  if (userSignedIn) {
    res.render("createpost.ejs", {
      signedIn: true,
      name: userName
    });
  } else {
    res.redirect("/login");
  }
});

app.post("/createpost", (req, res) => {
  if (userSignedIn) {
    const articleTitle = req.body["title"];
    const articleContent = req.body["content"];
    var newArticlePost = {
      id: blogArticles.length + 1,
      title: articleTitle,
      author: userName,
      date: new Date().toLocaleDateString("en-US"),
      content: articleContent,
      comments: []
    };
    blogArticles.push(newArticlePost);
    res.redirect("/blog/" + newArticlePost.id);
  } else {
    res.redirect("/login");
  }
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const user = registeredUsers.find(u => u.userName = userId);
  const userPosts = blogArticles.filter(article => article.author === userId);
  if (user) {
    res.render("user.ejs", {
      signedIn: userSignedIn,
      name: userName,
      userRecord: user,
      userPosts: userPosts
    });
  } else {
    res.redirect("/");
  }
});

app.post("/addcomment", (req, res) => {
  const blogId = Number(req.body["blogId"]);

  if (blogId && userSignedIn) {
    const userComment = req.body["comment"];
    const blogIndex = blogArticles.findIndex(article => article.id === blogId);
    if (blogIndex !== -1) {
      blogArticles[blogIndex].comments.push({
        name: userName,
        date: new Date().toLocaleDateString("en-US"),
        comment: userComment
      });
    }
    res.redirect("/blog/" + blogId);
  } else {
    console.log("Blog ID: " + blogId);
    console.log("User signed in: " + userSignedIn);
    res.redirect("/blog");
  }
});

app.get("/about", (req, res) => {
  res.render("about.ejs", {
    signedIn: userSignedIn,
    name: userName
  });
});

app.get("/popular-dogs", (req, res) => {
  res.render("populardogs.ejs", {
    signedIn: userSignedIn,
    name: userName
  });
});

app.get("/pet-resources", (req, res) => {
  res.render("petresources.ejs", {
    signedIn: userSignedIn,
    name: userName
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});