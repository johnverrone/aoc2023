# Advent of Code 2023

Using [bun](https://bun.sh/) as a TypeScript runtime this year.

To run a puzzle, ensure `bun` is installed and run `bun dayX/index.ts`

### Day 01

Started a little tougher on part 2 than I was hoping for 😂. I really wanted to use regex for this (it felt right), but it got a little tricky when the written out versions of the numbers could overlap. Eg. `eightwo` needs to be `8` when searching from the front and `2` when searching from the back. I ended up doing a lot of ugly string reversing but we got the answer and I'm going to leave the code as-is. Waking up early and going straight to the computer. Feels like the holidays.
