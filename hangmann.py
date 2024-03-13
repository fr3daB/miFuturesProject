import random
import sys

hangman_loser = [
    r'''
 ----------
       |   |
       O   |
      /|\  |
      / \  |
           |

  '''
]

wrong1 = [r'''
 ----------
          
       
  
      
           

  ''']

wrong2 = [
    r'''
 ----------
           |
           |
           |
           |
           |

  '''
]

wrong3 = [
    r'''
 ----------
       |   |
           |
           |
           |
           |

  '''
]

wrong4 = [
    r'''
 ----------
       |   |
       O   |
           |
           |
           |

  '''
]

wrong5 = [
    r'''
 ----------
       |   |
       O   |
       |   |
           |
           |

  '''
]

wrong6 = [
    r'''
 ----------
       |   |
       O   |
       |\  |
           |
           |

  '''
]

wrong7 = [
    r'''
 ----------
       |   |
       O   |
      /|\  |
           |
           |

  '''
]

wrong8 = [
    r'''
 ----------
       |   |
       O   |
      /|\  |
        \  |
           |

  '''
]

#words bank
easywords = ["river", "table", "happy", "guitar", "movie"]
mediumwords = ["elephant", "computer", "library", "pancake", "journey"]
intermediatewords = ["persevere", "ethereal", "enigma", "quagmire", "insidious"]
hardwords = ["serendipity", "exquisite", "cacophany", "mellifluos", "quixotic"]


def difficulty(choice):

    choice = int(choice)

    if choice == 1:
        word = random.choice(easywords)
        print(word)
    elif choice == 2:
        word = random.choice(mediumwords)
        print(word)
    elif choice == 3:
        word = random.choice(intermediatewords)
        print(word)
    elif choice == 4:
        word = random.choice(hardwords)
        print(word)
    return word

def main():
    choice = input("Pick a level: 1, 2, 3, or 4: ")
    chosen_word = difficulty(choice)
    dashes = "_ " * len(chosen_word)
    guessed_letters = []
    wrong_count = 0

    while wrong_count < 8:
        print("       START                   ")
        letter_guess = input("Guess a letter: ").lower()
        print(dashes)
        print("        END                    ")
        print("Incorrect guesses: " + str(wrong_count))
        print("Guessed Letters: " + ", ".join(guessed_letters))

        if letter_guess in guessed_letters:
            print("Already guessed.")
        else:
            if letter_guess not in chosen_word:
                wrong_count += 1
            guessed_letters.append(letter_guess)

        if letter_guess in  chosen_word:
            print(letter_guess)

        if set(guessed_letters) == set(chosen_word):
            print("Congratulations! You guessed the word:", chosen_word)
            

if __name__ == "__main__":
  main()
