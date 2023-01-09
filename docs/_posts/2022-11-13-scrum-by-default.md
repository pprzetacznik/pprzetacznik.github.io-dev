---
date: 2022-11-13
tag:
  - project management
  - product ownership
  - agile
  - scrum
  - lean
author: Piotr Przetacznik
sidebar: auto
location: Kraków
---

# Scrum by default

## Criticism of Scrum

Many times when discussing the organization of teams, especially with developers, I hear responses such as _Well, I don't really like scrum, it didn't work for us_. I was trying to get deeper into arguments standing behind that reasoning and I've found the following arguments:

* _Scrum is too strict, there are too many meetings_,
* _The concept of Story Points is unclear_,
* _Scrum Master is another manager_,
* _Scrum has never been implemented properly_,
* _We're just getting things done and scrum is just slowing us down_.

In this post, I would like to point few arguments why you could consider Scrum as the default team organizational framework.

## Key objectives

When choosing an initial framework we first need to answer a few questions about the future goals of our team. Some of these key points are listed below.

* Delivery,
* Doing research,
* Knowledge sharing,
* Team building,
* Team resiliency,
* Documentation,
* Creation of future processes.

My opinion is that we could be discussing these topics for long weeks and still wouldn't get to an agreement on how exactly our process should look to satisfy these requirements. Instead, when launching the team, we can make the following trade. Let's start with Scrum as this framework is the most commonly known and described framework, and let's fit the process to our needs over time.

## Role of Scrum Master

Probably the biggest controversies arise when it comes to the responsibilities of the Scrum Master. The management demands from Scrum Master that the team will deliver things faster. On the other hand, the team asks the Scrum Master technical questions about stories implementation or requirements specification, when none of these things is the Scrum Master's job.

The thing is, Scrum Master is not a job but a role. And you can't fire a role. But when you don't have a full-time Scrum Master, someone has to play that role in your team anyway. So what are the responsibilities of a Scrum Master?

Foremost, Scrum Master is a person responsible for process management. They're so-called **horizontal managers**, therefore Scrum Master is not a line manager and they don't push developers to work faster, but rather they're telling them what the current process is. The process, the whole team has agreed on.

## Team resiliency

So what process management means in practice, besides running scrum meetings? In my opinion, the hardest part of the job is the famous **art of saying no**. There is always that developer who says _"I'm not proficient with this task, if I could get similar task to what I already did 100 times and my colleague will get the task that they're proficient in, we could get things done much faster"_. And there's always that manager who micromanages them and approves that because they gave some commitment to their stakeholders. Well, I'm seeing a great danger when such an approach gets through. What we're gaining is short-term quick deliverables, but what we're losing is team resiliency. If you don't have a person watching for these things, you can end up with a team of subject matter experts of which everyone is not touching other's people pieces of code because it's not their expertise. In extreme cases, when these subject matter experts are starting going on holidays sequentially, you may have whole epics being stuck for months.

You can see that modern organizations emphasize an approach where the team is the smallest organizational unit to avoid these situations. And to avoid the pattern of growing *subject matter experts*, they apply the technique called **swarming over tickets**. That means, there's a huge focus on that every team member knows at least the fundamentals of how the whole system works. When someone leaves the team, they need to hand over only the latest story to their teammates. And when someone joins the team, there's a focus to let that person grow by giving them some task from all of the subjects.

So to support team resiliency, Scrum Master needs to be **assertive** and know how to properly **balance between delivery and teamwork** by reminding the team about the values of team collaboration.

## Scrum Master's role as a coach

I've heard countless times that Scrum Masters don't know the technical parts of the system and when you ask them for help with technicalities they're avoiding answers by asking you _"Who can give you that answer?"_.

_"Why do I need Scrum Master if they're always asking me during the meeting how to implement the story and write this on the Confluence?"_

That is because asking these questions is the job. They should be asking everyone around the table for their opinion and elaborating details of the story to other team members so that everyone feels **invited to the table**. If they would impact the implementation of the story by telling you what to do they wouldn't be doing their job, and you would need another person moderating the meetings. Otherwise, you may end up with a team of individuals who are focused only on their things.

## Story points

I've seen many times calculating the performance of individuals in the scrum team based on the number of story points delivered. My advice would be not to do that unless you want to end up with a band of individuals. Think about that from that perspective, if you're a football coach and you're paying your players for scoring goals, will your player choose to score or pass a ball to the player that has a much better position to shoot? The same is with scrum teams and helping each other. That's why in scrum you're focused on the team's velocity, not the velocity of individuals. If you want to do a performance review of your developers, you need to make better than that and consider more factors, eg. writing documentation, active participation in meetings, or mentoring others. Scrum Master role should be a separate role from **line manager's role**. You can find in multiple books, eg. (Bock 2016), (Reilly 2022) and (Hastings and Meyer 2020) how to do the performance review properly.

Another argument against story points I've heard was _"this is working just in books, this is not how real projects are working"_. Let me bring Mike Cohn's book once again (Cohn 2005) and get to the basics. Story points are relational units that are taking into consideration complexity, effort, and uncertainty. You are measuring stories compared to other stories in the backlog based on how your team has calibrated the scale and the split of these stories. When your team starts presenting stable velocity, you can start planning far into the future.

When you're taking the alternative approach of hours or days, you usually make some implicit assumptions, eg.
* Working day has 8 hours - that's a lie because you always have other meetings, _the perfect day_ doesn't exist,
* Everyone in the team can do the story with the same velocity - that's another lie because team members have a different skill sets,
* The story development shouldn't take more than the estimated number of hours/days - that's a lie because you usually guess the most probable number of hours needed to implement the story. That means, if you're lucky, you'll be right in 50% of cases (Martin 2011).

If you like to lie to yourself or your stakeholders, go ahead and choose **mandays**. You can even authoritatively commit your team to your stakeholders and delegate that commitment to the team.

Or you can organize Planning Poker and calibrate your teams' velocity by asking them to split the stories and for their estimations that will help you plan more realistic roadmaps based on how many stories points your team can deliver each sprint.

## Retrospectives

This is in my opinion the strongest tool Scrum tool. At the very beginning, Scrum can be very strict and leaders need to enforce the process and a few tools to just start doing some work. But as time goes on, the best ideas come from the team and retrospective gives the place for sharing these thoughts. If the team wants to go more Kanban, they are free to do that because Scrum provides that meeting as part of the framework. At the most convenient time, you can even organize **a team charter meeting**, where the team will collectively put some team rules on the confluence page that they can commit to following. The iterative character of the framework gives always tools for reviewing that process in the future if needed.

## Summary

I know there will be people reading Scrum Guide literally and saying that what I'm describing here is not *the real scrum*. But what the real scrum actually means? Co-founders of Scrum Framework have signed under *Agile Manifesto* so we can assume that they do care about team building as much as they care about the core process. And they also care about agility. Scrum Master role was evolving over time and now it look like more leadership role. The point of this article was to ephesize the importance of team building at the early stages. From my experience, it's much easier to start with Scrum process and adapt the process to the purpose of the team's goals, rather than starting from other processes where you don't have useful tools (such as retrospectives or story points) by default.

## References

* *Scrum Guide*, [online](https://scrumguides.org/scrum-guide.html),
* *Tuckman's stages of group development*, wikipedia, [online](https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development),
* *We fired our top talent. Best decision we ever made*, [online](https://blog.solha.co/we-fired-our-top-talent-best-decision-we-ever-made-4c0a99728fde),
* *Bus factor*, wikipedia, [online](https://en.wikipedia.org/wiki/Bus_factor),
* Fowler, Martin, *CodeOwnership*, 2006, [online](https://martinfowler.com/bliki/CodeOwnership.html),
* Cohn, Mike, *Agile Estimating and Planning*, 2005,
* Martin, Robert, *Clean Coder, The: A Code of Conduct for Professional Programmers*, 2011,
* Jurgen, Appelo , *Management 3.0*, 2011,
* Bock, Laszlo, *Work Rules!: Insights from Inside Google That Will Transform How You Live and Lead*, 2016,
* Reilly, Tanya, *The Staff Engineer's Path: A Guide For Individual Contributors Navigating Growth and Change*, 2022,
* Hastings, Reed and Meyer, Erin, *No Rules Rules: Netflix and the Culture of Reinvention*, 2020.

*Article was originally written 2022.11.13*
