---
layout: post
title: Almost Always Auto style
---

With the rise of C++11, we see a paradigm shift in C++ from the so-called left-to-right declaration style. For instance, function return types can now be written right from the function name and the new `using` directive also has the type on the right. Variable declaration with `auto` is just a part of the larger change that is going on. There are many advantages of using auto, including no implicit accidental conversion, removal of visual clutter, less refactoring overhead, consistency. Therefore, as a general rule, auto can and should be applied except in a few cases, when moving is either expensive or forbidden.

Examples of the right-hand style and usage of auto:

{% highlight c++ %}
// Stack Allocation
auto e = employee{empid};

// Heap Allocation
auto w = make_unique<widget>();

// Literal Suffixes (User-defined suffixes coming in C++14)
auto x = 42; // int 
auto x = 42.0f; // float
auto x = 42ul; // unsigned long
auto x = "42"s; // C++14, std::string
auto x = 42ns; // C++14, std::nano_seconds

// Function declarations and named lambdas
auto f(double) -> int { ... }
auto f = [=] (double) -> int { ... };

// Alias declarations
using dict = set<string>;

template <class T>
using vec = vector<T, myalloc>;

// Not applicable for:
auto arr = std::array<int, 1000>{}; // Expensive to move
auto lock = std::lock_guard<std::mutex>{m} // Not movable
{% endhighlight %}

For more information about the new paradigm, visit Herb Sutter's [blog](http://herbsutter.com/2013/08/12/gotw-94-solution-aaa-style-almost-always-auto/).
