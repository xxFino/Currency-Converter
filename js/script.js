{
    const calculateResult = (input, value) => {
        const EUR = 4.65;
        const USD = 4.38;
        const GPB = 5.34;
        const CHF = 4.73;
        const NOK = 0.44;

        switch (value) {
            case "EUR":
                return input / EUR;

            case "USD":
                return input / USD;

            case "GPB":
                return input / GPB;

            case "CHF":
                return input / CHF;

            case "NOK":
                return input / NOK;

        }
    }

    const updateResultText = (output) => {
        const outputElement = document.querySelector(".js-output");

        outputElement.innerHTML = output.toFixed(2);
    }

    const onFormInput = () => {
        const inputElement = document.querySelector(".js-input");
        const valueElement = document.querySelector(".js-value");

        const output = calculateResult(inputElement.value, valueElement.value);

        updateResultText(output);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);
    }

    init();
}