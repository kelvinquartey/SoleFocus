import {calculateCartQuantity } from "../data/cart.js";
updateCartQuantityAtTop()

// Detailed Sneaker Blog Posts
const blogPosts = [
    {
        title: "Top 10 Sneakers of 2025",
        excerpt: "From futuristic designs to nostalgic retro drops, 2025 has been a wild year for sneakerheads. In this list, we break down the ten sneakers making waves in the community — from performance basketball shoes to street-ready lifestyle kicks.",
        image: "assets/images/blogpost/trending-sneakers.jpg",
        link: "#"
    },
    {
        title: "How to Spot Fake Sneakers",
        excerpt: "The counterfeit sneaker market is booming — and it’s more important than ever to know the difference between real and fake. We share pro tips on checking stitching, box labels, and subtle design details that counterfeiters often miss.",
        image: "assets/images/blogpost/fake-sneakers.jpg",
        link: "#"
    },
    {
        title: "Sneaker Care 101",
        excerpt: "Keeping your sneakers looking fresh isn’t just about aesthetics — it’s about preserving their value. Learn the right cleaning products, storage techniques, and preventative care to extend the life of your kicks.",
        image: "assets/images/blogpost/sneaker-care.jpg",
        link: "#"
    },
    {
        title: "The History of Air Jordans",
        excerpt: "Since 1985, the Air Jordan line has shaped sneaker culture, basketball history, and streetwear fashion. In this deep dive, we explore the origin story, legendary designs, and the cultural influence of MJ’s iconic footwear.",
        image: "assets/images/blogpost/air-jordans.jpg",
        link: "#"
    },
    {
        title: "5 Upcoming Sneaker Drops to Watch",
        excerpt: "Mark your calendars — these upcoming releases are set to sell out in minutes. From limited-edition collaborations to innovative tech upgrades, here are the sneaker drops you can’t afford to miss this season.",
        image: "assets/images/blogpost/future-releases.jpg",
        link: "#"
    },
    {
        title: "Yeezy: The Rise, Fall, and What’s Next",
        excerpt: "Once dominating resale markets, Yeezy has faced major shifts in recent years. We look at Kanye’s journey, the brand’s highs and lows, and what the future might hold for this once unstoppable sneaker empire.",
        image: "assets/images/blogpost/yeezy.jpg",
        link: "#"
    }
];

// Render blog posts
const blogContainer = document.getElementById("blog-container");

blogPosts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("blog-card");

    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="content">
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <a href="${post.link}" class="read-more">Read More →</a>
        </div>
    `;

    blogContainer.appendChild(card);
});


function updateCartQuantityAtTop(){
  const cartQuantity = calculateCartQuantity();

  document.querySelector('.js-cart-quantity')
    .innerHTML = `${cartQuantity}`;
}