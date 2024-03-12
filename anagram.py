from hangman import *
import random

def anagram(word_list):
    
    word_index = random.randint(0,len(word_list)-1)

    letter_list = list(word_list[word_index])
    word_length = len(letter_list)

    for i in range(word_length):
        index1 = random.randint(0, word_length-1)
        index2 = random.randint(0, word_length-1)

        letter_list[index1], letter_list[index2] = letter_list[index2], letter_list[index1]

    return "".join(letter_list)



