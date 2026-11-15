---
title: "Debugging Unity URP: When a 2D Renderer Breaks Your 3D Lighting"
description: "How an incorrect renderer configuration caused lighting issues in a Unity 3D prototype, and what I learned while fixing it."
pubDate: 2026-11-15
category: "Unity & Learning"
series: "developer-notes"
cover: "/guanche-warriors-devlog/images/devlog/unity-urp-after.png"
draft: false
---

# Debugging Unity URP: When a 2D Renderer Breaks Your 3D Lighting

Sometimes the most frustrating bugs turn out to have surprisingly simple explanations.

While working on a lighting mechanic for a small Unity prototype, I ran into an issue that initially looked like a problem with the lighting itself.

## The Problem

We had recently transitioned our prototype from 2D to 3D using Unity's Universal Render Pipeline (URP).

However, something wasn't right.

The scene looked flat, and the lighting and shadows weren't behaving as expected. Despite working in a 3D environment, the visual result didn't reflect the depth we wanted.

## Finding the Cause

After investigating the issue, I discovered that we had overlooked an important detail during the transition.

**The project was still configured to use the 2D Renderer.**

We had changed the prototype to 3D but forgotten to update the renderer configuration.

The issue wasn't in the lighting mechanic itself. It was in how Unity was rendering the scene.

## The Solution

We switched to the appropriate 3D renderer configuration in URP.

The difference was immediately visible: the objects responded to the lighting as expected, and shadows appeared in the environment.

## Before and After

![Prototype using the 2D Renderer, with flat lighting](/guanche-warriors-devlog/images/devlog/unity-urp-before.png)

_Before: the prototype with the incorrect renderer configuration._

![Prototype using the 3D renderer, with visible lighting and shadows](/guanche-warriors-devlog/images/devlog/unity-urp-after.png)

_After: the renderer configuration was corrected._

## What I Learned

**Not every bug is caused by code.**

Sometimes the problem comes from project settings, especially when changing fundamental aspects of a game.

This experience taught me to check the rendering pipeline and renderer configuration when investigating lighting issues.

It was a small mistake, but a valuable reminder that understanding the engine is just as important as writing code.

And that's exactly why I'm documenting these experiences: every problem solved is another lesson learned.
