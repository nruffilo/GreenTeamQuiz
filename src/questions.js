var questions = {
    "title": "Greening Fair Lawn",
    "description": "Tell us about yourself so we can recommend the best ways for you to help make Fair Lawn more Green!",
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>",
    "completedHtmlOnCondition": [
        {
            "html": "<h3>Thank you for your feedback.</h3><h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
        },
        {
            "html": "<h3>Thank you for your feedback.</h3><h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br />"
        }
    ],
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "boolean",
                    "name": "EnergySource",
                    "title": "Can you decide how you source energy for your home?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "PlantInYard",
                    "title": "Can you decide what you plant in your yard?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "Yard",
                    "title": "Do you have a yard you can plant in?",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "HighestPriorities",
                    "visible": true,
                    "title": "What are your two highest priorities?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "answercount",
                            "text": "Please select two features maximum.",
                            "maxCount": 2
                        }
                    ],
                    "choices": [
                        {
                            "value": "PropertyValue",
                            "text": "Increasing Home Value"
                        },
                        {
                            "value": "Health",
                            "text": "Health"
                        },
                        {
                            "value": "SavingMoney",
                            "text": "Saving Money"
                        },
                        {
                            "value": "GettingInvolved",
                            "text": "Getting Involved / Giving Back"
                        },
                        {
                            "value": "Environment",
                            "text": "The Environment"
                        }
                    ],
                    "otherText": "Other feature:",
                    "colCount": 2
                },
                {
                    "type": "boolean",
                    "name": "Landscaper",
                    "title": "Do you use a yard service/landscaper?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "LossOfNative",
                    "title": "Are you concerned about loss of native habitats for local flora and fauna?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "EnjoyGardening",
                    "title": "Do you enjoy gardening or want to learn to garden?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "SingleUseBottles",
                    "title": "Do you use single-use water bottles?",
                    "isRequired": true
                },

                
                

            ]
        }
    ],
    "showQuestionNumbers": "off"
};

export default questions;