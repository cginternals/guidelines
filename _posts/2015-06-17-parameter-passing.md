---
layout: post
title: Reasonable Default Advice for Passing Parameters
date: 2015-06-17 14:42:59
categories: c++
---

When passing arguments to functions, consider the following table to decide how to pass variables.

{% include parameter_passing_table.html %}

* __Cheap or impossible to move__, e.g., `int`, `unique_ptr`
* __Cheap to move__, e.g., `vector<T>`, `string`
* __Moderate cost to move__, e.g., `array<vector>`, `BigPOD`
* __Don't know__, unfamiliar type, template …
* __Expensive to move__, e.g., `BigPOD[]`, `array<BigPOD>`
{: .list-reset }

<p>* or return smart pointer at the cost of dynamic allocation</p>

The table is taken from Herb Sutter's talk ["Back to the Basics!"](https://youtu.be/xnqTKD8uD64) at CppCon 2014.
