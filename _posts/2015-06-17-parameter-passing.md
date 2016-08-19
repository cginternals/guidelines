---
layout: post
title: Reasonable Default Advice for Passing Parameters
---

When passing arguments to functions, consider the following table to decide how to pass variables.

<table class="table table-sm table-bordered table-centered">
  <thead>
    <tr>
      <th></th>
      <th>cheap/impossible to copy</th>
      <th>cheap/moderate to move or don't know</th>
      <th>expensive to move</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Out</td>
      <td colspan="2"><code>X f()</code></td>
      <td><code>f(X&)</code>*</td>
    </tr>
    <tr>
      <td>In/Out</td>
      <td colspan="3"><code>f(X&)</code></td>
    </tr>
    <tr>
      <td>In</td>
      <td rowspan="2"><code>f(X)</code></td>
      <td rowspan="2" colspan="2"><code>f(const X&)</code></td>
    </tr>
    <tr>
      <td class="table-border-right">retain "copy"</td>
    </tr>
  </tbody>
</table>



* Cheap or impossible to move, e.g., `int`, `unique_ptr`
* Cheap to move, e.g., `vector<T>`, `string`
* Moderate cost to move, e.g., `array<vector>`, `BigPOD`
* Don't know, unfamiliar type, template …
* Expensive to move, e.g., `BigPOD[]`, `array<BigPOD>`
{: .list-reset }

<p>*or return smart pointer at the cost of dynamic allocation</p>

The table is taken from Herb Sutter's talk ["Back to the Basics!"](https://youtu.be/xnqTKD8uD64) at CppCon 2014.
