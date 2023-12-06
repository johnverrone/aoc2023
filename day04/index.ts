import { part1, part2 } from '../utils/print';
import { readFileAsText } from '../utils/readFile';
import { sum } from '../utils/sum';

const contents = await readFileAsText(import.meta.dir);
const rows = contents.split('\n');

// part 1
let points = 0;
for (const row of rows) {
  const [_, w, c] = row.split(/:|\|/);
  const winningNums = w.trim().split(/ +/);
  const cardNums = c.trim().split(/ +/);

  let count = 0;
  cardNums.forEach((c) => {
    if (winningNums.includes(c)) {
      count++;
    }
  });
  const p = count > 0 ? Math.pow(2, count - 1) : 0;
  points += p;
}
part1(points);

// part 2
const copies = new Map<number, number>();
rows.forEach((row, idx) => {
  const num = idx + 1;
  const [_, w, c] = row.split(/:|\|/);
  const winningNums = w.trim().split(/ +/);
  const cardNums = c.trim().split(/ +/);

  const copyCount = copies.get(num) ?? 0;
  let count = 0;
  cardNums.forEach((c) => {
    if (winningNums.includes(c)) {
      count++;
      const next = num + count;
      copies.set(next, (copies.get(next) ?? 0) + 1 + copyCount);
    }
  });
});
part2(sum([...copies.values()]) + rows.length);
