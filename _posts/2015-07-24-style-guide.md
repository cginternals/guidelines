---
layout: post
title: Style Guide
---

#### Basic Notes

* A file is devided into several sections, each section can consist of several blocks.
* Insert two empty lines between sections.
* Insert one empty line between blocks.


#### Example/Template

{% comment %}

    data-line="2,5-12,15-22,25-26,29-31,34-38,40-45,48-49,52-60,63-130,133-138,141-146,150"

    data-comment-line-1="One line"
    data-comment-line-3="Two lines"
    data-comment-line-5="** Includes **"
    data-comment-line-7="One block per library"
    data-comment-line-8="One line between each block"
    data-comment-line-10="Sort roughly by dependency order"
    data-comment-line-11="(stl, boost, qt, glbinding, globjects, gloperate, ...)"
    data-comment-line-13="Two lines"
    data-comment-line-15="** Forward declarations (imported) **"
    data-comment-line-17="One line between namespaces"
    data-comment-line-23="Two lines"
    data-comment-line-25="** Own namespace **"
    data-comment-line-27="Two lines"
    data-comment-line-29="** Forward declarations (own namespace) **"
    data-comment-line-30="No free lines"
    data-comment-line-32="Two lines"
    data-comment-line-34="** Class declaration **"
    data-comment-line-36="Provide at least a brief description!"
    data-comment-line-40="** Public data types **"
    data-comment-line-42="One line between each block"
    data-comment-line-46="Two lines"
    data-comment-line-48="** Public attributes (e.g., signals) **"
    data-comment-line-50="Two lines"
    data-comment-line-52="** Public static functions **"
    data-comment-line-61="Two lines"
    data-comment-line-63="** Public methods **"
    data-comment-line-65="One line between each function"
    data-comment-line-67="Do not mix methods, attributes, and types!"
    data-comment-line-68="Use separate sections for each."
    data-comment-line-70="Do not mix static functions and methods!"
    data-comment-line-71="Use separate sections for each."
    data-comment-line-131="Two lines"
    data-comment-line-133="** Protected methods **"
    data-comment-line-139="Two lines"
    data-comment-line-141="** Protected attributes **"
    data-comment-line-143="One line between each block"
    data-comment-line-148="Two lines"
    data-comment-line-150="** Close namespace **"
    data-comment-line-151="One line"

{% endcomment %}


{% highlight cpp %}
#pragma once


#include <signalzeug/Signal.h>

#include <reflectionzeug/Object.h>
#include <reflectionzeug/Variant.h>

#include <globjects/Texture.h>

#include <gloperate/gloperate_api.h>


namespace glbinding {
    class Binding;
}

namespace globjects {
    class Texture;
    class Buffer;
}


namespace gloperate
{


class ViewerContext;
class Surface;
class Pipeline;


/**
*  @brief
*    Timer class for executing timed tasks
*/
class GLOPERATE_API Timer
{
public:
    enum Type
    {
        ContinuousTimer, ///< Fire at regular intervals
        RandomTimer      ///< Fire at random intervals
    };


public:
    signalzeug::Signal<> fired; ///< Called when the timer interval has elapsed


public:
    /**
    *  @brief
    *    Get global instance
    *
    *  @return
    *    Global timer instance (never null)
    */
    static Timer * instance();


public:
    /**
    *  @brief
    *    Constructor
    *
    *  @param[in] viewerContext
    *    Viewer context to which the surface belongs (must NOT be null!)
    */
    Timer(ViewerContext * viewerContext);

    /**
    *  @brief
    *    Destructor
    */
    virtual ~Timer();

    /**
    *  @brief
    *    Check if timer is currently active
    *
    *  @return
    *    'true' if timer is active, else 'false'
    */
    bool isActive() const;

    /**
    *  @brief
    *    Start timer
    *
    *  @param[in] interval
    *    Interval (in seconds, 0.0 for continuous update in each main loop iteration)
    *  @param[in] singleShot
    *    If 'true', the timer fires only once, otherwise it will be restarted continously
    */
    void start(float interval, bool singleShot = false);

    /**
    *  @brief
    *    Stop timer
    */
    void stop();

    /**
    *  @brief
    *    Get interval
    *
    *  @return
    *    Interval (in seconds)
    */
    float interval() const;

    /**
    *  @brief
    *    Get remaining time
    *
    *  @return
    *    Remaining time (in seconds)
    */
    float remainingTime() const;

    /**
    *  @brief
    *    Update timer
    *
    *  @param[in] delta
    *    Time delta (in seconds)
    */
    void update(float delta);


protected:
    /**
    *  @brief
    *    Called when the timer has been updated
    */
    virtual void onUpdate();


protected:
    ViewerContext * m_viewerContext; ///< Viewer context to which the timer belongs
    bool            m_active;        ///< 'true' if timer is active, else 'false'
    bool            m_singleShot;    ///< 'true' if timer fires only once, else 'false'
    float           m_interval;      ///< Interval (in seconds)
    float           m_remaining;     ///< Remaining time (in seconds)
};


} // namespace gloperate
{% endhighlight %}
