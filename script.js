
        // Function to calculate percentage of an amount
        function calculatePercentage() {
            const percentage = parseFloat(document.getElementById('percentageInput').value);
            const amount = parseFloat(document.getElementById('amountInput').value);
            const result = (percentage / 100) * amount;
            document.getElementById('percentageResult').innerText = `Result: ${result}`;
        }

        // Function to calculate number as a percentage of total
        function calculateNumberAsPercentage() {
            const number = parseFloat(document.getElementById('numberInput').value);
            const total = parseFloat(document.getElementById('totalInput').value);
            const result = (number / total) * 100;
            document.getElementById('numberResult').innerText = `Result: ${result}%`;
        }

        // Event listeners for the buttons
        document.getElementById('calculatePercentageBtn').addEventListener('click', calculatePercentage);
        document.getElementById('calculateNumberBtn').addEventListener('click', calculateNumberAsPercentage);

