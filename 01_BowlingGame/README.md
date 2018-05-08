http://www.peterprovost.org/blog/2012/05/02/kata-the-only-way-to-learn-tdd/

As I said, if you live in the US or Canada, this one is easy to understand. If not, you might want to look at the next one.

Source: http://en.wikipedia.org/wiki/File:Bowling_-_albury.jpg

The essence of this kata, popularized by Uncle Bob Martin, is to create a scoring engine for 10-pin Bowling. In 10-pin bowling you have ten frames where you can roll one, two (or three) balls and score the pins that you knock down. Sounds simple right?

Except the scoring is weird. You’d think 10 pins and ten frames would yield a highest possible score of 100, but you’d be wrong. The lowest possible score (all misses) is zero, but the highest possible score is 300. For more information about 10-pin bowling scoring I suggest reading the  Wikipedia page. But this is exactly why it is a fun system to model for our kata.

Uncle Bob breaks this kata down into the following five tests:

Gutter game scores zero - When you roll all misses, you get a total score of zero.
All ones scores 20 - When you knock down one pin with each ball, your total score is 20.
A spare in the first frame, followed by three pins, followed by all misses scores 16.
A strike in the first frame, followed by three and then four pins, followed by all misses, scores 24.
A perfect game (12 strikes) scores 300.
He has some very explicit refactorings that you are to perform while implementing the third and fourth tests, and doing these is important. I’ve always found it weird that the final test just passes when you do the first four right (this smells a bit of over-implementing test four) but I’ve never really found a way to do #3 and then #4 that didn’t result in #5 just passing. Oh well.

You can read Uncle Bob’s wiki page on the topic for the canonical definition.