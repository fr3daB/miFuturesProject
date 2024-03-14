import random


def anagram(word_list):
    tries = 0
    
    word_index = random.randint(0,len(word_list)-1)
    theWord = word_list[word_index]

    letter_list = list(word_list[word_index])
    word_length = len(letter_list)

    for i in range(word_length):
        index1 = random.randint(0, word_length-1)
        index2 = random.randint(0, word_length-1)

        letter_list[index1], letter_list[index2] = letter_list[index2], letter_list[index1]


    if "".join(letter_list) not in word_list:
        print( "".join(letter_list)) 
    else:
        print( anagram(word_list))

    response = input("Enter the original word! :> ")
    tries += 1
    while response != theWord:
        print("Please reattempt! ")
        tries += 1
        response = input("Enter the original word! :> ")
    print("SUCCESS! SOLVED IN " + str(tries) + " TRIES!")






easywords = ["river", "table", "happy", "guitar", "movie"]
mediumwords = ["elephant", "computer", "library", "pancake", "journey"]
intermediatewords = ["persevere", "ethereal", "enigma", "quagmire", "insidious"]
hardwords = ["serendipity", "exquisite", "cacophany", "mellifluos", "quixotic"]

