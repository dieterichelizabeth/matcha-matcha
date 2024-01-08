const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");

// Stripe test key for development from Stripe documentation
// DO NOT INPUT SENSATIVE INFORMATION WITH THIS PUBLIC KEY
const stripe = require("stripe")(
  "sk_test_51NjrI7DSKGaJZlGBYTXttrAUQ1E953Mf7X3k3OuDlQ7mhF5aOKmACHaSy1RTqM8nxEpsQrEZJG2jjYyUT66qFjU400MSJv2hul"
);

const resolvers = {
  Query: {
    DyIaZB3jO1X5ZL: async () => {
      await Category.deleteMany();

      const categories = await Category.insertMany([
        {
          _id: "657585be8737d1d8cda94f69",
          name: "Best Sellers",
          image: "best-sellers.jpg",
        },
        {
          _id: "657585be8737d1d8cda94f6a",
          name: "Bright Light",
          image: "bright-light.jpg",
        },
        {
          _id: "657585be8737d1d8cda94f6b",
          name: "Low Maintanence",
          image: "low-maintanence.jpg",
        },
        {
          _id: "657585be8737d1d8cda94f6c",
          name: "Pet Friendly",
          image: "pet-friendly.jpg",
        },
      ]);

      console.log("categories seeded");

      await Product.deleteMany();

      const products = await Product.insertMany([
        {
          name: "Rubber Fig || Ficus elastica",
          description:
            "The Ficus Elastica is known for its thick, glossy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Rubber tree plenty of bright indirect light to help it retain its dramatic foliage.",
          image: "feey-17UXXzGF7RA-unsplash.jpg",
          price: 22.99,
          quantity: 500,
          category: categories[1]._id,
          details:
            "Difficulty: Moderate, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water every 1-2 weeks allowing soil to dry out between waterings. Expect to water more often in brighter light conditions and less often in lower light.",
        },
        {
          name: "Satin Pothos || Scindapsus pictus",
          description:
            "The Scindapsus pictus 'exotica', commonly referred to as Satin Pothos is a species of Aroid that is prized for its heart-shaped leaves adorned with silvery splotches. This low-maintenance houseplant is perfect as a hanging plant but can be trained vertically since it's an evergreen climber!",
          image: "feey-SVRKkENpalg-unsplash.jpg",
          category: categories[0]._id,
          price: 21.49,
          quantity: 700,
          details:
            "Difficulty: No Fuss, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. The Pothos can be easily propagated in water, just make sure to include a node or multiple on your cuttings.",
        },
        {
          name: "ZZ Plant || Zamioculcas zamiifolia",
          description:
            "The ZZ Plant is characterized by its waxy green leaves above the surface of its potting mix, and its large potato-like rhizomes underneath. These rhizomes store water, making the ZZ a drought-tolerant plant that can go weeks without water. Sized to ship best, our large ZZ arrives with room to grow as it adapts to your home’s conditions, ",
          image: "feey-cLaaxa4DSnc-unsplash.jpg",
          category: categories[0]._id,
          price: 42.99,
          quantity: 225,
          details: "Difficulty: No Fuss, Light: Low/Artificial, Air Cleaner",
          benefits: "",
          care: "Water every 2-3 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. You might spot large potato-like rhizomes under the surface of the ZZ Plant's soil. These store water to help the plant survive drought in its native habitat.",
        },
        {
          name: "Jade Pothos || Epipremnum aureum",
          description:
            "A naturally occurring mutation of the original golden pothos, it features particularly thick, dark, shiny green leaves and sturdy stems and is extra drought resistant. These tough vining plants look great on shelves or hanging baskets and adapt to various light conditions.",
          image: "kevin-lessy-aKqw_M1CmfI-unsplash.jpg",
          category: categories[0]._id,
          price: 5.99,
          quantity: 300,
          details:
            "Difficulty: No Fuss, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. The Pothos can be easily propagated in water, just make sure to include a node or multiple on your cuttings.",
        },
        {
          name: "Coin Plant || Pilea peperomioides",
          description:
            "Pilea are known for their bright green, coin-shaped leaves. They grow well in dry conditions, can adapt to low light areas, and are fast-growing, making them low-maintenance and great for beginner plant owners. A healthy and happy Pilea will sprout tiny “pups” that you can propagate and add to your plant collection or share with friends!",
          image: "feey-qoegZJ3ybOY-unsplash.jpg",
          category: categories[2]._id,
          price: 55.49,
          quantity: 200,
          details:
            "Difficulty: Low Maintenance, Light: Partial/Bright Indirect, Pet Friendly",
          benefits: "",
          care: "Water your Pilea when the top 75% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer.",
        },
        {
          name: "Ecuado Philodendron || Philodendron verrucusom",
          description:
            "Known for its striking, heart-shaped leaves and eye-catching color, the philodendron verrucosum makes a lovely addition to any houseplant collection. It's also known as Ecuador philodendron and has a vining growth habit. The large leaves are a deep, velvety green color, accented by light green veins and a burgundy underside. Occasionally, this variety of philodendron will produce white and pink blooms in the summer.",
          image: "feey-IjVvZCY2qmU-unsplash.jpg",
          category: categories[0]._id,
          price: 45.99,
          quantity: 100,
          details:
            "Difficulty: No Fuss, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water your Philodendron when the top 50-75% of soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer.",
        },
        {
          name: "Peacock plant || Calathea Makoyana",
          description:
            "Originally from Brazil this plant is a popular choice around the world for a house plant mainly because it makes a lovely addition to any home due to its beautiful foliage and bold markings. The Peacock plant has all the elegance and beauty of a Peacock’s tail, which is why it has been given its rather glorious name. The leaves are pale green with a dark green feathered effect from the middle of the leaf to the outer edges.",
          image: "feey-rGdSwVibhiQ-unsplash.jpg",
          category: categories[3]._id,
          price: 27.49,
          quantity: 200,
          details:
            "Difficulty: Moderate, Light: Partial/Bright Indirect, Air Cleaner, Pet Friendly",
          benefits: "",
          care: "Water your calathea when 25% of the soil volume is dry. Water thoroughly and discard excess water from the saucer. For best results, use a general houseplant fertilizer with iron every four weeks during the spring and summer. No fertilizer is necessary for the winter when plant growth naturally slows.",
        },
        {
          name: "Mini Monstera || Monstera Minima",
          description:
            "Named for their resemblance to the magnificent Monstera deliciosa, the mini monstera is actually not a monstera but a part of an independent genus, Rhaphidophora. This genus, which contains approximately 100 different species originates from tropical regions in Africa and Asia and is a part of the Araceae family, making Rhaphidophora plants distantly related to those in the Monstera genus. Similar to its Monstera relatives, the mini monstera makes an excellent houseplant.",
          image: "feey-RHe-ebrSUTE-unsplash.jpg",
          category: categories[0]._id,
          price: 32.95,
          quantity: 100,
          details:
            "Difficulty: No Fuss, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water your Monstera when the top 50–75% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer. Large leaves can collect dust. If you notice the leaves are dirty or dusty, wipe the leaves with Microfiber Dusting Gloves to keep them clean and healthy.",
        },
        {
          name: "Variegated Monstera || Monstera deliciosa variegata",
          description:
            "Nicknamed the “swiss cheese plant”, the quirky Monstera deliciosa is famous for its natural leaf holes. These holes are theorized to maximize sun fleck capture and develop over time as the plant matures. Sized to ship best, our large Monstera arrives with room to grow as it adapts to your home’s conditions.",
          image: "feey-zTAcTi7D5i8-unsplash.jpg",
          category: categories[0]._id,
          price: 18.99,
          quantity: 300,
          details:
            "Difficulty: No Fuss, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water your Monstera when the top 50–75% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer. Large leaves can collect dust. If you notice the leaves are dirty or dusty, wipe the leaves with Microfiber Dusting Gloves to keep them clean and healthy.",
        },
        {
          name: "Rattlesnake Plant || Calathea lancifolia",
          description:
            "Rattlesnake plant (Goeppertia insignis) is a tropical evergreen perennial native to Brazil, commonly grown as an indoor houseplant. It can be tricky to nurture, but if you give it the care it needs, you will be rewarded with an impressive display from the distinctive foliage with a wavy pattern along the edges and variegated with shades of greens. Even the undersides of the foliage are eye-catching with their beautiful purplish-red tones.",
          image: "feey-8nONCr6eTeg-unsplash.jpg",
          category: categories[3]._id,
          price: 35.99,
          quantity: 450,
          details:
            "Difficulty: Moderate, Light: Partial/Bright Indirect, Air Cleaner, Pet Friendly",
          benefits: "",
          care: "Water your calathea when 25% of the soil volume is dry. Water thoroughly and discard excess water from the saucer. For best results, use a general houseplant fertilizer with iron every four weeks during the spring and summer. No fertilizer is necessary for the winter when plant growth naturally slows.",
        },
        {
          name: "Jungle Velvet || Calathea warscewiczii",
          description:
            "Calathea warscewiczii is a rare type of calathea known for its soft, velvety leaves. As a houseplant, it grows best with moist, well-drained soil and bright, indirect light. Calathea warscewiczii's foliage has light green veins and ribs over deep green, with burgundy or purple undersides. This tropical plant is native to the jungles of Central America, but it's often kept indoors in cooler climates.",
          image: "feey-IV0zYTvbyEw-unsplash.jpg",
          category: categories[3]._id,
          price: 23.49,
          quantity: 100,
          details:
            "Difficulty: Moderate, Light: Partial/Bright Indirect, Air Cleaner, Pet Friendly",
          benefits: "",
          care: "Water your calathea when 25% of the soil volume is dry. Water thoroughly and discard excess water from the saucer. For best results, use a general houseplant fertilizer with iron every four weeks during the spring and summer. No fertilizer is necessary for the winter when plant growth naturally slows.",
        },
        {
          name: "Fiddle-leaf Fig || Ficus lyrata",
          description:
            "The Fiddle Leaf Fig (Ficus lyrata), is famous for its broad green leaves with prominent veining. These plants are sometimes described as 'fickle,' but they thrive in stable environment with consistent temperatures. Keep it in bright light, and water about once every 1 to 2 weeks. This medium size plant measures up to 12' from the top of the soil, making it perfect for table tops or on a plant stand. ",
          image: "feey-TNTZ9XRisjQ-unsplash.jpg",
          category: categories[2]._id,
          price: 23.49,
          quantity: 30,
          details:
            "Difficulty: Low Maintenance, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.",
        },
        {
          name: "Arrowhead Plant || Syngonium podophyllum batik",
          description:
            "Native to Central and South America and known for their unique arrow-like leaf shape, Arrowhead plants are easy to grow and do well in low to medium light. As Arrowhead plants mature, they develop a climbing habit, making them great for trellises or other climbing structures. They can also be kept as a hanging vine, or pruned for a bushier appearance.",
          image: "feey-p9iWL601vts-unsplash.jpg",
          category: categories[1]._id,
          price: 23.49,
          quantity: 300,
          details: "Difficulty: Moderate, Light: Direct Sunlight, Air Cleaner",
          benefits: "",
          care: "Water when 50%-75% of the soil volume is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer.",
        },
        {
          name: "Baby Elephant Ear || Caladium pliage",
          description:
            "Caladium bicolor 'Pliage' is a cultivar of Caladium bicolor (Aiton) Vent. Commonly called caladium or angel wings, Caladiums are arum family members that are grown exclusively for their bold and colorful foliage. Calla-type flowers, if present, are usually hidden. Plants typically grow in clumps to 75cm tall. Arrowhead-shaped leaves  are various shades of green mottled and blotched with pink, red, white or combinations thereof often with distinctively colored veins.",
          image: "feey-KhOAVGhHvu4-unsplash.jpg",
          category: categories[0]._id,
          price: 45.99,
          quantity: 70,
          details:
            "Difficulty: Moderate, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water your caladium when the top 25% of soil is dry. Water thoroughly, and be sure to empty the saucer of any excess water to prevent root rot. When the plant goes dormant in the winter, water very sparingly to allow the plant to rest. Begin watering again in the spring to “wake” the plant out of dormancy.",
        },
        {
          name: "Angel Wings || Caladium 'Aaron'",
          description:
            "Aaron caladium is a well known caladium that has been a staple in many gardens. This caladium features a bright white center with green margins and can tolerate full sun.",
          image: "feey-KUwelsNPFiA-unsplash.jpg",
          category: categories[1]._id,
          price: 23.49,
          quantity: 20,
          details: "Difficulty: Moderate, Light: Direct Sunlight, Air Cleaner",
          benefits: "",
          care: "Water your caladium when the top 25% of soil is dry. Water thoroughly, and be sure to empty the saucer of any excess water to prevent root rot. When the plant goes dormant in the winter, water very sparingly to allow the plant to rest. Begin watering again in the spring to “wake” the plant out of dormancy.",
        },
        {
          name: "Heartleaf philodendron || Philodendron Brasil",
          description:
            "The Philodendron Heartleaf is a fast-growing, easy, vining plant. Its glossy, heart-shaped leaves trail gracefully on long stems and thrive in low to bright light. Native to Africa and the Canary Islands, the Heartleaf can be grown as a trailer or climber. This full, trailing plant is perfect on top of bookshelves or in a plant hanger where its vines can ‘spill’ out. The Philodendron Heartleaf is incredibly forgiving and will tolerate all kinds of neglect including low light, poor soil, and inconsistent watering. This is a great first-time houseplant or gift for anyone who wants to enjoy the natural beauty of plants without a lot of maintenance.",
          image: "feey-Iz5uKInLB-A-unsplash.jpg",
          category: categories[0]._id,
          price: 25.99,
          quantity: 40,
          details:
            "Difficulty: No Fuss, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water your Philodendron when the top 50%-75% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer.",
        },
        {
          name: "Birkin || Philodendron birkin",
          description:
            "Philodendrons are fast-growing, easy plants. They range in growth pattern from graceful and vining to bold and bushy. Philodendrons are generally forgiving and will tolerate all kinds of neglect including low light, poor soil, and inconsistent watering.",
          image: "feey-WlZQb4bt8r8-unsplash.jpg",
          category: categories[0]._id,
          price: 7.99,
          quantity: 30,
          details:
            "Difficulty: No Fuss, Light: Partial/Bright Indirect, Air Cleaner",
          benefits: "",
          care: "Water your Philodendron when the top 50-75% of soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer.",
        },
        {
          name: "Silver Queen || Agalonema 'Amazon Silver'",
          description:
            "The Aglaonema Silver Bay is one of the most well-known houseplants thanks to its striking green foliage and easy-going nature. Its large leaves are detailed with an icy green center flowing into dark and light green striped edges, retaining their color and pattern in even the lowest lighting conditions. These plants make the perfect housewarming gift as they are easy to care for and need only occasional watering.",
          image: "feey-03DNIGerA_k-unsplash.jpg",
          category: categories[0]._id,
          price: 7.99,
          quantity: 30,
          details: "Difficulty: No Fuss, Light: Low/Artificial, Air Cleaner",
          benefits: "",
          care: "Water once a week will suffice. It is important not to over water this plant and make sure the soil has somewhat dried out before you water it again. You should always scratch the surface of the soil with your fingers to test if the soil has dried out.",
        },
        {
          name: "String of Hearts || Ceropegia",
          description:
            "String of hearts plant (Ceropegia woodii) is a unique and attractive houseplant with evergreen, succulent, trailing vines that look good in hanging baskets or pots on shelves or window sills. The plant care is easy, especially during the warmer months. It is long-lived and fast-growing, and the sprawling vines can cascade up to 12 feet once they are mature. It goes dormant in cooler weather, slowing down its growth.",
          image: "feey-sz9dZIUfRJs-unsplash.jpg",
          category: categories[2]._id,
          price: 35.99,
          quantity: 20,
          details:
            "Difficulty: Low Maintenance, Light: Partial/Bright Indirect, Air Cleaner, Pet Friendly",
          benefits: "",
          care: "Although the string of hearts is drought-tolerant, it does like more frequent watering than many other succulent species. Too much water can result in swollen foliage, leaf drop, and the growth habit can become messy. Let the soil dry between waterings, and then provide a deep watering.",
        },
        {
          name: "White Fusion || Calathea lietzei",
          description:
            "The variegated foliage of the calathea 'White Fusion' cultivar features a green leaf with contrasting white markings. The underside has a magenta hue that runs down the stems. Although their care can be a little more particular than some houseplants, once you get it right, you will be rewarded with an eye-catching display of foliage that grows profusely and quickly.",
          image: "feey-3frihNsWLPo-unsplash.jpg",
          category: categories[3]._id,
          price: 55.99,
          quantity: 300,
          details:
            "Difficulty: Moderate, Light: Partial/Bright Indirect, Air Cleaner, Pet Friendly",
          benefits: "",
          care: "Water your calathea when 25% of the soil volume is dry. Water thoroughly and discard excess water from the saucer. For best results, use a general houseplant fertilizer with iron every four weeks during the spring and summer. No fertilizer is necessary for the winter when plant growth naturally slows.",
        },
      ]);

      console.log("products seeded");

      await User.deleteMany();

      await User.create({
        firstName: "Steph",
        lastName: "Spring",
        email: "Steph@test.com",
        password: "password567879",
        orders: [
          {
            products: [products[0]._id, products[0]._id, products[1]._id],
          },
          {
            products: [products[1]._id, products[2]._id, products[3]._id],
          },
          {
            products: [products[1]._id, products[1]._id],
          },
        ],
      });

      await User.create({
        firstName: "Ben",
        lastName: "Bolt",
        email: "bbolt@test.com",
        password: "password101112",
      });

      console.log("users seeded");

      return await Category.find();
    },
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    // expects an array of product ID's
    checkout: async (parent, args, context) => {
      // parse out the referring URL, for a base domain that the request came from
      // use this url for redirect on success back to shop-shop's success page
      const url = new URL(context.headers.referer).origin;

      // Create a new instance of an Order Mongoose modle
      const order = new Order({ products: args.products });

      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        // generate product id
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          // images: [`${url}/assets/small/${products[i].image}`],
        });

        // generate price id using the product id
        // multiply by 100 because Stripe stores prices in cents, not dollars
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      // generate a Stripe checkout session and return the session.id
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in!");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
