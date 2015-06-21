---
layout: post
title: Naming Conventions for Accessors
date: 2015-06-21 01:03:04
categories: c++
---

When naming accessors within classes, non-trivial getters and queries, i.e., those that perform calculations, you should prepended `get`. All other getters have no prefix and setters have the `set` prefix.

{% highlight c++ %}
class Object
{
public:
  int radius() const;
  void setRadius(int value);

  int getPerimeter();

private:
  int m_radius;
};

int Object::radius() const
{
    return m_radius;
}

void Object::setRadius(int value)
{
    m_radius = value;
}

int Object::getPerimeter()
{
    return 2 * pi * m_radius;
}
{% endhighlight %}
