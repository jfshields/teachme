import axios from 'axios';
import config from '../config.js'

const checkResponse = (listOfStrings) => {
  const noEmpty = listOfStrings.filter((str) => Boolean(str));
  return noEmpty
}


const getTopics = async (userInput) => {
  console.log('ChatGPT input:', userInput);
  var reply = []
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
          model: "gpt-3.5-turbo",
          messages: [{"role": "user", "content": `you are a teaching ai bot, what are the five main topics about ${userInput}? just give me the topic title/heading. Do not number the bullet points.`}],
          temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.OPENAI_API_KEY}`,
        },
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const reply = response.data.choices[0].message.content;
      console.log('ChatGPT reply:', reply.split("\n"));
      return reply.split("\n").map((str) => str.substring(2))
    }
  } catch (error) {
    console.error('Error:', error);
    throw error
  }
}


const getTopicLessons = async (topic) => {
    try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
          model: "gpt-3.5-turbo",
          messages: [{"role": "user", "content": `Provide me 5-7 summarised statements to teach me all the key and interesting points about the ${topic}. Separate each statement with a new line only.`}],
          temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.OPENAI_API_KEY}`,
        },
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const reply = response.data.choices[0].message.content;
      console.log('ChatGPT reply:', reply.split("\n"));
      const finalReply = checkResponse(reply.split("\n"))
      return finalReply
    }
  } catch (error) {
    console.error('Error:', error);
    throw error
  }
  // var reply = []
  // switch (topic) {
  //   // case 'Varietals and regions':
  //   default:
    //  reply = [
    //    `1. Varietals and regions play an important role in determining the taste and aroma of a wine. Different grape varieties (varietals) have distinct characteristics that are influenced by the climate, soil, and topography of the region in which they are grown`,
    //     `2. The most popular varietals worldwide are Cabernet Sauvignon, Merlot, Pinot Noir, Chardonnay, Sauvignon Blanc, and Riesling. Each of these varietals has a unique flavor profile and is grown in specific regions around the world`, 
    //     `3. The region in which a wine is grown can greatly impact its taste and aroma. For example, wines from cooler climates tend to have higher acidity and lighter body, while wines from warmer climates have lower acidity and fuller body.`,
    //     `4. Some of the most famous wine regions in the world include Burgundy and Bordeaux in France, Tuscany in Italy, Napa Valley in California, and Rioja in Spain. Each of these regions is known for producing high-quality wines from specific varietals.`,
    //     `5. Climate plays a crucial role in determining the characteristics of wine. The temperature, rainfall, and amount of sunlight in a region can greatly impact the ripening of the grapes and the resulting wine.`,`6. The age of the vines used to produce wine can also impact its taste and aroma. Older vines tend to produce grapes with more concentrated flavors, while younger vines produce grapes with lighter flavors.`,
    //     `7. Wine enthusiasts can explore the world of varietals and regions by tasting wines from different parts of the world and learning about the unique characteristics of each. This can help them develop a deeper appreciation and understanding of the complex world of wine.`
    //   ]
  //     return reply
  // }
}

  export { getTopics, getTopicLessons };