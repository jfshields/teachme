import axios from 'axios';

export const fetchOpenAiData = (userInput) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ "role": "user", "content": `you are a teaching ai bot, what are the five main topics about ${userInput}? just give me the topic title/heading. Do not number the bullet points.` }],
                    temperature: 0.7
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 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',
                    },
                }
            );
            if (response.data && response.data.choices && response.data.choices.length > 0) {
                const reply = response.data.choices[0].message.content;
                console.log('ChatGPT reply ACTION:', reply.split("\n"));
                dispatch({ type: 'FETCH_OPENAI_SUCCESS', payload: reply.split("\n") });
            }
        } catch (error) {
            // Dispatch error action in case of failure
            dispatch({ type: 'FETCH_OPENAI_FAILURE', payload: error.message });
        }
    };
};

export const loadData = (data) => {
    return {
      type: 'LOAD_DATA',
      payload: data,
    };
  };