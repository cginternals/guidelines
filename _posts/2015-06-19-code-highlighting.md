---
layout: post
title: Reasonable Default Advice for Passing Parameters
date: 2015-06-17 14:42:59
categories: c++
---

Some text before.

{% highlight c++ %}
template <typename Type>
class Accessor : public AbstractAccessor
{
public:
    /**
    *  @brief
    *    Constructor
    */
    Accessor();

    /**
    *  @brief
    *    Destructor
    */
    virtual ~Accessor();

    /**
    *  @brief
    *    Check if accessor points to a const (read-only) value
    *
    *  @return
    *    'true' if value is read-only, else 'false'
    */
    virtual bool isReadOnly() const;

    /**
    *  @brief
    *    Get pointer to the stored value
    *
    *  @return
    *    Pointer to the stored value, can be nullptr
    *
    *  @remarks
    *    The return value depends on the actual type of accessor, e.g.,
    *    an AccessorGetSet cannot return a pointer to its value, so the
    *    return value will always be nullptr.
    */
    virtual Type * ptr() const = 0;

    /**
    *  @brief
    *    Get stored value
    *
    *  @return
    *    Value
    */
    virtual Type value() const = 0;

    /**
    *  @brief
    *    Set stored value
    *
    *  @param[in] value
    *    Value
    */
    virtual void setValue(const Type & value) = 0;

    // Virtual AbstractAccessor interface
    virtual const std::type_info & type() const;
    virtual bool canConvert(const std::type_info & targetType) const override;
    virtual bool convert(void * target, const std::type_info & targetType) const override;
};
{% endhighlight %}
