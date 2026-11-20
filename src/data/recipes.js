export const initialRecipes = [
    {
        id: 1,
        name: 'Pandan Chiffon Cake',
        description: 'A light, airy sponge with a delicate green colour and the sweet, grassy fragrance of pandan. Whipped egg whites give it a cloud-like texture, making it a popular Southeast Asian classic that is lovely with tea.',
        prepTime: 30,
        cookTime: 45,
        ingredients: ['8 eggs', '250g caster sugar', '210g plain flour', '125ml oil', '125ml water', '1tbsp baking powder', '1tsp cream of tartar', '1tsp vanilla extract', '1tsp pandan flavouring'],
        steps: '1. Preheat the oven to 130C (fan).\n' +
            '2. Separate the egg whites and yolks.\n' +
            '3. Divide the sugar in half: one half for the whites, one half for the yolks.\n' +
            '4. Beat the egg whites, gradually adding the first half of the sugar and the cream of tartar, until it reaches a meringue consistency.\n' +
            '5. Beat the egg yolks, gradually adding the other half of the sugar, until fluffy.\n' +
            '6. Sieve the flour and baking powder together.\n' +
            '7. Add two big spoonfuls of flour, then some water, then some oil to the yolks, beating after each addition. Repeat until all are used and thoroughly mixed.\n' +
            '8. Add the pandan flavouring (for colour) and the vanilla extract.\n' +
            '9. Fold half of the meringue into the green mixture.\n' +
            '10. Once well folded, add this back into the bowl with the rest of the meringue and fold again. Be careful not to overfold.\n' +
            '11. Add more flavouring if needed.\n' +
            '12. Pour into the baking tin.\n' +
            '13. Bake for roughly 45 minutes. Check within that time frame, but don\'t open the oven too often, as it can interrupt the baking.',
        image: '/public/chiffon-pandan-cake-unsplash.jpg',
        category: 'Baking'
    },
    {
        id: 2,
        name: 'Classic Victoria Sponge',
        description: 'The traditional British teatime cake: two buttery, golden sponges sandwiched with strawberry jam and whipped cream, then finished with a dusting of icing sugar. Simple, nostalgic and always a crowd-pleaser.',
        prepTime: 20,
        cookTime: 25,
        ingredients: ['175g butter, softened', '175g caster sugar', '3 large eggs', '175g self-raising flour', '1tsp vanilla extract', '2tbsp milk', '4tbsp strawberry jam', '150ml double cream, whipped', 'Icing sugar, for dusting'],
        steps: '1. Preheat the oven to 170C (fan) and grease and line two 20cm tins.\n' +
            '2. Cream the butter and sugar until pale and fluffy.\n' +
            '3. Beat in the eggs one at a time, adding a spoonful of flour with each to prevent curdling.\n' +
            '4. Add the vanilla, then fold in the remaining flour.\n' +
            '5. Stir in the milk to loosen the batter.\n' +
            '6. Divide between the tins and level the tops.\n' +
            '7. Bake for 22-25 minutes until golden and springy to the touch.\n' +
            '8. Cool in the tins for 5 minutes, then turn out onto a wire rack.\n' +
            '9. Once fully cool, spread jam on one sponge and whipped cream on top, then sandwich together.\n' +
            '10. Dust with icing sugar.',
        image: '/public/victoria-sponge-unsplash.jpg',
        category: 'Baking'
    },
    {
        id: 3,
        name: 'Chocolate Chip Cookies',
        description: 'Soft, chewy cookies with golden edges and pockets of melted chocolate. Chilling the dough gives them a deeper flavour and a thick, bakery-style texture.',
        prepTime: 45,
        cookTime: 12,
        ingredients: ['200g plain flour', '1/2tsp baking soda', '1/2tsp salt', '115g butter, melted and cooled', '115g light brown sugar', '55g caster sugar', '1 egg', '1tsp vanilla extract', '170g chocolate chips'],
        steps: '1. Whisk the flour, baking soda and salt together in a bowl.\n' +
            '2. In another bowl, mix the melted butter with both sugars until combined.\n' +
            '3. Beat in the egg and vanilla.\n' +
            '4. Add the dry ingredients and stir until just combined, then fold in the chocolate chips.\n' +
            '5. Chill the dough for 30 minutes.\n' +
            '6. Preheat the oven to 175C (fan 155C) and line two baking trays.\n' +
            '7. Scoop tablespoon-sized balls onto the trays, spaced well apart.\n' +
            '8. Bake for 10-12 minutes until the edges are golden but the centres are still soft.\n' +
            '9. Cool on the tray for 5 minutes before moving to a wire rack.',
        image: '/public/chocolate-chip-unsplash.jpg',
        category: 'Baking'
    },
    {
        id: 4,
        name: 'Banana Bread',
        description: 'A moist, tender loaf that makes the most of overripe bananas. Naturally sweet and lightly spiced with vanilla, it is perfect sliced and buttered for breakfast or a snack.',
        prepTime: 15,
        cookTime: 55,
        ingredients: ['3 very ripe bananas', '85g melted butter', '140g caster sugar', '1 egg', '1tsp vanilla extract', '1tsp baking soda', 'Pinch of salt', '200g plain flour'],
        steps: '1. Preheat the oven to 175C (fan 155C) and grease a 900g (23 x 13cm) loaf tin.\n' +
            '2. Mash the bananas in a large bowl until smooth.\n' +
            '3. Stir in the melted butter.\n' +
            '4. Mix in the sugar, egg and vanilla.\n' +
            '5. Sprinkle over the baking soda and salt, then stir in.\n' +
            '6. Add the flour and mix until just combined.\n' +
            '7. Pour into the tin.\n' +
            '8. Bake for 50-60 minutes, until a skewer inserted in the centre comes out clean.\n' +
            '9. Cool in the tin for 10 minutes, then turn out onto a wire rack.',
        image: '/public/banana-bread-unsplash.jpg',
        category: 'Baking'
    },
    {
        id: 5,
        name: 'Scottish-Style Scones',
        description: 'Light, fluffy scones with a golden top and a soft crumb. Best served warm, split open and topped with jam and cream, they are a staple of any afternoon tea.',
        prepTime: 15,
        cookTime: 12,
        ingredients: ['250g self-raising flour', '1tsp baking powder', '55g cold butter, cubed', '30g caster sugar', 'Pinch of salt', '150ml milk, plus extra for brushing', '1 egg, beaten'],
        steps: '1. Preheat the oven to 200C (fan 180C) and line a baking tray.\n' +
            '2. Rub the butter into the flour, baking powder and salt until it resembles breadcrumbs.\n' +
            '3. Stir in the sugar.\n' +
            '4. Add the milk gradually and mix to a soft dough.\n' +
            '5. Turn out onto a floured surface and lightly pat to about 2cm thick. Don\'t overwork it.\n' +
            '6. Cut out rounds with a 6cm cutter, without twisting.\n' +
            '7. Place on the tray and brush the tops with the beaten egg or milk.\n' +
            '8. Bake for 10-12 minutes until risen and golden.\n' +
            '9. Cool on a wire rack and serve with jam and cream.',
        image: '/public/scones-unsplash.jpg',
        category: 'Baking'
    },
    {
        id: 6,
        name: 'Chicken Tikka Masala',
        description: 'Tender marinated chicken in a creamy, gently spiced tomato sauce. A British favourite that is best served with basmati rice and warm naan.',
        prepTime: 80,
        cookTime: 35,
        ingredients: ['600g chicken breast, cut into bite-sized pieces', '150g natural yoghurt', '2tbsp tikka masala spice paste', '2tbsp vegetable oil', '1 large onion, finely chopped', '3 garlic cloves, crushed', '2cm piece of fresh ginger, grated', '1tsp ground cumin', '1tsp ground coriander', '1tsp paprika', '400g tin of chopped tomatoes', '100ml double cream', 'Salt, to taste', 'Fresh coriander, chopped, to serve'],
        steps: '1. Mix the chicken with the yoghurt and half of the spice paste. Cover and marinate in the fridge for at least 1 hour.\n' +
            '2. Heat 1tbsp of oil in a large frying pan over a medium-high heat. Cook the chicken in batches for 5-6 minutes until browned, then set aside.\n' +
            '3. Add the remaining oil to the pan and fry the onion over a medium heat for 8 minutes until soft.\n' +
            '4. Stir in the garlic, ginger, cumin, ground coriander, paprika and the rest of the spice paste. Cook for 1 minute.\n' +
            '5. Add the chopped tomatoes and simmer for 10 minutes.\n' +
            '6. Return the chicken to the pan and simmer for a further 10 minutes, until cooked through.\n' +
            '7. Stir in the cream and warm through gently. Season with salt.\n' +
            '8. Scatter with fresh coriander and serve with rice and naan.',
        image: '/public/chicken-tikka-unsplash.jpg',
        category: 'Cooking'
    },
    {
        id: 7,
        name: 'Spaghetti Bolognese',
        description: 'A rich, slow-simmered beef and tomato ragu tossed through spaghetti. A comforting family classic that freezes well.',
        prepTime: 15,
        cookTime: 60,
        ingredients: ['1tbsp olive oil', '1 onion, finely chopped', '1 carrot, finely chopped', '1 celery stick, finely chopped', '2 garlic cloves, crushed', '500g beef mince', '2tbsp tomato purée', '400g tin of chopped tomatoes', '200ml beef stock', '1tsp dried oregano', '1 bay leaf', 'Salt and black pepper', '320g spaghetti', 'Grated Parmesan, to serve'],
        steps: '1. Heat the oil in a large saucepan over a medium heat. Add the onion, carrot and celery and cook for 8-10 minutes until softened.\n' +
            '2. Add the garlic and cook for 1 minute.\n' +
            '3. Turn up the heat, add the mince and break it up with a wooden spoon. Cook until browned all over.\n' +
            '4. Stir in the tomato purée and cook for 1 minute.\n' +
            '5. Add the chopped tomatoes, stock, oregano and bay leaf. Season well.\n' +
            '6. Bring to the boil, then reduce the heat and simmer, partially covered, for 40 minutes, stirring occasionally.\n' +
            '7. About 10 minutes before the end, cook the spaghetti in a large pan of salted boiling water following the packet instructions. Drain.\n' +
            '8. Remove the bay leaf, toss the sauce through the spaghetti and serve with Parmesan.',
        image: '/public/spagetti-unsplash.jpg',
        category: 'Cooking'
    },
    {
        id: 8,
        name: 'Thai Green Chicken Curry',
        description: 'A fragrant, creamy curry with a gentle kick, made with green curry paste and coconut milk. Quick enough for a weeknight and lovely with jasmine rice.',
        prepTime: 15,
        cookTime: 20,
        ingredients: ['1tbsp vegetable oil', '3tbsp Thai green curry paste', '500g chicken breast, thinly sliced', '400ml tin of coconut milk', '150ml chicken stock', '1tbsp fish sauce', '1tsp caster sugar', '1 courgette, sliced into half-moons', '150g green beans, trimmed and halved', '1 red pepper, sliced', 'Juice of 1 lime', 'Handful of fresh Thai basil or coriander', 'Jasmine rice, to serve'],
        steps: '1. Heat the oil in a wok or large saucepan over a medium heat. Fry the curry paste for 1-2 minutes until fragrant.\n' +
            '2. Add the chicken and stir to coat in the paste. Cook for 3-4 minutes.\n' +
            '3. Pour in the coconut milk and stock. Add the fish sauce and sugar, then bring to a gentle simmer.\n' +
            '4. Add the courgette, green beans and pepper. Simmer for 8-10 minutes until the chicken is cooked through and the vegetables are tender.\n' +
            '5. Stir in the lime juice and taste, adding more fish sauce or sugar if needed.\n' +
            '6. Scatter with the herbs and serve with jasmine rice.',
        image: '/public/green-curry-unsplash.jpg',
        category: 'Cooking'
    },
    {
        id: 9,
        name: 'Mushroom Risotto',
        description: 'A creamy, savoury risotto packed with earthy mushrooms and finished with Parmesan. Patient stirring gives it its silky texture.',
        prepTime: 10,
        cookTime: 35,
        ingredients: ['1 litre vegetable stock', '2tbsp olive oil', '30g butter', '1 onion, finely chopped', '2 garlic cloves, crushed', '300g chestnut mushrooms, sliced', '300g risotto rice (arborio or carnaroli)', '150ml dry white wine', '50g Parmesan, finely grated', 'Salt and black pepper', 'Small handful of fresh parsley, chopped'],
        steps: '1. Heat the stock in a saucepan and keep it at a gentle simmer.\n' +
            '2. Heat 1tbsp of oil in a large, deep frying pan over a high heat. Fry the mushrooms for 5-6 minutes until golden, then set aside.\n' +
            '3. Add the remaining oil and half the butter to the pan. Cook the onion over a medium heat for 6-8 minutes until soft. Add the garlic and cook for 1 minute.\n' +
            '4. Stir in the rice and cook for 1-2 minutes until glossy.\n' +
            '5. Pour in the wine and stir until absorbed.\n' +
            '6. Add the stock a ladleful at a time, stirring often and waiting until each is absorbed before adding the next. This takes about 20 minutes, until the rice is tender with a slight bite.\n' +
            '7. Stir in the mushrooms, the remaining butter and the Parmesan. Season to taste.\n' +
            '8. Rest for 2 minutes, then serve topped with parsley.',
        image: '/public/mushroom-risotto-unsplash.jpg',
        category: 'Cooking'
    },
    {
        id: 10,
        name: 'Pan-Fried Salmon with Lemon Butter and Greens',
        description: 'Crisp-skinned salmon fillets served with a bright lemon butter sauce and buttery greens. A light, healthy dish on the table in under half an hour.',
        prepTime: 10,
        cookTime: 15,
        ingredients: ['2 salmon fillets, skin on (about 140g each)', '1tbsp olive oil', '30g butter', '2 garlic cloves, sliced', 'Zest and juice of 1 lemon', '200g tenderstem broccoli', '100g spinach', 'Salt and black pepper', 'Small handful of fresh dill or parsley, chopped'],
        steps: '1. Pat the salmon dry with kitchen paper and season both sides with salt and pepper.\n' +
            '2. Heat the oil in a non-stick frying pan over a medium-high heat. Place the salmon in skin-side down and press gently for 10 seconds.\n' +
            '3. Cook for 4-5 minutes without moving, until the skin is crisp and the flesh is cooked about two-thirds of the way up. Flip and cook for 1-2 minutes. Remove to a warm plate.\n' +
            '4. Meanwhile, steam or boil the broccoli for 3-4 minutes until just tender.\n' +
            '5. Reduce the heat under the frying pan, add the butter and garlic, and cook for 1 minute. Stir in the lemon zest and juice.\n' +
            '6. Add the spinach and broccoli and toss until the spinach has wilted.\n' +
            '7. Serve the salmon on the greens, spooning over the lemon butter and scattering with herbs.',
        image: '/public/salmon-unsplash.jpg',
        category: 'Cooking'
    },
    {
        id: 11,
        name: 'Chilli Con Carne',
        description: 'A hearty, smoky beef and kidney bean chilli with a warming kick. Serve with rice, soured cream and a squeeze of lime.',
        prepTime: 15,
        cookTime: 50,
        ingredients: ['1tbsp vegetable oil', '1 large onion, chopped', '2 garlic cloves, crushed', '1 red pepper, diced', '500g beef mince', '1tsp ground cumin', '1tsp smoked paprika', '1-2tsp chilli powder, to taste', '2tbsp tomato purée', '400g tin of chopped tomatoes', '200ml beef stock', '400g tin of kidney beans, drained and rinsed', 'Salt and black pepper', 'Rice, soured cream and fresh coriander, to serve'],
        steps: '1. Heat the oil in a large saucepan over a medium heat. Cook the onion for 6-8 minutes until soft, then add the garlic and pepper and cook for 3 minutes.\n' +
            '2. Add the mince and cook over a high heat, breaking it up, until browned.\n' +
            '3. Stir in the cumin, paprika, chilli powder and tomato purée. Cook for 1 minute.\n' +
            '4. Add the chopped tomatoes and stock. Bring to the boil, then reduce the heat and simmer for 30 minutes, stirring occasionally.\n' +
            '5. Add the kidney beans and cook for a further 10 minutes until the sauce is thick. Season to taste.\n' +
            '6. Serve with rice, a spoonful of soured cream and fresh coriander.',
        image: '/public/chilli-con-carne-unsplash.jpg',
        category: 'Cooking'
    }
]