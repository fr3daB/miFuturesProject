import random

def generate_numbers(n):
    """
    Generate a list of n numbers forming a square with one blank spot.
    """
    numbers = list(range(1, n))
    numbers.append(None)  # Insert a blank spot
    random.shuffle(numbers)
    return numbers

def print_board(numbers, side_length):
    """
    Print the numbers in a square grid with grid lines.
    """
    for i in range(side_length):
        # Print horizontal grid lines
        print("+" + "---+-" * side_length)
        
        # Print row content
        row_content = "|"
        for j in range(side_length):
            if numbers[i * side_length + j] is not None:
                row_content += f" {numbers[i * side_length + j]:2d} |"
            else:
                row_content += "    |"
        print(row_content)
    
    # Print bottom grid line
    print("+" + "---+-" * side_length)

def main():
    side_length = int(input("Enter side length "))  # Change the side length as desired
    n = side_length ** 2
    numbers = generate_numbers(n)
    sorted_numbers = list(range(1, n)) + [None]

    print("Welcome to the Number Reorder Game!")
    print("Reorder the numbers to form a square with one blank spot.")
    print("Enter 'w', 'a', 's', or 'd' to move the blank spot up, left, down, or right respectively.")
    print("Enter 'q' to quit.")

    while numbers != sorted_numbers:
        print_board(numbers, side_length)
        move = input("Enter move: ")
        if move.lower() == 'q':
            print("Quitting the game.")
            return
        blank_index = numbers.index(None)
        if move.lower() == 'w' and blank_index >= side_length:
            numbers[blank_index], numbers[blank_index - side_length] = numbers[blank_index - side_length], numbers[blank_index]
        elif move.lower() == 'a' and blank_index % side_length != 0:
            numbers[blank_index], numbers[blank_index - 1] = numbers[blank_index - 1], numbers[blank_index]
        elif move.lower() == 's' and blank_index < n - side_length:
            numbers[blank_index], numbers[blank_index + side_length] = numbers[blank_index + side_length], numbers[blank_index]
        elif move.lower() == 'd' and blank_index % side_length != side_length - 1:
            numbers[blank_index], numbers[blank_index + 1] = numbers[blank_index + 1], numbers[blank_index]
        else:
            print("Invalid move. Please try again.")

    print("Congratulations! You have reordered the numbers correctly:")
    print_board(numbers, side_length)

if __name__ == "__main__":
    main()