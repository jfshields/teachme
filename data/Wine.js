const sampleData = ({
    subject: 'Californian wine',
    topics:
        [
            "Varietals and Regions", 
            "History of Wine-Making in California", 
            "Recent Developments in California Wine", 
            "Different Styles of California Wine", 
            "Appreciating California Wine"
        ],
    test:
        [
            {
                question: 'What determines the color of wine?',
                answerOptions: [
                    'The type of grape used',
                    'The temperature of fermentation',
                    'The amount of yeast added',
                    'The amount of sugar present',
                ],
                answerCorrect: 0,
            },
            {
                question: 'How does leaving grape skins in contact with juice during fermentation impact the color of wine?',
                answerOptions: [
                    'It lightens the color of the wine',
                    'It darkens the color of the wine',
                    'It has no impact on the color of the wine',
                    'It makes the wine fizzy',
                ],
                answerCorrect: 1,
            },
            {
                question: 'How can winemaking techniques impact the color of wine?',
                answerOptions: [
                    'By adding food coloring to the wine',
                    'By changing the pH level of the wine',
                    'By changing the temperature of fermentation',
                    'By adjusting the time of skin contact with the juice',
                ],
                answerCorrect: 3,
            },
            {
                question: 'What is a common technique used to remove grape skins from juice before fermentation in white wine production?',
                answerOptions: [
                    'Pressing the grapes',
                    'Adding colorants to the wine',
                    'Straining the juice through a cheesecloth',
                    'Using a mechanical destemmer',
                ],
                answerCorrect: 0,
            },
            {
                question: 'Can the color of wine be used as an indicator of its taste?',
                answerOptions: [
                    'Yes, the darker the color, the sweeter the wine',
                    'Yes, the lighter the color, the more tannic the wine',
                    'No, color does not necessarily correspond with taste',
                    'No, the color of the wine only indicates the type of grape used',
                ],
                answerCorrect: 2,
            },
        ],
    lesson: [
        [`Red wines are primarily made from dark-skinned grapes, such as Cabernet Sauvignon, Merlot, Pinot Noir, and Zinfandel (for example a Cabernet Sauvignon with dark cherry aromas). `,
            `White wines are primarily made from light-skinned grapes, such as Riesling, Pinot Grigio, Sauvignon Blanc, and Chardonnay (for example, a Sauvignon Blanc with crisp lime aromas).`,
            `Rosé wines are made from red and white grapes blended together, and are pale pink in color (for example, a Provence Rosé with aromas of strawberry and rose petals).`,
            `Sparkling wines are usually made from white and/or red grapes, and are typically fermented twice and bottled with added sugar and carbon dioxide (for example, a Brut Cava with yeast and biscuit aromas).`,
            `Dessert wines are usually sweet and higher in alcohol content, and are produced by either late harvest grapes or added sugar fermentation processes (for example, a Botrytised Semillon with flavors of honey and apricot).`,
            `Fortified wines such as port and sherry have spirits such as brandy added after fermenting the wine, and are typically sweeter and higher in alcohol content than table wines (for example, a Tawny Port with dried fruit flavors). `,
            `Natural wines are made from organic grapes, and may be unfiltered, unfined, and/or without added sulfites (for example, an Orange Wine with notes of ripe stone fruits).`
        ], [
            `Check reviews and ratings from trusted experts (for example, a critic that is highly rated on Wine Spectator)`,
            `Look for information on production methods and grape varieties on the label (for example, a Riesling that is fermented slowly in cold temperatures)`,
            `Smell and swirl the glass to detect aromas such as fruit, flowers, minerals, etc. (for example, a Cabernet Sauvignon with notes of blackberry and cedar)`,
            `Taste the wine and consider the body, flavor, acidity, tannins, and overall balance (for example, a smooth Pinot Noir with bitterness and earthy notes in the finish)`,
            `Consider how the wine pairs with food and its quality in relation to its price (for example, a Chardonnay that has good value for its price and pairs well with grilled seafood)`
        ], [`When pairing wine with food, consider the intensity of the dish and the flavor profiles of both the food and the wine (for example, a bold Barolo with a rich beef stew).`,
            `Match the body of the wine to the body of the dish, generally lighter foods pair with lighter wines (like a Pinot Grigio with salmon) and bold dishes with bolder wines (like a Cabernet with steak). `,
            `Acidic wines balance out fatty foods (like Sauvignon Blanc with fried foods), while sweet wines pair well with spicy dishes (like a Gewürztraminer with Thai green curry).`,
            `Certain flavor combinations also work well together, such as earthy mushrooms and earthy red wines (like a Syrah with mushrooms) and citrus notes in the wine to complement fresh seafood (like a Vermentino with seared scallops).`,
            `Play around with different combinations to find a pairing that works best for your palate (for example, a Sauvignon Blanc with roasted vegetables).`
        ], [`Moderate consumption of wine (up to one drink for women and two drinks for men per day) can provide health benefits such as reducing the risk of certain diseases and improving overall heart health.`,
            `Studies have shown that moderate consumption of red wine can reduce the risk of cardiovascular disease and type 2 diabetes. (For example, a study of over 1 million individuals in Spain showed that moderate consumption of red wine was associated with a decreased risk of cardiovascular disease) `,
            `Wine contains antioxidants, which can help reduce inflammation and protect against damage caused by free radicals. (For example, polyphenols such as resveratrol found in red wine have been shown to reduce inflammation and protect against oxidative damage) `,
            `Wine can also improve digestion by increasing the production of digestive fluids. (For example, a compound found in red wine called tyrosol has been shown to stimulate the release of gastric acids necessary for proper digestion)`,
            `Moderate consumption of wine can also promote better sleep, improved cognitive functioning, and reduced stress levels. (For example, a study showed that participants who drank moderate amounts of wine before bed were able to stay asleep longer and had improved sleep quality)`
        ], [`Aging and storing wine can improve the flavor and complexity of certain wines, such as red wines from Bordeaux and Barolo.`,
            `Wine should be stored in a cool and dark place with consistent temperature, around 55°F (13°C).`,
            `Wines should also be stored in horizontal position in order to keep the cork moist. `,
            `Wines should be stored away from vibrations, odors, and sunlight. (For example, in a temperature-controlled cellar or a wine fridge)`,
            `Depending on the type of wine, the duration it should be aged before drinking will vary (for example, lighter whites can be consumed within a year, whereas some reds might not be at their best until 10-15 years later).`]
    ]
});

export default sampleData;