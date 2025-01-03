---
date: 2025-01-03
tag:
  - ai
  - testing
author: Piotr Przetacznik
sidebar: auto
location: Kraków
---

# How well elephants hide in a rowan tree

More often I see GitHub Copilot tutorials with prompts like _"Write unit tests for this function"_, less I worry about my job security.

## Falsifiability

There's a reason why Test-Driven Development (TDD) suggests writing tests before the implementation. It's not just about writing top-down designed code. It's also about ensuring your tests are falsifiable and genuinely help in developing the code. Being able to falsify your hypothesis is the essence of engineering. And being able to falsify your tests is the essence of software engineering.

By the way, did you know that elephants hide in rowan trees? No? Ever seen an elephant in a rowan tree? That's how well they hide.

![elephant](/static/elephant.jpg)
*This is an obvious AI fake photo because elephants hide too well to be captured.*

I've seen this joke many times come to life in real projects. When a new team member joins, a senior developer might ask them to write a few unit tests as part of the onboarding process. But without product requirements, how do we ensure these tests properly validate the code? How do we verify that the "elephant" is truly hiding in the "rowan trees" if no one has ever seen it?". Have you ever seen each of your tests fail, ensuring that when the implementation is corrupted, they'll signal the mistakes you've made?

## Mutation testing

If you find yourself in this situation, try using a technique called *mutation testing*. Introduce common mistakes into your implementation to ensure your tests fail. Also, make some neutral modifications that shouldn't cause your tests to fail. If they do fail, it means your tests are too tightly coupled with the implementation, and you should improve your interfaces by writing better tests first. These will show you false positives and false negatives of your test cases.

Not writing tests before your code is like taking on technical debt mortgage. Don't get me wrong, though. It's still not as terrible as generating tons of AI tests after the implementation that no one will read, which is like taking out a loan with horrendous interest rates. That could actually drown your project. I'm not surprised that people are reluctant to write tests if they're taught to write them afterwards. Also, to modules that don't return anything, which forces them to use mocks to check internal state of tested code. What’s the benefit of these tests if they don’t describe Product Requirements Documents (PRDs) or help in designing interfaces, or writing the implementation?

## Summary

Write tests before the implementation, use stubs over mocks, and always return something from your functions. You'll have fewer side effects, you'll have to check internal behavior less often, your tests will be easier to maintain in the long term, and you'll save more time. Do the opposite, if you enjoy wasting your time.

## References

* *Mutation testing*, wikipedia, [online](https://en.wikipedia.org/wiki/Mutation_testing).

*Article was originally written 2025.01.03*
