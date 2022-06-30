const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Face" },
    { name: "Hands" },
    { name: "Body" },
    { name: "Tea" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Revitalizing Serum",
      description:
        "Revitalizing Serum is an advanced formula that works to calm irritated skin while restoring it to its natural state. The result is smoother, softer skin that looks more radiant than ever before.",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[0]._id,
      price: 22.99,
      quantity: 500,
      ingredients:
        "Almond Oil, Sulfur, Collagen, Honey, Turmeric, Azelaic Acid, Sea Moss, Glycolic acid, Synthetic Beeswax, Talc, Salicylic Acid, Vitamin E, Vitamin C, Hyaluronic Acid, Vitamin K, Tretinoin, Seaweed, Vitamin F, Mineral Oil, Shea Butter",
      benefits:
        "Helps soothe irritated skin. Calms redness and irritation. Restores radiance. Leaves skin feeling refreshed. Reduces fine lines and wrinkles. Contains Vitamin E and Hyaluronic Acid.",
    },
    {
      name: "Healing Spot Treatment",
      description:
        "Healing Spot Treatment is an effective acne treatment cream formulated with natural ingredients such as tea tree oil, witch hazel, aloe vera, calendula, vitamin E, and more. The formula helps to reduce redness, inflammation, and irritation while providing long lasting results.",
      image:
        "https://images.unsplash.com/photo-1624095149305-70e17ef7adae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[0]._id,
      price: 42.99,
      quantity: 225,
      ingredients:
        "Azelaic Acid, Sea Salt, Niacinamide, Calendula, Glycolic acid, Talc, Collagen, Witch Hazel, Aloe Vera Azulene, Salicylic Acid, Tea Tree Oil, Vitamin C, Mineral Oil, Soybean Oil, Apple Cider Vinegar, Lactic acid, Hemp Oil, Almond Oil, Safflower Oil, Volcanic Ash, Antioxidants, Vitamin A",
      benefits:
        "Helps to reduce redness, swelling, and inflammation. Provides long lasting results. Formulated with natural ingredients. Easy to apply. Non greasy. Suitable for all skin types.",
    },
    {
      name: "Age-defying Eye Care",
      description:
        "This eye care set includes two products. The first product contains an age-defying blend of antioxidants and vitamins that helps protect the skin around the eyes from free radical damage. The second product uses retinol to help improve the appearance of fine lines and wrinkles.",
      image:
        "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[0]._id,
      price: 21.49,
      quantity: 700,
      ingredients:
        "Turmeric, Ceramides, Green Tea, Vitamin A, Vitamin C, Lutein, Zeaxanthin, Beta Carotene, Almond Oil, Lavender Oil, Niacinamide, Seaweed, Vitamin K, Mineral Oil, Aloe Vera, Azulene, Zinc, Vitamin E, Azelaic Acid, Volcanic Ash, Soybean Oil, Snail Mucin, Shea Butter, Vegetable Glycerin, Tretinoin",
      benefits:
        "Contains vitamin E, vitamin A, vitamin C, lutein, zeaxanthin, and beta carotene. Helps prevent premature aging around the eyes. Provides antioxidant benefits. Reduces the appearance of fine lines & wrinkles. Moisturizes skin around the eyes.",
    },
    {
      name: "Moisturizing Lip Balm",
      description:
        "Moisturize your lips with this lightweight and long lasting lip balm. This product contains natural ingredients like bees wax, shea butter, jojoba oil, vitamin E and aloe vera. The formula is infused with Vitamin B5 which helps maintain healthy skin.",
      image:
        "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[0]._id,
      price: 5.99,
      quantity: 300,
      ingredients:
        "Willow Bark Extract, Bees Wax, Jojoba Oil, Algae extracts, Azelaic Acid, Retinol, Sunflower Oil, Zinc, Calendula, Vitamin E, Synthetic Beeswax, Antioxidants, Talc, Turmeric, Green Tea, Seaweed, Vitamin C, Apricot Kernel Oil, Sea Moss, Rosemary, Honey, Sulfur",
      benefits:
        " Long Lasting Lip Balm. Natural Ingredients. Moisturizes Lips. Non-Greasy",
    },
    {
      name: "Radiant Repair Serum",
      description:
        "Radiant Repair Serum is an intensive treatment formulated specifically for aging skin. This serum contains powerful antioxidants and peptides which work together to improve the skin's overall appearance and texture.",
      image:
        "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      category: categories[0]._id,
      price: 55.49,
      quantity: 200,
      ingredients:
        "Willow Bark Extract, Soybean Oil, Almond Oil, Amino Acids, Vitamin E, Tamanu Oil, Hyaluronic Acid, Collagen, Honey, Antioxidants, Witch Hazel, Sunflower Oil, Volcanic Ash, Retinol, Calendula, Niacinamide, Sodium Hyaluronate, Aloe Vera, Tretinoin, Safflower Oil",
      benefits:
        "Formulated with powerful antioxidants and peptides. Helps reduce fine lines and wrinkles. Reduces the appearance of dark spots. Improves skin tone and texture. Contains Vitamin E and Vitamin B3. Paraben free. Suitable for all skin types.",
    },
    {
      name: "Matcha Moisture Serum",
      description:
        "Matcha Moisture Serums are formulated with an exclusive blend of organic matcha green tea extract, aloe vera leaf juice, and vitamin B5. The result? A powerful formula that helps your skin retain its youthful glow while reducing signs of aging.",
      image:
        "https://images.unsplash.com/photo-1638609269267-f0128098a809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[0]._id,
      price: 45.99,
      quantity: 100,
      ingredients:
        "Matcha Green Tea Extract, Charcoal, Sea Moss, Almond Oil, Lactic acid, Avocado Oil, Vitamin C, Sea Salt, Witch Hazel, Retinol, Vitamin B5, Hyaluronic Acid, Sulfates, Calendula, Glycolic acid, Azulene, Aloe Vera, Alpha Hydroxy Acid",
      benefits:
        " Helps reduce fine lines and wrinkles. Reduces the appearance of dark spots. Contains antioxidants to protect against free radicals. Restores elasticity and firmness to skin. Leaves skin feeling refreshed and rejuvenated. Ideal for daily use. Suitable for all skin types. Non greasy. Hypoallergenic. Fragrance free. Made in USA.",
    },
    {
      name: "So Soft Body Milk",
      description:
        "So Soft Body Milk is an enriched lotion made with plant-based milks, vitamins, and minerals. It has been specially formulated to be gentle on your skin while still delivering essential nutrients.",
      image:
        "https://images.unsplash.com/photo-1601049541079-473f79fd3746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxvdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[0]._id,
      price: 27.49,
      quantity: 200,
      ingredients:
        "Rice Milk, Centella Milk, Vitamin C, Honey, Shea Butter, Safflower Oil, Vitamin F, Tretinoin, Sulfur, Avocado Oil, Collagen, Algae extracts, Vitamin E, Hyaluronic Acid, Talc, Sunflower Oil, Tamanu Oil, Antioxidants, Vitamin B3, Lactic acid, Aloe Vera, Apple Cider Vinegar",
      benefits:
        "Nourishes and hydrates skin. Gentle on sensitive skin. Silky smooth texture.",
    },
    {
      name: "Illuminating Serum",
      description:
        "This serum helps reduce dark spots and uneven skin tone while improving your complexion overall. The formula contains an exclusive blend of powerful antioxidants and vitamin A to protect against free radical damage and improve the appearance of fine lines and wrinkles",
      image:
        "https://images.unsplash.com/photo-1537251503603-4bd46030115f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg1fHxza2luY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[0]._id,
      price: 32.95,
      quantity: 100,
      ingredients:
        "Seaweed, Sunflower Oil, Azulene, Zinc, Vitamin F, Vitamin E, Vitamin B3, Almond Oil, Rosehip Oil, Sulfates, Vitamin A, Glycolic acid, Volcanic Ash, Aloe Vera, Salicylic Acid, Retinol, Apricot Kernel Oil, Shea Butter, Charcoal, Sulfur",
      benefits:
        "Helps reduce dark spots and uneven skintone. Protects against free radical damage. Improves the appearance of fine lines & wrinkles. Suitable for all skin types.",
    },
    {
      name: "Waterproof Lotion",
      description:
        "This lotion will leave your skin feeling smooth and moisturized without leaving behind any greasy residue. This lotion can be used as a daily moisturizer or as a treatment after swimming or showering. The lotion is water resistant up to 50 meters and has a non-greasy formula.",
      image:
        "https://images.unsplash.com/photo-1638609927043-3eed02fdd24b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[2]._id,
      price: 18.99,
      quantity: 300,
      ingredients:
        "Sea Salt, Vitamin E, Vitamin C, Calendula, Almond Oil, Synthetic Beeswax, Honey, Azelaic Acid, Zinc, Charcoal, Seaweed, Tretinoin, Sunflower Oil, Vitamin K, Ceramides, Amoxicillin, Aloe Vera, Vitamin F, Tamanu Oil, Lavender Oil",
      benefits:
        "Non-greasy formula leaves no oily residue. Moisturizes skin without leaving behind any greasiness. Waterproof up to 50m. Can be used as a daily lotion or as a post-swim/shower treatment. Suitable for sensitive skin.",
    },
    {
      name: "Botanical Body Lotion",
      description:
        "This luxurious body lotion has been formulated with skin-loving ingredients like aloe vera, shea butter, and vitamin E to leave your skin feeling smooth and moisturized. The botanicals in this lotion are known to reduce redness, calm irritation, and protect against free radicals.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      category: categories[2]._id,
      price: 35.99,
      quantity: 450,
      ingredients:
        "Almond Oil, Lactic acid, Salicylic Acid, Vegetable Glycerin, Antioxidants, Shea Butter, Azulene, Avocado Oil, Vitamin A, Algae extracts, Aloe Vera, Apricot Kernel Oil, Snail Mucin, Sodium Hyaluronate, Green Tea, Talc, Volcanic Ash, Synthetic Beeswax, Hyaluronic Acid, Lavender Oil, Vitamin E",
      benefits:
        "Moisturizes and conditions without leaving greasy residue. Leaves skin feeling silky smooth and hydrated. Dermatologist tested. Fragrance-free. Hypoallergenic. Suitable for sensitive skin types.",
    },
    {
      name: "Lotus Bar Soap",
      description:
        "Lotus Bar Soap is a natural soap made with 100% pure coconut oil and palm oil. A gentle yet effective cleanser that leaves skin feeling clean, smooth and moisturized. This bar soap has been formulated without any harsh chemicals or synthetic fragrances.",
      image:
        "https://images.unsplash.com/photo-1614806687007-2215a9db3b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[2]._id,
      price: 23.49,
      quantity: 100,
      ingredients:
        "Coconut Oil, Palm Oil, Amoxicillin, Honey, Zinc, Vitamin D, Salicylic Acid, Azulene, Vitamin K, Vitamin B3, Almond Oil, Rosehip Oil, Hemp Oil, Antioxidants, Vitamin A, Lavender Oil, Calendula, Soybean Oil, Sulfur, Tretinoin, Avocado Oil, Aloe Vera",
      benefits:
        "Gentle enough for daily use. Leaves skin feeling clean and smooth. No harsh chemicals or synthetic fragrant oils. Made in USA.",
    },
    {
      name: "Rose Bar Soap",
      description:
        " The rose bar soap has been formulated to be gentle enough for daily use but powerful enough to clean your skin without stripping it of its natural oils. Rose Bar Soap is perfect for those who want to nourish their skin while they wash.",
      image:
        "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZCUyMHNvYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      category: categories[2]._id,
      price: 23.49,
      quantity: 30,
      ingredients:
        "Rose Extract, Lavendar Oil, Antioxidants, Algae extracts, Amoxicillin, Hemp Oil, Argan Oil, Sunflower Oil, Witch Hazel, Seaweed, Lactic acid, Collagen, Apricot Kernel Oil, Rosemary, Salicylic Acid, Turmeric, Vitamin F, Alpha Hydroxy Acid, Synthetic Beeswax, Vitamin K, Zinc, Willow Bark Extract",
      benefits:
        "Refreshing scent. Formulated with natural ingredients. Handmade in small batches. Made in USA.",
    },

    {
      name: "Lotus Hand Soap",
      description:
        "Lotus hand soap is an extra strength, exfoliative soap made with natural minerals that are essential for healthy skin. The result? A luxurious lather that leaves your hands feeling clean without drying them out.",
      image:
        "https://images.unsplash.com/photo-1614806687667-83517ca105b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhhbmQlMjBzb2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[1]._id,
      price: 23.49,
      quantity: 300,
      ingredients:
        "Vitamin B3, Witch Hazel, Safflower Oil, Amino Acids, Ceramides, Willow Bark Extract, Vitamin C, Antioxidants, Almond Oil, Soybean Oil, Collagen, Rosehip Oil, Hyaluronic Acid, Amoxicillin, Argan Oil, Azelaic Acid, Vitamin E, Avocado Oil, Alpha Hydroxy Acid, Vegetable Glycerin",
      benefits:
        "Extra Strength Exfoliating Lotion, Moisturizes Hands, Leaves Skin Feeling Soft & Smooth, Suitable For Sensitive Skin, Ideal For Dry Hands",
    },
    {
      name: "Intensive Repair Cream",
      description:
        "Intensive Repair Cream is an advanced moisturizing treatment formulated with a unique blend of natural ingredients to deeply nourish skin while helping it repair itself. This cream is ideal for those who want to improve their skin’s appearance or treat minor skin conditions such as eczema, psoriasis, and more.",
      image:
        "https://images.unsplash.com/photo-1609097164502-59a1f0f9a66f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY2fHxza2luY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[1]._id,
      price: 45.99,
      quantity: 70,
      ingredients:
        "Aloe Vera, Amino Acids, Lactic acid, Aloe Vera, Vitamin F, Almond Oil, Witch Hazel, Volcanic Ash, Argan Oil, Willow Bark Extract, Safflower Oil, Vitamin B3, Retinol, Calendula, Tea Tree Oil, Amoxicillin, Tamanu Oil, Vitamin E, Sunflower Oil, Apricot Kernel Oil",
      benefits:
        "Moisturizes and repairs damaged skin. Helps prevent future damage. Ideal for sensitive skin types. Suitable for all skin types. Fragrance free. Dermatologist tested.",
    },
    {
      name: "Java Hand Soap",
      description:
        "This hand soap has been formulated with natural ingredients such as coffee extracts, avacodo oil, and almond oil. The result? A gentle and soothing soap that leaves your hands feeling clean and refreshed.",
      image:
        "https://images.unsplash.com/photo-1605264964528-06403738d6dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmQlMjBzb2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[1]._id,
      price: 23.49,
      quantity: 20,
      ingredients:
        "Coffe Extracts, Ceramides, Avocado Oil, Apple Cider Vinegar, Hyaluronic Acid, Vitamin E, Amino Acids, Glycolic acid, Volcanic Ash, Hemp Oil, Willow Bark Extract, Rosehip Oil, Calendula, Vitamin B3, Almond Oil, Apricot Kernel Oil, Tamanu Oil, Lactic acid",
      benefits:
        "Leaves skin feeling smooth and soft. Gentle enough for daily use. Non-irritating. Suitable for sensitive skin. Light Coffee Scent.",
    },
    {
      name: "Tea Hand Soap",
      description:
        "Tea Hand Soap is an organic hand soap made from 100% natural ingredients including tea green tea, lavender, lemon balm and more. A gentle yet effective cleanser that leaves your hands feeling fresh and clean.",
      image:
        "https://images.unsplash.com/photo-1564077454884-6ec0daa6acc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[1]._id,
      price: 25.99,
      quantity: 40,
      ingredients:
        "Sodium Hyaluronate, Green Tea, Avocado Oil, Lavendar Oil, Charcoal, Amino Acids, Vitamin K, Zinc, Amoxicillin, Niacinamide, Alpha Hydroxy Acid, Sulfur, Soybean Oil, Volcanic Ash, Glycolic acid, Ceramides, Seaweed, Vitamin A, Lemon Balm, Vitamin F, Vitamin B3",
      benefits:
        "Gentle enough for daily use. Leaves skin feeling clean and refreshed. Non-toxic. Scented with essential oils. Made in USA.",
    },
    {
      name: "Original Lemon-Matcha",
      description:
        "Lemon Matcha is a unique blend of lemon juice and matcha green tea powder. The result? A refreshing beverage that tastes like nothing else!",
      image:
        "https://images.unsplash.com/photo-1606937898591-f862035e45f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hdGNoYSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[3]._id,
      price: 7.99,
      quantity: 30,
      ingredients: "Matcha, Lemon",
      benefits:
        "Contains antioxidants, vitamins and minerals.  No Artificial Flavors or Colors. Supports cardiovascular health. Helps reduce stress. Provides energy. Contains caffeine. ",
    },
    {
      name: "Original Honey-Matcha",
      description:
        "Honey Matcha is an organic matcha green tea drink made with real honey and natural flavors. A delicious beverage that provides many health benefits.",
      image:
        "https://images.unsplash.com/photo-1606937529099-0777d1e25994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdGNoYSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[3]._id,
      price: 7.99,
      quantity: 30,
      ingredients: "Matcha, Honey, Almond Milk",
      benefits:
        "Contains antioxidants, vitamins and minerals.  No Artificial Flavors or Colors. Supports cardiovascular health. Helps reduce stress. Provides energy. Contains caffeine. ",
    },
    {
      name: "Original Matcha 8oz",
      description:
        "The Original Matcha 8oz. Green tea pan roasted to create a unique flavour profile which has been described as 'sweet', 'earthy' and 'nutty'. Aids digestion and promotes healthy skin and hair.",

      image:
        "https://images.unsplash.com/photo-1630551359036-c41b1e34b7a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG1hdGNoYSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: categories[3]._id,
      price: 35.99,
      quantity: 20,
      ingredients: "Matcha",
      benefits:
        "Contains antioxidants, vitamins and minerals. Rich in L-theanine, a natural amino acid found in green tea.  Supports cardiovascular health. Helps reduce stress. Provides energy. Contains caffeine. No sugar, no artificial sweeteners, no preservatives.",
    },
    {
      name: "Original Matcha 16oz",
      description:
        "The Original Matcha 16oz. Green tea pan roasted to create a unique flavour profile which has been described as 'sweet', 'earthy' and 'nutty'. Aids digestion and promotes healthy skin and hair.",

      image:
        "https://images.unsplash.com/photo-1630343254135-7947e2a0e038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      category: categories[3]._id,
      price: 55.99,
      quantity: 300,
      ingredients: "Matcha",
      benefits:
        "Contains antioxidants, vitamins and minerals. Rich in L-theanine, a natural amino acid found in green tea.  Supports cardiovascular health. Helps reduce stress. Provides energy. Contains caffeine. No sugar, no artificial sweeteners, no preservatives.",
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
    ],
  });

  await User.create({
    firstName: "Ben",
    lastName: "Bolt",
    email: "bbolt@test.com",
    password: "password101112",
  });

  console.log("users seeded");

  process.exit();
});
