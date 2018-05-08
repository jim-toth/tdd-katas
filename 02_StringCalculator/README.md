The String Calculator Kata
Like the Bowling Kata, this kata, made popular by Roy Osherove, comes with a precise set of steps to follow. The essence is a method that given a delimited string, returns the sum of the values. I’ve always preferred my kata to define the tests I will follow every time through the exercise, so here are the tests I use for this one:

An empty string returns zero
A single number returns the value
Two numbers, comma delimited, returns the sum
Two numbers, newline delimited, returns the sum
Three numbers, delimited either way, returns the sum
Negative numbers throw an exception
Numbers greater than 1000 are ignored
A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)
A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)
Many single or multi-char delimiters can be defined (each wrapped in square brackets)
I rarely bother with Test #10 when I do it, because it feels like a big step to take all at once, but Roy does include it in his definition, and I have it in my kata notebook.

To read Roy’s original post describing the kata, or to see a bunch of video demonstrations (in just as many languages) visit his page [on the topic](http://osherove.com/tdd-kata-1/).