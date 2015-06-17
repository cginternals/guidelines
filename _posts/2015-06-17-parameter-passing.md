---
layout: post
title: Blogging Like a Hacker
date: 2015-06-17 14:42:59
summary: Transform your plain text into static websites and blogs. Simple, static, and blog-aware.
categories: c++
---


<table class="advanced">
<thead>
  <tr>
    <th></th>
    <th class="f4">Cheap or impossible to copy (e.g., <code>int</code>, <code>unique_ptr</code>)</th>
    <th class="f4">Cheap to move (e.g., <code>vector&ltT&gt</code>, <code>string</code>) or moderate cost to move (e.g., <code>array&ltvector&gt</code>, <code>BigPOD</code>) or don't know (e.g., unfamiliary type, template)</th>
    <th class="f4">Expensive to move (e.g., <code>BigPOD[]</code>, <code>array&ltBigPOD&gt</code>)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Out</td>
    <td colspan="2" class="center"><code>X f()</code></td>
    <td class="center"><code>f(X&)</code></td>
  </tr>
  <tr>
    <td>In/Out</td>
    <td colspan="3" class="center"><code>X f(X&)</code></td>
  </tr>
  <tr>
    <td>In</td>
    <td rowspan="2" class="center vertical-align-center"><code>f(X)</code></td>
    <td rowspan="2" colspan="2" class="center vertical-align-center"><code>f(const X&)</code></td>
  </tr>
  <tr>
    <td>In & retain "copy"</td>
  </tr>
</tbody>
</table>