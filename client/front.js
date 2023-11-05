async function choose_investments(available_money){
   // Let the player choose how much to invest in different financial products
   const investment_options = ["Stock Market", 
   "Savings Account",
   "Real Estate",
   "Cryptocurrency",
   "Gold"
   ];

   investments = {};

   input_button = document.getElementById("submit-button")

   for (option in investment_options){
      document.getElementById("amount_made").innerText = document.getElementById("prompt").innerText = "Enter the amount to invest in " + option + "0 to " + available_money + "): ";
      amount = (document.getElementById('submit-button')).addEventListener('click', async function () { // The button on the hero page
         amount;
         try {
            amount = document.getElementById("input").value
         if (amount != "") {
            input_button.on
            if (0 <= amount && amount <= available_money){
            decision_made = true;
         } else {
            document.getElementById("amount_made").innerText = "Please enter a valid investment amount"
         }
      }
         } catch (error) {
            await errorChecker(error);
         }

      return amount});

      investments[option] = amount
      available_money -= amount
      decision_made =  True
      input_made = True
      }
      return investments
   }


async function select_question(available_questions){
   // Select a random question and its correct answer
   index = Math.floor(Math.random(len(available_questions)))
   question, correct_answer = available_questions[index]
   return question, correct_answer, index
}
   



(document.getElementById('start')).addEventListener('click', async function() {
   money = 1000  // Initial amount of money
    levels = 10
    correct_answers = 0

    mistakes = 0  // Initialize a counter for mistakes
    available_questions = generate_questions()
    investment_performance = generate_investment_performance()

    for (level = 0; level <= levels; level++){
      print("\nLevel:" + level)

      // Choose investments
      investments = choose_investments(money)
      text = "You decided to invest in the following financial products:";
      
      print("You decided to invest in the following financial products:")
      for (product, amount in investments.items()){
         text += "\n" + product + ": " + amount;
      }
      document.getElementById("output").innterText = text
          

      // Generate a random yes/no question from available questions
      question, correct_answer, index = select_question(available_questions)
      print(question)
      available_questions.splice((index, 1))
      const yes_no_section = document.getElementById("yes-no-section")
      htmlToAdd = `
      <button id="yes-button" type="submit">Yes</button>
      <button id="no-button" type="submit">No</button>`
      yes_no_section.innerHTML = htmlToAdd
      answer = input("Your answer (yes/no): ").strip().lower()
/*


      if answer == correct_answer:
          // Calculate the amount to earn based on the current money balance
          amount_earned = calculate_earnings(investments, investment_performance, level)
          print(f"Correct! You saved ${amount_earned}.")
          correct_answers += 1
          money += amount_earned
      else:
          print("Incorrect. You missed an opportunity to save money.")
          mistakes += 1

      // Update money based on investment results
      money += investment_results(investments, investment_performance, level)

      print(f"Your current balance: ${money}")

      // Show the performance summary of financial products
      show_investment_performance(investment_performance, level)

      if money <= 0:
          print("You're out of money! Game over.")
          break

    }
        

    if money > 0:
        print("\nCongratulations! You completed all 10 levels.")
        print(f"Your final balance: ${money}")
        print(f"You answered {correct_answers} out of 10 questions correctly.")
        print(f"You made {mistakes} mistake(s).")

        # Calculate the score based on final balance and correct answers
        score = (money / 1000) * 50 + (correct_answers / 10) * 50
        print(f"Your score: {score:.2f}")
        print("You have successfully saved money!")

        # Add the user's name and score to the leaderboard dictionary
        user_name = input("Enter your name: ")
        user_scores[user_name] = score

        # Display the top 5 users on the leaderboard
        display_leaderboard()
});

*/
