---
title: Core Values Of A Software Engineer
date: "2018-09-24T22:12:03.284Z"
path: "/core-values"
cover: "/covers/core-values.jpg"
featured: true
---

People often ask me how one can become successful in the Software Engineering field.

**I will give my answer based on both personal experiences and experiences accumulated from observing patterns in behavior of successful engineers in my environment.**

Let's begin with a question.

**What success means to you?**

Is it about 8 hour of getting sh*t done every day, watching tv shows afterwards and accumulating money at the end of the month?

> Disclaimer: Money is important side-effect of work and not a cause for work.

If your answer is yes, then i would say that you don't need any guidance from me.

If you are very lucky and very persistent you can get what you want.
Though, i need to warn you that it will be painful and stressful, you will be the first to be fired in the case of crisis and you will be **very hard to work with**.

**I believe that people are moved by ethics rather than duties.**

**Owning and taking pride in what you do is the way for living richer and more informed life, and I think that counts for something, but maybe that's just me...**

However, if your answer is: "No, I believe there is more to work than just doing it, but I am also aware that sometimes following rules is not pragmatic."

That's a great point to make.

> It's important to be flexible in everything you do, but you need to remind yourself to fix it as soon as you can, so it doesn't bite your ass later.

Software engineering is a lot more about right **core mindset**
than about technology, even though technology is important part of a puzzle.

**The right mindset will help you greatly, but be aware that there is no magic bullet.**

This is complex field and things [take time](http://norvig.com/21-days.html).

In order to get on a right track, we need to ask ourselves
why are we here?

**What do we want to accomplish?**

**What brings quality to software?**

We all strive for quality, right?

Quality is a pretty abstract word.
What does it mean? Can we define it in a simpler manner?

> Enginnering is a lot about taking the abstract(complex) thing and defining it in terms of simpler things(primitives)

This is how my current state of mind sees it.
Feel free to add more sugar to this as you see fit.

> Quality = Logic * Processes

> Logic = Durability \* Performance / Efficiency

> Processes = Work plan * Personality

> Personality = Curiosity * Ego

## Logic
<h2 id="logic" style="visibility:hidden"></h2>

You definitely need to learn how to think and solve problems.

It is a skill and can be learned.

World is multi-dimensional and everything has its pros and cons.

It is only the question what trade-ofs you want to take.

Let's break down how logic can help you improve the quality of your software.

### Durability
<h3 id="durability" style="visibility:hidden"></h3>

> Durable things do not get broken under pressure.

Let's use car metaphor. We all like cars.
Driving them is fun, until they get broken.

**Yes, they break all the time, just like software systems.**

Now, ask yourself how is it possible?
Humans invest a lot of money and effort to make good cars.

Enter complexity realm...

> The more we need, the harder it gets.

Complexity is introduced by:

- physics(physical things are not meant to endure time)

- environment
    - weather conditions
    - road conditions
    - other cars


- humans
    - communication
    - security

        Money make people do unethical stuff
        like stealing your car's parts

    - superficial needs
        - **feel** nice
        - **look** nice

When you are buying a car, you certainly do not want to think about these:

- Am I driving this car too much?

- What is the road like? Is it too bumpy?

- What if it starts to rain?
    - Are my breaks in top condition?
    - Will the car's color get washed up?


- Will my seats get used up after extensive seating?

You just **assume** that it should work flawlessly.
If things go wrong, you blame the manufacturer.

> Really good software engineers never assume things. They always verify things.

As in car example, the same questions are asked about software all the time.

**You need to design your software for every possible user input or context in which it might end up.**

What have I just said? Design? Yes, successful software engineers **know** that design is more important than code.

**Now, you can't see it all at first, and that's fine. Don't get discouraged.This is incremental and iterative process.**

If you are just getting started, there are a lot of internal and external factors which might go wrong when building any kind of software.

I will list few of them below.

Internal factors:

- Broken gates(Electronic parts are not durable)
- Network failures
- Physical constraints
    - Reading from a huge file. Size bigger than memory.
    - Leaking memory by not cleaning after yourself.


- Logical constraints
    - Reading from a file if it isn't there.

External factors:

- Unexpected user input

    If you are just starting out,
    go out there and try to break forms on websites.
    [Email me](mailto:vladamx.dev@gmail.com) about your success rate.


- Misuse

**In order to get good at identifying these factors you need knowledge, of course, but more important thing is out of the box(hacker) thinking.**

My friends, for instance, constantly think about how to break something and then brag about it.

### Exercise
<h3 id="Exercise" style="visibility:hidden"></h3>


In this simple task, we are going to see what kind of thinking is necessary for you to be successful.

When software engineers start their careers, they are first thought about logic operators(AND, OR, XOR). Data and logic operators are software fundamentals. Addition, subtraction and other higher level operations are all implemented with logic operators.

Let's assume you have 2 boolean variables **a** and **b**.
If i give you following equation:
> **R** = **a** XOR (**b** OR **C**)

and tell you that **a** and **b** can either be 0 or 1 and instruct you to look in truth tables for these operations, can you tell me how many possible outcomes for R are there? [Email me](mailto:vladamx.dev@gmail.com) your answer.

![Truth tables](https://i.ytimg.com/vi/JQ0JOfxUAgY/maxresdefault.jpg)

### Performance
<h3 id="performance" style="visibility:hidden"></h3>

Why performance meters?

Obvious answer is productivity.

Aside from that, when something is fast, people use it differently - in more contexts.

**Performance often comes with trade-offs(cost, correctness), just like everything in engineering.**

Once again, you need to get good at managing trade-offs. You should always catch yourself in thinking about them. I don't use "always" word very often, but this is the context where i am comfortable with that.

> Sometimes "pi = 3.14" is (a) infinitely faster than the "correct" answer and (b) the difference between the "correct" and the "wrong" answer is meaningless. And this is why I get upset when somebody dismisses performance issues based on "correctness". The thing is, some specious value of "correctness" is often irrelevant because it doesn't matter. While performance almost always matters. And I absolutely detest the fact that people so often dismiss performance concerns so readily. ~ Linus Torvalds

Techniques engineers use to increase performance of software(for starters):

Software:

- Efficient algorithms
- Caching

Hardware:

- Adding more machines
- Adding more power to machine

### Efficiency
<h3 id="efficiency" style="visibility:hidden"></h3>


How useful is speed and durability of a car, if it takes whole salary out of your pocket?

Software engineers reduce cost of building software by using these(for starters):

- Good Architecture
    - Abstraction
    - Encapsulation
    - Layering


- Good tooling for increased reusability

I will talk about architecture a lot in the future, because architecture is the main tool we use to heal complexity and reduce costs.

## Processes
<h2 id="processes" style="visibility:hidden"></h2>

Software engineers measure everything and make informed decisions(based on data, not emotions) in order to increase efficiency.

For them, everything is about optimizing the ways in which they do things.

> Follow the chain - design, execute, improve and never stop doing that.

Exercise: Record yourself while you are working. What can be improved?

I will talk a lot about process thinking in the future.
Specifically about [TDD](https://en.wikipedia.org/wiki/Test-driven_development) and [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) as ways to organize your development process.

Now, let's talk about general parts i emphasized earlier.

> Processes = Work plan * Personality

### Work plan
<h3 id="work-plan" style="visibility:hidden"></h3>

You always need to be prepared in advance.

I used to do things just in time, but that doesn't work.
Planning and preparation can take you far.

**The catch with planning is that engineers rarely plan extensively. They work in drafts. Every new draft is new increment. Every increment is then perfected iteratively.**

> 10 minute planning can save you hours of work.

### Personality
<h3 id="personality" style="visibility:hidden"></h3>

It is a fuel for everything, because your brain cares about it.

**Your brain does not care about work, because one of its functions is to preserve energy.**

**Only when you start identifying your work with who you are, brain starts to work with you.**

If you are interested in neuroscience and want to know what makes the information to stick, i recommend this beautiful book - [Thinking Fast And Slow](https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow)

Let's see what are the key personality traits i observed.

> Personality = Curiosity * Ego

#### Curiosity
<h4 id="curiosity" style="visibility:hidden"></h4>

If there is one most common theme in personalities of really great engineers, then it is using curiosity as a driving force for everything they do. If you have this in you or if you can develop it i would place my bets in your corner.

> Side effects of curiosity are **excitement**, **awareness**, **continuous improvement**,
which are all key ingredients for success in software engineering. You need to make your emotions to work with you, not against you.

Just listen to [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman) and try to not be amazed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/36GT2zI8lVA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Richard Feynman is one of the greatest people of our time and a perfect role model.**

#### Ego
<h4 id="ego" style="visibility:hidden"></h4>


Ego is another common thing in engineering world. While it is not politically correct for one to have huge ego, it may be very useful tool in your arsenal, if you use it in a right way.

**Everything can be misused, so be careful.**

Always remind yourself that being humble is a virtue, not because other people are smart but because the world is too complex for you to be right all the time.

Egoists tend to:

- not believe other people
- ask more questions
- have more competitive spirit
- have bold opinions

> Having opinions is very important in SE because there are a lot of options out there for everything you imagine. It forces you to think critically and ignore unimportant stuff.

[Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) is perfect known example, but this theme is pretty common in engineering, as i said.

## Closing notes
<h2 id="closing-notes" style="visibility:hidden"></h2>


I will try to constantly update this post, as i discover more patterns.

There is something truly beautiful in internalizing mindsets of great people.

You are expanding your horizons. Imagine if you can be a mixture of them all, or even add your secret ingredients. This is what they mean by "super-powers"

Have you noticed any interesting pattern originating from people in your environment?

Feel free to [inform me](mailto:vladamx.dev@gmail.com) about that. I am curious to know.
